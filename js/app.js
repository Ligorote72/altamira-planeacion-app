/**
 * SISTEMA MAESTRO DE PLANEACIÓN Y EVIDENCIAS - MUNICIPIO DE ALTAMIRA 2025
 * Core Application Logic (v3.0 Full Evidence Suite & Lightbox)
 */

// 1. Estado Global de la Aplicación
let dbBeneficiarios = [];
let currentFilter = 'TODOS';
let currentSearchQuery = '';
let selectedBeneficiaryId = null;
let currentRole = 'planeacion';
let currentEvidenceTab = 'todas';

// Lightbox state
let currentLightboxList = [];
let currentLightboxIndex = 0;

const STORAGE_KEY = 'altamira_planeacion_beneficiarios_v3_evidencias_totales';

// 2. Inicialización
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  setupEventListeners();
  updateKPIs();
  updateFilterCounts();
  renderCards();
});

// Cargar datos con Smart Merge: GARANTIZA que todas las 330 fotos y evidencias oficiales siempre estén presentes
function initDatabase() {
  const localData = localStorage.getItem(STORAGE_KEY);
  if (localData) {
    try {
      const parsed = JSON.parse(localData);
      // Smart merge con INITIAL_BENEFICIARIOS
      dbBeneficiarios = INITIAL_BENEFICIARIOS.map(initB => {
        const found = parsed.find(p => p.id === initB.id || p.cedula === initB.cedula);
        if (found) {
          // Fusionar: mantener cambios de usuario pero asegurar que todas las fotos oficiales existan
          const officialFotos = initB.fotos || { antes: [], despues: [], videos: [], documentos: [], todas: [] };
          const userFotos = found.fotos || { antes: [], despues: [], videos: [], documentos: [], todas: [] };

          // Combinar fotos sin duplicados
          const mergeArrays = (arr1 = [], arr2 = []) => {
            const set = new Set(arr1);
            arr2.forEach(x => { if (typeof x === 'string' && !set.has(x)) set.add(x); });
            return Array.from(set);
          };

          return {
            ...initB,
            ...found,
            fotos: {
              antes: mergeArrays(officialFotos.antes, userFotos.antes),
              despues: mergeArrays(officialFotos.despues, userFotos.despues),
              videos: mergeArrays(officialFotos.videos, userFotos.videos),
              documentos: mergeArrays(officialFotos.documentos, userFotos.documentos),
              todas: officialFotos.todas && officialFotos.todas.length > 0 ? officialFotos.todas : (userFotos.todas || [])
            }
          };
        }
        return initB;
      });

      // Agregar beneficiarios creados por el usuario que no estén en la base oficial
      parsed.forEach(p => {
        if (!dbBeneficiarios.some(b => b.id === p.id || b.cedula === p.cedula)) {
          dbBeneficiarios.push(p);
        }
      });
    } catch (e) {
      console.warn("Error leyendo localStorage, recargando base oficial:", e);
      dbBeneficiarios = [...INITIAL_BENEFICIARIOS];
    }
  } else {
    dbBeneficiarios = [...INITIAL_BENEFICIARIOS];
  }
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dbBeneficiarios));
}

