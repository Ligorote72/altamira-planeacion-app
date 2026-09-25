/**
 * SISTEMA MAESTRO DE PLANEACIÓN Y EVIDENCIAS - MUNICIPIO DE ALTAMIRA 2025
 * Core Application Logic
 */

// 1. Estado Global de la Aplicación
let dbBeneficiarios = [];
let currentFilter = 'TODOS';
let currentSearchQuery = '';
let selectedBeneficiaryId = null;
let currentRole = 'planeacion';

const STORAGE_KEY = 'altamira_planeacion_beneficiarios_v1';

// 2. Inicialización
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  setupEventListeners();
  updateKPIs();
  updateFilterCounts();
  renderCards();
});

// Cargar datos de LocalStorage o usar los 148 iniciales de data.js
function initDatabase() {
  const localData = localStorage.getItem(STORAGE_KEY);
  if (localData) {
    try {
      dbBeneficiarios = JSON.parse(localData);
    } catch (e) {
      dbBeneficiarios = [...INITIAL_BENEFICIARIOS];
    }
  } else {
    dbBeneficiarios = [...INITIAL_BENEFICIARIOS];
    saveToStorage();
  }
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

  // Subida de Fotos en Modal
  document.getElementById('inputFotoAntes').addEventListener('change', (e) => handlePhotoUpload(e, 'antes'));
  document.getElementById('inputFotoDespues').addEventListener('change', (e) => handlePhotoUpload(e, 'despues'));

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
    // Filtro por programa
    const matchFilter = currentFilter === 'TODOS' || 
                        b.programa.toUpperCase().includes(currentFilter.toUpperCase());
    
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
    const totalFotos = (b.fotos.antes?.length || 0) + (b.fotos.despues?.length || 0);

    // Miniaturas
    let photoPreviewHtml = '';
    if (totalFotos > 0) {
      const thumbs = [];
      if (b.fotos.antes?.[0]) thumbs.push(b.fotos.antes[0]);
      if (b.fotos.despues?.[0]) thumbs.push(b.fotos.despues[0]);
      
      photoPreviewHtml = `
        <div class="photo-preview-indicator">
          <span>📸</span> <span>${totalFotos} ${totalFotos === 1 ? 'foto' : 'fotos'}</span>
          <div class="photo-thumb-strip">
            ${thumbs.map(src => `<img src="${src}" class="photo-thumb-mini" alt="Evidencia">`).join('')}
          </div>
        </div>
      `;
    } else {
      photoPreviewHtml = `
        <div class="no-photos-pill">
          <span>📷</span> <span>Sin fotos aún</span>
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
        <button class="btn-open-modal">Ver Ficha</button>
      </div>
    `;

    card.addEventListener('click', () => openBeneficiaryModal(b.id));
    grid.appendChild(card);
  });
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

// 5. Modal Ficha Técnica
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

  // Renderizar Galerías de Fotos
  renderPhotosInModal(b);

  modal.classList.add('active');
}

function renderPhotosInModal(b) {
  const galleryAntes = document.getElementById('galleryAntes');
  const galleryDespues = document.getElementById('galleryDespues');

  galleryAntes.innerHTML = '';
  galleryDespues.innerHTML = '';

  const renderList = (container, photos, type) => {
    if (!photos || photos.length === 0) {
      container.innerHTML = `<p style="font-size: 0.78rem; color: var(--text-dim); padding: 8px;">No hay fotos registradas aún.</p>`;
      return;
    }

    photos.forEach((src, idx) => {
      const wrap = document.createElement('div');
      wrap.style.position = 'relative';
      wrap.innerHTML = `
        <img src="${src}" class="photo-preview-img" alt="Foto ${type}">
        <button title="Eliminar foto" style="position: absolute; top: 6px; right: 6px; background: rgba(0,0,0,0.6); color: #fff; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer;">✕</button>
      `;
      wrap.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm('¿Deseas eliminar esta fotografía?')) {
          b.fotos[type].splice(idx, 1);
          saveToStorage();
          renderPhotosInModal(b);
          renderCards();
          updateKPIs();
        }
      });
      wrap.querySelector('img').addEventListener('click', () => {
        window.open(src, '_blank');
      });
      container.appendChild(wrap);
    });
  };

  renderList(galleryAntes, b.fotos?.antes || [], 'antes');
  renderList(galleryDespues, b.fotos?.despues || [], 'despues');
}

function closeModal() {
  document.getElementById('beneficiaryModal').classList.remove('active');
  selectedBeneficiaryId = null;
}

// 6. Subida de Fotos en Vivo (Cámara o Galería)
function handlePhotoUpload(e, type) {
  const file = e.target.files[0];
  if (!file || !selectedBeneficiaryId) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const base64Img = event.target.result;
    const b = dbBeneficiarios.find(item => item.id === selectedBeneficiaryId);
    if (b) {
      if (!b.fotos) b.fotos = { antes: [], despues: [] };
      if (!b.fotos[type]) b.fotos[type] = [];
      b.fotos[type].push(base64Img);
      saveToStorage();
      renderPhotosInModal(b);
      renderCards();
      updateKPIs();
    }
  };
  reader.readAsDataURL(file);
  e.target.value = ''; // Reset input
}

// 7. Formulario Nuevo Beneficiario
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
    fotos: { antes: [], despues: [] },
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

// 8. Actualizar KPIs y Contadores
function updateKPIs() {
  document.getElementById('kpiTotalBeneficiarios').textContent = dbBeneficiarios.length;
  
  const conFotos = dbBeneficiarios.filter(b => 
    (b.fotos.antes && b.fotos.antes.length > 0) || 
    (b.fotos.despues && b.fotos.despues.length > 0)
  ).length;
  document.getElementById('kpiConFotos').textContent = conFotos;

  const veredas = new Set(dbBeneficiarios.map(b => b.vereda.toUpperCase())).size;
  document.getElementById('kpiVeredas').textContent = veredas;
}

function updateFilterCounts() {
  document.getElementById('countTodos').textContent = dbBeneficiarios.length;
  document.getElementById('countMejoramiento').textContent = dbBeneficiarios.filter(b => b.programa.includes('MEJORAMIENTO')).length;
  document.getElementById('countPozos').textContent = dbBeneficiarios.filter(b => b.programa.includes('POZO')).length;
  document.getElementById('countEstufas').textContent = dbBeneficiarios.filter(b => b.programa.includes('ESTUFA')).length;
  document.getElementById('countVivienda').textContent = dbBeneficiarios.filter(b => b.programa.includes('VIVIENDA')).length;
}

// 9. Roles y Permisos
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

// 10. Exportar a Excel Oficial (.xlsx)
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
    'FOTOS ANTES REGISTRADAS': b.fotos?.antes?.length || 0,
    'FOTOS DESPUES REGISTRADAS': b.fotos?.despues?.length || 0
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'CONSOLIDADO_ACTUALIZADO');

  const fechaStr = new Date().toISOString().split('T')[0];
  XLSX.writeFile(workbook, `CONSOLIDADO_BENEFICIARIOS_ALTAMIRA_${fechaStr}.xlsx`);
}