// 3. Event Listeners
function setupEventListeners() {
  // Buscador en tiempo real
  const searchInput = document.getElementById('globalSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    clearBtn.style.display = currentSearchQuery.length > 0 ? 'block' : 'none';
    renderCards();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
    renderCards();
  });

  // Filtros por chips de programa
  const chips = document.querySelectorAll('.chip-btn');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.getAttribute('data-filter');
      renderCards();
    });
  });

  // Modales
  document.getElementById('btnCloseModal').addEventListener('click', closeModal);
  document.getElementById('beneficiaryModal').addEventListener('click', (e) => {
    if (e.target.id === 'beneficiaryModal') closeModal();
  });

  // Modal Nuevo Beneficiario
  const openNewModal = () => document.getElementById('newBeneficiaryModal').classList.add('active');
  const closeNewModal = () => document.getElementById('newBeneficiaryModal').classList.remove('active');
  
  document.getElementById('btnOpenNewModal').addEventListener('click', openNewModal);
  document.getElementById('fabNewBeneficiary').addEventListener('click', openNewModal);
  document.getElementById('btnCloseNewModal').addEventListener('click', closeNewModal);
  document.getElementById('btnCancelNew').addEventListener('click', closeNewModal);

  // Formulario Nuevo Beneficiario
  document.getElementById('newBeneficiaryForm').addEventListener('submit', handleNewBeneficiarySubmit);

  // Selector de Rol
  const roleModal = document.getElementById('roleModal');
  document.getElementById('roleSelectorBtn').addEventListener('click', () => roleModal.classList.add('active'));
  document.getElementById('btnCloseRoleModal').addEventListener('click', () => roleModal.classList.remove('active'));
  
  document.querySelectorAll('.role-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.getAttribute('data-role');
      setRole(role);
      roleModal.classList.remove('active');
    });
  });

  // Subida de Fotos en Modal (Directa y Múltiple)
  document.getElementById('inputFotoAntes').addEventListener('change', (e) => handlePhotoUpload(e, 'antes'));
  document.getElementById('inputFotoDespues').addEventListener('change', (e) => handlePhotoUpload(e, 'despues'));

  // Botón Inferior para Cerrar Ficha
  const btnCerrarInferior = document.getElementById('btnCerrarModalInferior');
  if (btnCerrarInferior) {
    btnCerrarInferior.addEventListener('click', closeModal);
  }

  // Controles del Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  document.getElementById('btnLightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('btnLightboxPrev').addEventListener('click', prevLightbox);
  document.getElementById('btnLightboxNext').addEventListener('click', nextLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target.id === 'lightboxModal' || e.target.classList.contains('lightbox-container')) {
      closeLightbox();
    }
  });

  // Navegación por Teclado
  window.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    }
  });

  // Exportar Excel
  document.getElementById('btnExportExcel').addEventListener('click', exportToExcel);

  // Imprimir Ficha
  document.getElementById('btnImprimirFicha').addEventListener('click', () => window.print());
  document.getElementById('btnGuardarFicha').addEventListener('click', () => {
    saveToStorage();
    closeModal();
    renderCards();
    updateKPIs();
  });
}

// 4. Renderizado de Tarjetas de Beneficiarios
function renderCards() {
  const grid = document.getElementById('beneficiariosGrid');
  grid.innerHTML = '';

  const filtered = dbBeneficiarios.filter(b => {
    // Filtro por programa o fotos
    let matchFilter = false;
    const totalFotos = getTotalEvidences(b);
    if (currentFilter === 'TODOS') {
      matchFilter = true;
    } else if (currentFilter === 'CON_FOTOS') {
      matchFilter = totalFotos > 0;
    } else {
      matchFilter = b.programa.toUpperCase().includes(currentFilter.toUpperCase());
    }
    
    // Filtro por búsqueda
    const matchSearch = currentSearchQuery === '' ||
                        b.cedula.toLowerCase().includes(currentSearchQuery) ||
                        b.nombre.toLowerCase().includes(currentSearchQuery) ||
                        b.vereda.toLowerCase().includes(currentSearchQuery);

    return matchFilter && matchSearch;
  });

  document.getElementById('visibleCount').textContent = filtered.length;
  document.getElementById('totalCount').textContent = dbBeneficiarios.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--text-muted);">
        <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
        <h3 style="color: #fff; font-size: 1.1rem; margin-bottom: 6px;">No se encontraron beneficiarios</h3>
        <p style="font-size: 0.85rem;">Intenta con otro número de cédula o nombre</p>
      </div>
    `;
    return;
  }

  filtered.forEach(b => {
    const card = document.createElement('article');
    card.className = 'beneficiary-card';
    card.setAttribute('data-id', b.id);

    const progClass = getProgClass(b.programa);
    const totalFotos = getTotalEvidences(b);

    // Miniaturas
    let photoPreviewHtml = '';
    if (totalFotos > 0) {
      const thumbs = getCardThumbnails(b);
      const extraCount = totalFotos - thumbs.length;
      const hasVideos = (b.fotos?.videos?.length || 0) > 0;
      const hasDocs = (b.fotos?.documentos?.length || 0) > 0;

      let icons = '📸';
      if (hasVideos) icons += ' 🎬';
      if (hasDocs) icons += ' 📄';

      photoPreviewHtml = `
        <div class="photo-preview-indicator">
          <span>${icons}</span> <strong>${totalFotos} ${totalFotos === 1 ? 'evidencia' : 'evidencias'}</strong>
          <div class="photo-thumb-strip">
            ${thumbs.map(src => `<img src="${src}" class="photo-thumb-mini" alt="Evidencia" loading="lazy">`).join('')}
            ${extraCount > 0 ? `<span style="font-size: 0.72rem; color: var(--emerald-primary); font-weight: 700; align-self: center; margin-left: 2px;">+${extraCount}</span>` : ''}
          </div>
        </div>
      `;
    } else {
      photoPreviewHtml = `
        <div class="no-photos-pill">
          <span>📷</span> <span>Sin evidencias</span>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-top">
        <h3 class="card-title">${highlightText(b.nombre, currentSearchQuery)}</h3>
        <span class="badge-prog ${progClass}">${b.programa}</span>
      </div>

      <div class="card-details-grid">
        <div class="detail-item">
          <span class="detail-label">Cédula</span>
          <span class="detail-val" style="color: var(--emerald-primary);">${highlightText(b.cedula, currentSearchQuery)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Año / Vigencia</span>
          <span class="detail-val" style="color: var(--amber-gold);">${b.vigencia || '2025'}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Vereda / Ubicación</span>
          <span class="detail-val">${b.vereda}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Sisbén</span>
          <span class="detail-val">${b.sisben}</span>
        </div>
      </div>

      <div class="card-footer">
        ${photoPreviewHtml}
        <button class="btn-open-modal">Ver Expediente (${totalFotos})</button>
      </div>
    `;

    card.addEventListener('click', () => openBeneficiaryModal(b.id));
    grid.appendChild(card);
  });
}

function getTotalEvidences(b) {
  if (!b.fotos) return 0;
  if (b.fotos.todas && b.fotos.todas.length > 0) return b.fotos.todas.length;
  return (b.fotos.antes?.length || 0) + (b.fotos.despues?.length || 0) + (b.fotos.videos?.length || 0) + (b.fotos.documentos?.length || 0);
}

function getCardThumbnails(b) {
  const thumbs = [];
  if (b.fotos?.todas && b.fotos.todas.length > 0) {
    b.fotos.todas.filter(item => item.tipo === 'foto').slice(0, 3).forEach(item => thumbs.push(item.src));
  } else {
    if (b.fotos?.antes) thumbs.push(...b.fotos.antes.slice(0, 2));
    if (b.fotos?.despues) thumbs.push(...b.fotos.despues.slice(0, 2));
  }
  return thumbs.slice(0, 3);
}

function getProgClass(prog) {
  const p = prog.toUpperCase();
  if (p.includes('MEJORAMIENTO')) return 'prog-mejoramiento';
  if (p.includes('POZO')) return 'prog-pozo';
  if (p.includes('ESTUFA')) return 'prog-estufa';
  return 'prog-vivienda';
}

function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span style="background: rgba(0, 245, 160, 0.3); color: #fff; padding: 0 2px; border-radius: 2px;">$1</span>');
}

// 5. Modal Ficha Técnica y Expediente de Evidencias (Modo Directo y Simplificado)
function openBeneficiaryModal(id) {
  selectedBeneficiaryId = id;
  const b = dbBeneficiarios.find(item => item.id === id);
  if (!b) return;

  const modal = document.getElementById('beneficiaryModal');
  
  document.getElementById('modalNombre').textContent = b.nombre;
  document.getElementById('modalCedulaVereda').textContent = `Cédula: ${b.cedula} • Vereda: ${b.vereda}`;
  document.getElementById('modalBadgeProg').textContent = b.programa;
  document.getElementById('modalBadgeProg').className = `badge-prog ${getProgClass(b.programa)}`;
  
  document.getElementById('modalValCedula').textContent = b.cedula;
  document.getElementById('modalValVigencia').textContent = b.vigencia || '2025';
  document.getElementById('modalValSisben').textContent = b.sisben;
  document.getElementById('modalValCelular').textContent = b.celular;
  document.getElementById('modalValEstado').textContent = b.estado;

  // Botones de llamada y WhatsApp
  const cleanCelular = (b.celular || '').replace(/\D/g, '');
  const btnLlamar = document.getElementById('modalBtnLlamar');
  const btnWhatsApp = document.getElementById('modalBtnWhatsApp');

  if (cleanCelular.length >= 7) {
    btnLlamar.onclick = () => window.open(`tel:${cleanCelular}`, '_self');
    btnWhatsApp.onclick = () => window.open(`https://wa.me/57${cleanCelular}?text=${encodeURIComponent('Hola ' + b.nombre + ', nos comunicamos de la Secretaría de Planeación del Municipio de Altamira sobre su beneficio de ' + b.programa)}`, '_blank');
    btnLlamar.style.opacity = '1';
    btnWhatsApp.style.opacity = '1';
  } else {
    btnLlamar.onclick = () => alert('El beneficiario no tiene un celular válido registrado.');
    btnWhatsApp.onclick = () => alert('El beneficiario no tiene un celular válido registrado.');
    btnLlamar.style.opacity = '0.5';
    btnWhatsApp.style.opacity = '0.5';
  }

  // Renderizar Secciones Directas de Fotos: ANTES y DESPUÉS
  renderDirectEvidenceBlocks(b);

  modal.classList.add('active');
}

function renderDirectEvidenceBlocks(b) {
  const gridAntes = document.getElementById('gridFotosAntes');
  const gridDespues = document.getElementById('gridFotosDespues');
  const counterAntes = document.getElementById('counterFotosAntes');
  const counterDespues = document.getElementById('counterFotosDespues');

  gridAntes.innerHTML = '';
  gridDespues.innerHTML = '';

  const fotosAntes = b.fotos?.antes || [];
  const fotosDespues = b.fotos?.despues || [];

  counterAntes.textContent = `${fotosAntes.length} ${fotosAntes.length === 1 ? 'foto registrada' : 'fotos registradas'}`;
  counterDespues.textContent = `${fotosDespues.length} ${fotosDespues.length === 1 ? 'foto registrada' : 'fotos registradas'}`;

  // Helper para renderizar fotos de una fase (Antes / Después)
  const renderPhotoGrid = (container, photosList, fase) => {
    if (!photosList || photosList.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 22px 10px; color: var(--text-dim); background: rgba(255,255,255,0.02); border-radius: var(--radius-sm); border: 1px dashed var(--border-subtle);">
          <span style="font-size: 24px; display: block; margin-bottom: 4px;">📷</span>
          <strong style="font-size: 0.82rem; color: #fff;">No hay fotos del ${fase} registradas</strong>
          <div style="font-size: 0.74rem; color: var(--text-dim); margin-top: 3px;">Toca el botón de arriba "+ Subir Foto ${fase === 'antes' ? 'Antes' : 'Después'}" para agregar</div>
        </div>
      `;
      return;
    }

    const lightboxItems = photosList.map((src, i) => ({
      src,
      nombre: `Foto ${fase.toUpperCase()} #${i + 1} • ${b.nombre}`,
      fase
    }));

    photosList.forEach((src, idx) => {
      const card = document.createElement('div');
      card.className = 'evidence-thumb-card';
      card.innerHTML = `
        <img src="${src}" class="evidence-thumb-img" alt="Foto ${fase}" loading="lazy">
        <button class="evidence-delete-btn" title="Eliminar foto">✕</button>
      `;

      // Eliminar foto con confirmación
      card.querySelector('.evidence-delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`¿Deseas eliminar esta fotografía de ${fase}?`)) {
          b.fotos[fase].splice(idx, 1);
          if (b.fotos.todas) {
            b.fotos.todas = b.fotos.todas.filter(item => item.src !== src);
          }
          saveToStorage();
          renderDirectEvidenceBlocks(b);
          renderCards();
          updateKPIs();
        }
      });

      // Abrir en visor de pantalla completa (Lightbox)
      card.addEventListener('click', () => {
        openLightbox(lightboxItems, idx);
      });

      container.appendChild(card);
    });
  };

  renderPhotoGrid(gridAntes, fotosAntes, 'antes');
  renderPhotoGrid(gridDespues, fotosDespues, 'despues');

  // Sección Multimedia (Videos y Documentos si existen)
  const blockMedia = document.getElementById('blockMultimedia');
  const gridMedia = document.getElementById('gridMultimedia');
  const counterMedia = document.getElementById('counterMultimedia');
  gridMedia.innerHTML = '';

  const videos = b.fotos?.videos || [];
  const docs = b.fotos?.documentos || [];
  const totalMedia = videos.length + docs.length;

  if (totalMedia > 0) {
    blockMedia.style.display = 'block';
    counterMedia.textContent = `${totalMedia} ${totalMedia === 1 ? 'archivo' : 'archivos'}`;

    videos.forEach((vSrc, vIdx) => {
      const vCard = document.createElement('div');
      vCard.className = 'evidence-video-card';
      vCard.innerHTML = `
        <div class="video-label">
          <span>🎬</span> <strong>Video de Evidencia #${vIdx + 1}</strong>
        </div>
        <video src="${vSrc}" controls playsinline preload="metadata"></video>
      `;
      gridMedia.appendChild(vCard);
    });

    docs.forEach((dSrc, dIdx) => {
      const dCard = document.createElement('div');
      dCard.className = 'evidence-doc-card';
      dCard.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 24px;">📄</span>
          <div>
            <strong style="color: #fff; font-size: 0.82rem;">Documento PDF #${dIdx + 1}</strong>
          </div>
        </div>
        <a href="${dSrc}" target="_blank" class="action-btn" style="padding: 6px 12px; font-size: 0.75rem; text-decoration: none;">
          Ver Documento
        </a>
      `;
      gridMedia.appendChild(dCard);
    });
  } else {
    blockMedia.style.display = 'none';
  }
}

function closeModal() {
  document.getElementById('beneficiaryModal').classList.remove('active');
  selectedBeneficiaryId = null;
}

// 6. Visor Lightbox Fullscreen
function openLightbox(list, index) {
  if (!list || list.length === 0) return;
  currentLightboxList = list;
  currentLightboxIndex = index;
  updateLightboxView();
  document.getElementById('lightboxModal').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightboxModal').classList.remove('active');
}

function updateLightboxView() {
  if (!currentLightboxList.length) return;
  const item = currentLightboxList[currentLightboxIndex];
  const img = document.getElementById('lightboxImg');
  img.src = item.src || item;
  
  const faseLabel = item.fase ? ` • Fase ${item.fase.toUpperCase()}` : '';
  document.getElementById('lightboxTitle').textContent = (item.nombre || `Evidencia fotográfica`) + faseLabel;
  document.getElementById('lightboxCounter').textContent = `Foto ${currentLightboxIndex + 1} de ${currentLightboxList.length}`;
}

function nextLightbox() {
  if (currentLightboxIndex < currentLightboxList.length - 1) {
    currentLightboxIndex++;
  } else {
    currentLightboxIndex = 0;
  }
  updateLightboxView();
}

function prevLightbox() {
  if (currentLightboxIndex > 0) {
    currentLightboxIndex--;
  } else {
    currentLightboxIndex = currentLightboxList.length - 1;
  }
  updateLightboxView();
}

// 7. Subida de Fotos en Vivo (Múltiple y Sencilla desde Cámara o Galería)
function handlePhotoUpload(e, type) {
  const files = e.target.files;
  if (!files || files.length === 0 || !selectedBeneficiaryId) return;

  const b = dbBeneficiarios.find(item => item.id === selectedBeneficiaryId);
  if (!b) return;

  if (!b.fotos) b.fotos = { antes: [], despues: [], videos: [], documentos: [], todas: [] };
  if (!b.fotos[type]) b.fotos[type] = [];
  if (!b.fotos.todas) b.fotos.todas = [];

  let loadedCount = 0;
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target.result;
      const isVideo = file.type.startsWith('video');

      if (isVideo) {
        if (!b.fotos.videos) b.fotos.videos = [];
        b.fotos.videos.push(base64Data);
      } else {
        b.fotos[type].push(base64Data);
      }

      b.fotos.todas.push({
        tipo: isVideo ? 'video' : 'foto',
        fase: type,
        src: base64Data,
        nombre: file.name || `Nueva evidencia ${type}`
      });

      loadedCount++;
      if (loadedCount === files.length) {
        saveToStorage();
        renderDirectEvidenceBlocks(b);
        renderCards();
        updateKPIs();
      }
    };
    reader.readAsDataURL(file);
  });

  e.target.value = ''; // Reset input para permitir subir la misma foto si se desea
}

// 8. Formulario Nuevo Beneficiario
function handleNewBeneficiarySubmit(e) {
  e.preventDefault();
  
  const cedula = document.getElementById('newCedula').value.trim();
  const nombre = document.getElementById('newNombre').value.trim().toUpperCase();
  const programa = document.getElementById('newPrograma').value;
  const vereda = document.getElementById('newVereda').value.trim().toUpperCase();
  const sisben = document.getElementById('newSisben').value.trim().toUpperCase() || 'N/A';
  const celular = document.getElementById('newCelular').value.trim() || 'POR ASIGNAR';
  const vigencia = document.getElementById('newVigencia').value.trim() || '2025';
  const estado = document.getElementById('newEstado').value;

  // Comprobar si ya existe la cédula
  const exists = dbBeneficiarios.some(b => b.cedula === cedula);
  if (exists) {
    alert(`La cédula ${cedula} ya se encuentra registrada en el sistema.`);
    return;
  }

  const newId = Date.now();
  const newBeneficiary = {
    id: newId,
    cedula,
    nombre,
    programa,
    sisben,
    vereda,
    celular,
    estado,
    vigencia,
    fotos: { antes: [], despues: [], videos: [], documentos: [], todas: [] },
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  dbBeneficiarios.unshift(newBeneficiary);
  saveToStorage();

  // Reset y cerrar
  document.getElementById('newBeneficiaryForm').reset();
  document.getElementById('newBeneficiaryModal').classList.remove('active');

  updateKPIs();
  updateFilterCounts();
  renderCards();

  alert(`¡Beneficiario ${nombre} registrado exitosamente en el sistema!`);
  openBeneficiaryModal(newId);
}

// 9. Actualizar KPIs y Contadores
function updateKPIs() {
  document.getElementById('kpiTotalBeneficiarios').textContent = dbBeneficiarios.length;
  
  const conFotos = dbBeneficiarios.filter(b => getTotalEvidences(b) > 0).length;
  document.getElementById('kpiConFotos').textContent = conFotos;

  const veredas = new Set(dbBeneficiarios.map(b => b.vereda.toUpperCase())).size;
  document.getElementById('kpiVeredas').textContent = veredas;
}

function updateFilterCounts() {
  const conFotos = dbBeneficiarios.filter(b => getTotalEvidences(b) > 0).length;

  document.getElementById('countTodos').textContent = dbBeneficiarios.length;
  if (document.getElementById('countConFotos')) {
    document.getElementById('countConFotos').textContent = conFotos;
  }
  document.getElementById('countMejoramiento').textContent = dbBeneficiarios.filter(b => b.programa.includes('MEJORAMIENTO')).length;
  document.getElementById('countPozos').textContent = dbBeneficiarios.filter(b => b.programa.includes('POZO')).length;
  document.getElementById('countEstufas').textContent = dbBeneficiarios.filter(b => b.programa.includes('ESTUFA')).length;
  document.getElementById('countVivienda').textContent = dbBeneficiarios.filter(b => b.programa.includes('VIVIENDA')).length;
}

// 10. Roles y Permisos
function setRole(role) {
  currentRole = role;
  const avatar = document.getElementById('userRoleAvatar');
  const text = document.getElementById('userRoleText');

  if (role === 'planeacion') {
    avatar.textContent = 'P';
    text.textContent = 'Planeación (Admin)';
  } else if (role === 'campo') {
    avatar.textContent = 'C';
    text.textContent = 'Supervisor de Campo';
  } else {
    avatar.textContent = 'A';
    text.textContent = 'Despacho Alcalde';
  }
}

// 11. Exportar a Excel Oficial (.xlsx)
function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    alert('Cargando librería de Excel, por favor intenta en unos segundos.');
    return;
  }

  const rows = dbBeneficiarios.map((b, index) => ({
    'No': index + 1,
    'CEDULA': b.cedula,
    'NOMBRE COMPLETO': b.nombre,
    'PROGRAMA / BENEFICIO': b.programa,
    'SISBEN / DETALLE': b.sisben,
    'VEREDA / UBICACION': b.vereda,
    'CELULAR / CONTACTO': b.celular,
    'ESTADO': b.estado,
    'AÑO / VIGENCIA': b.vigencia || '2025',
    'TOTAL EVIDENCIAS': getTotalEvidences(b),
    'FOTOS ANTES': b.fotos?.antes?.length || 0,
    'FOTOS DESPUES': b.fotos?.despues?.length || 0,
    'VIDEOS REGISTRADOS': b.fotos?.videos?.length || 0,
    'DOCUMENTOS PDF': b.fotos?.documentos?.length || 0
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'CONSOLIDADO_ACTUALIZADO');

  const fechaStr = new Date().toISOString().split('T')[0];
  XLSX.writeFile(workbook, `CONSOLIDADO_BENEFICIARIOS_ALTAMIRA_${fechaStr}.xlsx`);
}
