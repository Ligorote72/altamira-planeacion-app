// Base de Datos Oficial Municipio de Altamira (148 Beneficiarios con Fotos Vinculadas)
const INITIAL_BENEFICIARIOS = [
  {
    "id": 1,
    "cedula": "1077867588",
    "nombre": "JHOJAM ANDRES GALINDO FAJARDO",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "MINAS- MIRAGUA",
    "celular": "3229590459",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 2,
    "cedula": "55063660",
    "nombre": "LUZ DARY VANEGAS",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "MINAS- MIRAGUA",
    "celular": "3203075582",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 3,
    "cedula": "6336564",
    "nombre": "LUIS EDUARDO CASTILLO",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "SEMPERO",
    "celular": "3142654172",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 4,
    "cedula": "1077870980",
    "nombre": "MARIA MELISA NAVARRETE",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "HATO BLANCO",
    "celular": "3144918556",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 5,
    "cedula": "12203456",
    "nombre": "CARLOS ANDRES ORTIZ OLARTE",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "MINAS- MIRAGUA",
    "celular": "3213596318",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 6,
    "cedula": "83115430",
    "nombre": "CARLOS JULIO SARMIENTO",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3187113250",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 7,
    "cedula": "4888319",
    "nombre": "JORGE CUENCA",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3207138410",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 8,
    "cedula": "26452659",
    "nombre": "LUZ OFELIZ DIAZ CLAROS",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "SEMPERO",
    "celular": "3123643037",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 9,
    "cedula": "1081512708",
    "nombre": "MONICA CRIOLLO CRIOLLO",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "SAN CARLOS",
    "celular": "3143933900",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 10,
    "cedula": "12128687",
    "nombre": "ALBERTO SALINAS",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3204052707",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 11,
    "cedula": "26492894",
    "nombre": "ANA LUZ LOSADA",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "SEMPERO",
    "celular": "3144739336",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 12,
    "cedula": "26453274",
    "nombre": "MIRIAN LOSADA CUELLAR",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3102283131",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 13,
    "cedula": "12189538",
    "nombre": "EFREN ALARCON",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3138569212",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 14,
    "cedula": "1075539393",
    "nombre": "DANIEL RUIZ (HIJO GRINGO)",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3108144726",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 15,
    "cedula": "1620907",
    "nombre": "AICARDIO GARCIA BONILLA",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3232207624",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 16,
    "cedula": "55076498",
    "nombre": "ANA VIOLET ANDRADE",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3134658705",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 17,
    "cedula": "41157126",
    "nombre": "EMPERATRIS GUTIERREZ",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3228773757",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 18,
    "cedula": "26585501",
    "nombre": "MARIA CLAUDIA GONZALES",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3213065204",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 19,
    "cedula": "26489406",
    "nombre": "LIGIA SILVA TAPIAS",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3112595691",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 20,
    "cedula": "1003994006",
    "nombre": "DIANA CAROLINA CUELLAR",
    "programa": "POZO SEPTICO",
    "sisben": "N/A",
    "vereda": "LLANO LA VIRGEN",
    "celular": "3115466339",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 21,
    "cedula": "1045492534",
    "nombre": "SANDRA CANO",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN A 1",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/SANDRA_CANO/1.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/10.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/11.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/12.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/13.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/14.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/15.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/16.jpeg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/SANDRA_CANO/2.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/3.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/4.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/5.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/6.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/7.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/8.jpeg",
        "assets/fotos_beneficiarios/SANDRA_CANO/9.jpeg"
      ],
      "total": 16
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 22,
    "cedula": "26452560",
    "nombre": "MARGARITA MUNOZ",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN A 4",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 23,
    "cedula": "26452805",
    "nombre": "EDITH GONZALEZ",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 1",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/1.jpg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/1WhatsApp_Image_2025_12_30_at_17.39.49.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/2.jpg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/3.jpg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/4.jpg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/5.jpg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/6.jpg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/7.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/8.jpg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/W1hatsApp_Image_2025_12_30_at_17.39.49.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/W23hatsApp_Image_2025_12_17_at_09.35.30.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/WhatsApp_Image_2025_12_126_at_15.45.18.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/WhatsApp_Image_2025_12_17_at_09.2235.30.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/WhatsApp_Image_2025_12_30_at_17.39.489.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/WhatsApp_Image_2025_12_30_at_17.39.49.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/WhatsApp_Image_2025_12_301_at_17.39.49.jpeg",
        "assets/fotos_beneficiarios/EDDY_GONZALEZ/WhatsApp_Imqage_2025_12_17_at_09.35.30.jpeg"
      ],
      "total": 17
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 24,
    "cedula": "26452904",
    "nombre": "CARMEN EMILIA SANTANA",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 2",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/CARMEN_EMILIA/1.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/2.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/3.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/4.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/5.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/6.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/7.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.00_e2fefb50.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.01_74301b3c.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.01_dcb2767f.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.01_e2bfc74e.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.02_008b41ce.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.02_57f52cfd.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.02_8d832542.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.03_206c30db.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.03_b3558cb8.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.04_03dca607.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.04_b2750f44.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.05_9976d868.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.05_c93dca3f.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_18.18.06_bbabc3ee.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_19.20.27_17c37670.jpg",
        "assets/fotos_beneficiarios/CARMEN_EMILIA/Imagen_de_WhatsApp_2025_10_09_a_las_19.20.27_43309ae9.jpg"
      ],
      "total": 23
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 25,
    "cedula": "26416712",
    "nombre": "FANNY ORTIZ",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 2",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/FANNY_ORTIZ/1.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/2Image_2026_01_15_at_09.37.21.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsA222pp_Image_2026_01_15_at_09.22.33.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Imag2e_2026_03_16_at_10.17.00.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_01_15_at_09.22.31.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_01_15_at_09.221.31.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_01_15_at_09.29.5022.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_01_15_at_093.22.31.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_01_15_at_093.22.33.jpeg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_01_15_at2_09.22.32.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_01_2215_at_09.22.33.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_03_16_a1t_10.16.42.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_03_16_at_10.16.41.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_03_16_at_10.16.443.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_03_16_at_104.16.43.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_2026_03_16_at11_10.16.42.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp_Image_20276_01_15_at_09.22.33.jpeg",
        "assets/fotos_beneficiarios/FANNY_ORTIZ/WhatsApp44_Image_2026_01_15_at_09.22.33.jpeg"
      ],
      "total": 18
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 26,
    "cedula": "81925729",
    "nombre": "MARTHA TOVAR ZAMBRANO",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 3",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_07_a_las_16.36.24_8ce87a97.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_07_a_las_16.36.25_eff4ae9a.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_09.56.06_24e6ddc5.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_09.56.06_c751ab85.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_09.56.07_1a301579.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_09.56.07_3378129b.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_09.56.07_5579eaf0.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_09.56.07_79758a3f.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_16.53.02_e484f058.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_16.53.03_2f83a9bd.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_16.53.03_5ee8def0.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_16.53.03_cb3fc071.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_02_a_las_11.05.53_f767608c.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_02_a_las_11.05.54_27036379.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_02_a_las_11.05.54_496b7642.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_02_a_las_11.05.54_50982072.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_02_a_las_11.05.54_8049fed6.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_02_a_las_11.05.55_0ecebcb3.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_04_a_las_09.52.41_5a1b7908.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_04_a_las_09.52.42_03e6cabd.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_04_a_las_09.52.42_089bb4fe.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_04_a_las_09.52.42_e9ee9cd9.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_04_a_las_09.52.42_f2f598d3.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_09_a_las_09.40.16_424c649b.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_09_a_las_09.40.16_5f17147b.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_09_a_las_09.40.16_aad023c5.jpg",
        "assets/fotos_beneficiarios/MARTHA_TOVAR/Imagen_de_WhatsApp_2025_12_09_a_las_09.40.17_59843552.jpg"
      ],
      "total": 27
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 27,
    "cedula": "40093341",
    "nombre": "GLORIA ESPERANZA BORREGO",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 3",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/1.jpg",
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/2.jpg",
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/3.jpg",
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/4.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/5.jpg",
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/6.jpg",
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/7.jpg",
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/8.jpg",
        "assets/fotos_beneficiarios/GLORIA_ESPERANZA_BORREGO/9.jpg"
      ],
      "total": 9
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 28,
    "cedula": "26452571",
    "nombre": "MARIA NIDIA GASCA PARRA",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 3",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/NIDIA_GASCCA/Imagen_de_WhatsApp_2025_10_23_a_las_17.17.27_7dd14d37.jpg",
        "assets/fotos_beneficiarios/NIDIA_GASCCA/Imagen_de_WhatsApp_2025_10_23_a_las_17.17.27_8ad4720b.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/NIDIA_GASCCA/Imagen_de_WhatsApp_2025_10_23_a_las_17.17.28_14c19f0b.jpg",
        "assets/fotos_beneficiarios/NIDIA_GASCCA/Imagen_de_WhatsApp_2025_10_23_a_las_17.17.28_b751ab15.jpg",
        "assets/fotos_beneficiarios/NIDIA_GASCCA/Imagen_de_WhatsApp_2025_10_23_a_las_17.17.28_f8ebbae9.jpg"
      ],
      "total": 5
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 29,
    "cedula": "55064588",
    "nombre": "NORA SILVA",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 6",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_08_26_a_las_12.32.21_ab8eae04.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_08_26_a_las_12.32.22_06d529b0.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_08_26_a_las_12.32.22_fca82936.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_11_06_a_las_12.16.48_116b677b.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_11_06_a_las_12.16.48_524e9f20.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_11_06_a_las_12.16.49_548cd261.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_11_06_a_las_12.16.49_55738cdf.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_11_06_a_las_12.16.49_55adfd60.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_11_06_a_las_12.16.49_aa84c106.jpg",
        "assets/fotos_beneficiarios/NOHORA_SILVA/Imagen_de_WhatsApp_2025_11_06_a_las_12.16.49_f2b2ad70.jpg"
      ],
      "total": 10
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 30,
    "cedula": "26452981",
    "nombre": "NIDIA CAMPINO",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 6",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/1.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/2.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/3.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/4.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/5.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_04_a_las_11.39.42_739e7d55.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_04_a_las_11.39.44_0b528163.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_04_a_las_11.39.44_6da539e2.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_04_a_las_11.39.44_8a71cf51.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_04_a_las_11.53.04_8180f58a.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_04_a_las_11.53.05_019e2bcf.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_04_a_las_11.53.05_fb39b649.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_10_a_las_10.51.01_a4718bf1.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_10_a_las_10.51.02_84858c38.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_10_a_las_10.51.02_ab71da95.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_10_a_las_10.51.02_b05d2c5a.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_11_a_las_15.06.03_ad5c4f64.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_11_a_las_15.06.03_cddec360.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_11_a_las_15.06.56_a0b710e4.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_11_a_las_16.57.58_a5150043.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_11_a_las_16.58.00_0ab757c8.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_11_a_las_16.58.00_8cab7a48.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.47_af9ce548.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.48_16b5e549.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.50_5a2978a6.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.54_f25dafe5.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.55_b72d108e.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.57_a4be3cf3.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.58_4b03bbc0.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.59_c3dd34ad.jpg",
        "assets/fotos_beneficiarios/NIDIA_CAMPINO/Imagen_de_WhatsApp_2025_11_13_a_las_11.39.59_c60b8808.jpg"
      ],
      "total": 31
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 31,
    "cedula": "1619270",
    "nombre": "JAIRO CALDERON VARGAS",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 6",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/JAIRO_CALDERON/1.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/10.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/11.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/12.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/13.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/2.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/JAIRO_CALDERON/3.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/4.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/5.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/6.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/7.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/8.jpg",
        "assets/fotos_beneficiarios/JAIRO_CALDERON/9.jpg"
      ],
      "total": 13
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 32,
    "cedula": "26529285",
    "nombre": "YENNY GOMEZ",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 7",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/YENNY_GOMEZ/Imagen_de_WhatsApp_2025_10_14_a_las_16.08.41_4423e7d5.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/YENNY_GOMEZ/Imagen_de_WhatsApp_2025_10_14_a_las_16.08.41_4b60c5ac.jpg",
        "assets/fotos_beneficiarios/YENNY_GOMEZ/Imagen_de_WhatsApp_2025_10_14_a_las_16.08.41_9b8bd09d.jpg"
      ],
      "total": 3
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 33,
    "cedula": "28681004",
    "nombre": "LEONOR MORENO HERNANDEZ",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 7",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/LEONOR_MORENO/1.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.52_62b27ff4.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.52_b7ce5cc9.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.52_ea2e4b42.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.53_053fe227.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.53_3cc36f23.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.53_b2cb210d.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.53_d9fc42dd.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.54_6427933c.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.54_7a0c96c5.jpg",
        "assets/fotos_beneficiarios/LEONOR_MORENO/Imagen_de_WhatsApp_2025_10_23_a_las_17.27.54_e07c6292.jpg"
      ],
      "total": 11
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 34,
    "cedula": "26501949",
    "nombre": "MARTHA CECILIA VEGA",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 7",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/MARTHA_VEGA/1.jpg",
        "assets/fotos_beneficiarios/MARTHA_VEGA/2.jpg",
        "assets/fotos_beneficiarios/MARTHA_VEGA/3.jpg",
        "assets/fotos_beneficiarios/MARTHA_VEGA/4.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/MARTHA_VEGA/5.jpg",
        "assets/fotos_beneficiarios/MARTHA_VEGA/6.jpg",
        "assets/fotos_beneficiarios/MARTHA_VEGA/7.jpg",
        "assets/fotos_beneficiarios/MARTHA_VEGA/8.jpg",
        "assets/fotos_beneficiarios/MARTHA_VEGA/9.jpg"
      ],
      "total": 9
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 35,
    "cedula": "26452487",
    "nombre": "CECILIA TOVAR",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 7",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_10_23_a_las_17.13.20_192391ed.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_10_23_a_las_17.13.21_08a78513.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_10_23_a_las_17.13.22_40562d3f.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_10_23_a_las_17.13.22_419fde75.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_04_a_las_14.16.16_82e042f7.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_04_a_las_14.16.18_38146784.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_04_a_las_14.16.19_198196ca.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_04_a_las_14.16.19_5c9a2f87.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_17.07.33_5b94bff1.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_17.07.33_71cefa82.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_17.07.34_84f19439.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_18_a_las_17.07.34_e99b4d6a.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_25_a_las_10.34.08_1e55b136.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_28_a_las_09.33.28_8a539ec8.jpg",
        "assets/fotos_beneficiarios/CECILIA_TOVAR/Imagen_de_WhatsApp_2025_11_28_a_las_09.33.29_aad68b13.jpg"
      ],
      "total": 15
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 36,
    "cedula": "26452530",
    "nombre": "AMPARO VARGAS",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 7",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/AMPARO_VARGAZ/Imagen_de_WhatsApp_2025_09_26_a_las_09.37.40_f8159eda.jpg",
        "assets/fotos_beneficiarios/AMPARO_VARGAZ/Imagen_de_WhatsApp_2025_09_26_a_las_09.37.41_7f7d72af.jpg",
        "assets/fotos_beneficiarios/AMPARO_VARGAZ/Imagen_de_WhatsApp_2025_11_06_a_las_15.05.45_ba0afbc8.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/AMPARO_VARGAZ/Imagen_de_WhatsApp_2025_11_06_a_las_15.05.46_79103fcb.jpg",
        "assets/fotos_beneficiarios/AMPARO_VARGAZ/Imagen_de_WhatsApp_2025_11_06_a_las_15.05.46_d4ff2e6d.jpg",
        "assets/fotos_beneficiarios/AMPARO_VARGAZ/Imagen_de_WhatsApp_2025_11_06_a_las_15.05.46_ff5240b4.jpg",
        "assets/fotos_beneficiarios/AMPARO_VARGAZ/Imagen_de_WhatsApp_2025_11_06_a_las_15.05.47_1fc64146.jpg"
      ],
      "total": 7
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 37,
    "cedula": "26452583",
    "nombre": "YOLANDA OROZCO",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN C 1",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/YOLANDA_OROZCO/Imagen_de_WhatsApp_2025_11_06_a_las_15.33.14_4423d0f5.jpg",
        "assets/fotos_beneficiarios/YOLANDA_OROZCO/Imagen_de_WhatsApp_2025_11_06_a_las_15.33.14_dc800cee.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/YOLANDA_OROZCO/Imagen_de_WhatsApp_2025_11_06_a_las_15.41.30_706ecabc.jpg",
        "assets/fotos_beneficiarios/YOLANDA_OROZCO/Imagen_de_WhatsApp_2025_11_06_a_las_15.41.31_473657c6.jpg",
        "assets/fotos_beneficiarios/YOLANDA_OROZCO/Imagen_de_WhatsApp_2025_11_06_a_las_15.41.31_9741630f.jpg"
      ],
      "total": 5
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 38,
    "cedula": "26452714",
    "nombre": "YOLANDA YUSTY",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN C 1",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_11_13_a_las_08.33.52_41df3259.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_11_13_a_las_08.33.52_e535e450.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_11_13_a_las_08.33.53_7db185fd.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_11_13_a_las_08.33.54_1287a7ad.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_04_a_las_09.44.37_98b8931b.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_04_a_las_09.44.38_5bcbe19f.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_04_a_las_09.44.38_b2a1841d.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_04_a_las_09.44.38_bd9e3388.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_04_a_las_09.44.38_f8631bfa.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_04_a_las_09.44.39_9c2c4e91.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_09_a_las_09.43.48_a6907d30.jpg",
        "assets/fotos_beneficiarios/YOLANDA_YUSTY/Imagen_de_WhatsApp_2025_12_09_a_las_09.43.49_ac69f42f.jpg"
      ],
      "total": 12
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 39,
    "cedula": "26452503",
    "nombre": "ADELAIDA CORREA",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 5",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/ADELINA_CORREA/DJI_20251218104721_0001_D.JPG",
        "assets/fotos_beneficiarios/ADELINA_CORREA/DJI_20251218104750_0002_D.JPG",
        "assets/fotos_beneficiarios/ADELINA_CORREA/DJI_20251218104802_0003_D.JPG",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_10_06_a_las_17.04.10_9f38ba73.jpg",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_10_09_a_las_18.15.45_bddbaf95.jpg",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_10_09_a_las_18.15.55_010dfb30.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_10_09_a_las_18.15.55_772cf3b0.jpg",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_11_10_a_las_08.36.28_a7b90641.jpg",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_11_10_a_las_08.36.28_dd58704f.jpg",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_11_10_a_las_08.36.29_e8d2ad9f.jpg",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_11_10_a_las_08.36.35_50962cc1.jpg",
        "assets/fotos_beneficiarios/ADELINA_CORREA/Imagen_de_WhatsApp_2025_11_10_a_las_08.36.36_de8f2985.jpg"
      ],
      "total": 12
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 40,
    "cedula": "26452525",
    "nombre": "ADELA SIERRA",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN C 2",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.45_1c0a176b.jpg",
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.45_34158d5d.jpg",
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.45_e6c384ae.jpg",
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.46_45f76cfa.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.46_5a9b0686.jpg",
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.46_8507bb74.jpg",
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.46_cc7a0197.jpg",
        "assets/fotos_beneficiarios/ADELA_SIERRA/Imagen_de_WhatsApp_2025_11_06_a_las_16.01.47_fbf43a6d.jpg"
      ],
      "total": 8
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 41,
    "cedula": "55117420",
    "nombre": "YAMILE CASTRO LEON",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN A 5",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 42,
    "cedula": "26452569",
    "nombre": "CECILIA FAJARDO",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN A 5",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/1.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/2.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_10_23_a_las_17.02.30_10ac7b77.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_10_23_a_las_17.02.31_9d787c5b.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_10_23_a_las_17.02.31_ecad332d.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_12_a_las_08.25.58_c4003442.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_12_a_las_08.25.59_584262ef.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_12_a_las_08.25.59_f5270b75.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_12_a_las_08.26.00_263da795.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_12_a_las_08.26.00_d4d19eb0.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.15.59_8b5495b4.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.16.06_758ddff2.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.16.23_e5608ea3.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.16.24_259688c0.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.16.24_335dfb49.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.16.30_6d5eb82f.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.16.31_557a7787.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_13_a_las_14.16.31_dbabe19b.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_25_a_las_08.33.32_128b6ddb.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_25_a_las_08.33.32_a5f54e4e.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_25_a_las_08.33.33_9d0954a8.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_25_a_las_08.33.33_a2608a20.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_25_a_las_08.33.33_f86ba132.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_11_25_a_las_08.33.34_c2c1be45.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_12_02_a_las_11.09.18_24a451b1.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_12_02_a_las_11.09.19_b5ba5e4b.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_12_02_a_las_16.07.00_17122c20.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_12_02_a_las_16.07.00_4a35f9b4.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_12_02_a_las_16.07.00_eaad761d.jpg",
        "assets/fotos_beneficiarios/CECILIA_FAJARDO/Imagen_de_WhatsApp_2025_12_02_a_las_16.07.01_f15bc8b7.jpg"
      ],
      "total": 30
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 43,
    "cedula": "55056790",
    "nombre": "LUDIVIA RAMIREZ",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 2",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/LUDIVIA/Imagen_de_WhatsApp_2025_10_24_a_las_07.36.28_1294fe5f.jpg",
        "assets/fotos_beneficiarios/LUDIVIA/Imagen_de_WhatsApp_2025_10_24_a_las_07.36.28_81b26455.jpg",
        "assets/fotos_beneficiarios/LUDIVIA/Imagen_de_WhatsApp_2025_10_24_a_las_07.36.28_fce71391.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/LUDIVIA/Imagen_de_WhatsApp_2025_10_24_a_las_07.36.29_232b5f63.jpg",
        "assets/fotos_beneficiarios/LUDIVIA/Imagen_de_WhatsApp_2025_10_24_a_las_07.36.29_313283eb.jpg",
        "assets/fotos_beneficiarios/LUDIVIA/Imagen_de_WhatsApp_2025_10_24_a_las_07.36.29_d05c47ee.jpg",
        "assets/fotos_beneficiarios/LUDIVIA/Imagen_de_WhatsApp_2025_10_24_a_las_07.36.29_d0b3477b.jpg"
      ],
      "total": 7
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 44,
    "cedula": "26453014",
    "nombre": "YINET BERMEO",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN A 3",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.02_06786c26.jpg",
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.02_17883af8.jpg",
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.03_3a92a19e.jpg",
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.03_3bb03e22.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.03_668edef4.jpg",
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.03_b5eb8197.jpg",
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.04_652d26d3.jpg",
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_10_23_a_las_17.22.04_e58cd476.jpg",
        "assets/fotos_beneficiarios/YINET_BERMEO/Imagen_de_WhatsApp_2025_11_10_a_las_10.39.27_212c0d9d.jpg"
      ],
      "total": 9
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 45,
    "cedula": "1619297",
    "nombre": "RAFAEL JIMENEZ SANCHEZ",
    "programa": "MEJORAMIENTO DE VIVIENDA",
    "sisben": "SISBEN B 4",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_09_26_a_las_09.41.32_574b6421.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_09_26_a_las_09.41.33_2058c420.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_09_26_a_las_09.41.33_cc4980ba.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_09_26_a_las_09.41.33_e431729e.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_09_26_a_las_09.41.34_ce3f51f9.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_09_26_a_las_09.41.34_ebbfb780.jpg"
      ],
      "despues": [
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_11_18_a_las_16.44.31_3da334e4.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_11_18_a_las_16.44.31_765af667.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_11_18_a_las_16.44.31_c1b3ab5a.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_12_01_a_las_09.57.47_dcdb65d6.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_12_01_a_las_09.57.48_035f08c7.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_12_01_a_las_09.57.48_21fb46e7.jpg",
        "assets/fotos_beneficiarios/RAFAEL_JIMENES/Imagen_de_WhatsApp_2025_12_01_a_las_09.57.48_94fcbc18.jpg"
      ],
      "total": 13
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 46,
    "cedula": "12191020",
    "nombre": "JAIME CUELLAR YUCUMAN",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: CONCEJAL ORLANDO",
    "vereda": "LLANO DE LA VIRGEN",
    "celular": "3138491584",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 47,
    "cedula": "4888319",
    "nombre": "JORGE ENRIQUE CUENCA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: CONCEJAL ORLANDO",
    "vereda": "LLANO DE LA VIRGEN",
    "celular": "3207138410",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 48,
    "cedula": "26492894",
    "nombre": "ANA LUZ LOSADA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: RICAUTE",
    "vereda": "SEMPERO",
    "celular": "3144739336",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 49,
    "cedula": "1078246505",
    "nombre": "YURY VIVIANA AVILEZ SANCHES",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: RICAUTE",
    "vereda": "LLANO DE LA VIRGEN",
    "celular": "3115930126",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 50,
    "cedula": "1619201",
    "nombre": "GERARDO ROA MEDINA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: LUIS JIMENEZ",
    "vereda": "LLANO DE LA VIRGEN",
    "celular": "3124413920",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 51,
    "cedula": "1077864088",
    "nombre": "TANNIA GALINDO FAJARDO",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: LUIS JIMENES",
    "vereda": "MINAS Y MIRAGUAS",
    "celular": "3012828725",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 52,
    "cedula": "4883284",
    "nombre": "ARMANDO TRUJILLO",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: ISAC",
    "vereda": "NUEVA ESCALERETA",
    "celular": "3228910104 - 3157459178",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 53,
    "cedula": "40093910",
    "nombre": "MARIA ILMA PETAO",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: LUIS CARLOS",
    "vereda": "PAJIJI",
    "celular": "3116501397",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 54,
    "cedula": "10039994006",
    "nombre": "DIANA CAROLINA CUELLAR",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: LUIS CARLOS",
    "vereda": "LLANO DE LA VIRGEN",
    "celular": "3115466339",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 55,
    "cedula": "12187365",
    "nombre": "PEDRO MARIA MORA RODRIGUEZ",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: EDITH",
    "vereda": "MINAS Y MIRAGUAS",
    "celular": "3124333761",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 56,
    "cedula": "1078246329",
    "nombre": "DIANA MARCELA FALLA GONZALEZ",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: EDITH",
    "vereda": "MINAS Y MIRAGUAS",
    "celular": "3103738323",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 57,
    "cedula": "26437900",
    "nombre": "TERESA VAQUIRO ROJAS",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: JUAN MANUEL",
    "vereda": "HATOBLANCO",
    "celular": "3125494178",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 58,
    "cedula": "55070274",
    "nombre": "KELLY JANORI BAUTISTA CALDERON",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: ISAAC",
    "vereda": "NUEVA ESCALERETA",
    "celular": "3232220891",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 59,
    "cedula": "12198797",
    "nombre": "PABLO EMILIO RAMIREZ SUAREZ",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "LIDER: JUAN MANUEL",
    "vereda": "MINAS Y MIRAGUAS",
    "celular": "3214095873",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 60,
    "cedula": "1080365684",
    "nombre": "TATIANA FIERRO",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "SAN CARLOS",
    "celular": "3115970705",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 61,
    "cedula": "1081516433",
    "nombre": "JASMIN RIVERA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "SAN CARLOS",
    "celular": "3105616605",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 62,
    "cedula": "80153649",
    "nombre": "MIGUEL ANGEL ZAMBRANO",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "GRIFO",
    "celular": "3125566588",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 63,
    "cedula": "20134289",
    "nombre": "LUCILA DIAZ DE CORREA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "HATOBLANCO",
    "celular": "3176392869",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 64,
    "cedula": "16938907",
    "nombre": "JESUS FAJARDO",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "PAJIJI",
    "celular": "3183152597",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 65,
    "cedula": "1078246659",
    "nombre": "MAIRENA JADIZA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "PAJIJI",
    "celular": "3209526473 - 3124254503",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 66,
    "cedula": "1078246520",
    "nombre": "ALFONSO ALEJANDRO CARDENAS CARRERA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "LLANO DE LA VIRGEN",
    "celular": "SIN REGISTRO",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 67,
    "cedula": "26443834",
    "nombre": "ROSA ELENA POLANIA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "LLANO DE LA VIRGEN",
    "celular": "3212490696",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 68,
    "cedula": "POR ASIGNAR",
    "nombre": "FERNANDO CASANOVA",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "HATO BLANCO",
    "celular": "SIN REGISTRO",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 69,
    "cedula": "12200372",
    "nombre": "JADINSON JOVEN",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "MINAS Y MIRAGUAS",
    "celular": "3213758000",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 70,
    "cedula": "26492742",
    "nombre": "MARIA AURORA AVILEZ",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "RANCHO ESPINAL",
    "celular": "3160438140",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 71,
    "cedula": "POR ASIGNAR",
    "nombre": "JULIO MELENDEZ",
    "programa": "ESTUFA ECOEFICIENTE / BATERIA",
    "sisben": "ASIGNADO",
    "vereda": "PAJIJI",
    "celular": "3228159701",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 72,
    "cedula": "4888498",
    "nombre": "SENDOYA SÁNCHEZ YAMITH",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 73,
    "cedula": "1110460402",
    "nombre": "GARCÍA ALBA LUZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Ibagué)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 74,
    "cedula": "4888451",
    "nombre": "CALDERÓN VARGAS WALTER",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 75,
    "cedula": "26575605",
    "nombre": "CHACÓN SÁNCHEZ LUZ MARINA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Suaza)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 76,
    "cedula": "55113606",
    "nombre": "LEIDY BENAVIDES PEÑUELA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Gigante)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 77,
    "cedula": "1078246795",
    "nombre": "LIZETH VIVIANA CUELLAR",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 78,
    "cedula": "26453132",
    "nombre": "DÍAZ TRUJILLO CLAUDIA PATRICIA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 79,
    "cedula": "1003993861",
    "nombre": "BRAYAN MENESES FIERRO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 80,
    "cedula": "26453093",
    "nombre": "IBARRA DIANA FABIOLA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 81,
    "cedula": "26453021",
    "nombre": "LÓPEZ AVILEZ SANDRA PATRICIA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 82,
    "cedula": "39553838",
    "nombre": "MARTÍNEZ ROJAS AURA BLANCA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Girardot)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 83,
    "cedula": "4911754",
    "nombre": "MUÑOS POVEDA PEDRO JOSÉ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Guadalupe)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 84,
    "cedula": "1619119",
    "nombre": "MUÑOS SÁNCHEZ LUIS CARLOS",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 85,
    "cedula": "26453050",
    "nombre": "MURCIA SAPUY AMPARO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 86,
    "cedula": "4896088",
    "nombre": "JUSTINO LEIVA LEIVA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Tesalia)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 87,
    "cedula": "1083916825",
    "nombre": "CRISTIAN CAMILO CORDOBA PERAFAN",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 88,
    "cedula": "26420862",
    "nombre": "NARVÁEZ FAJARDO JENNY MARCELA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Neiva)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 89,
    "cedula": "1003993892",
    "nombre": "JHONATAN ESCOBAR OLIVEROS",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 90,
    "cedula": "52431256",
    "nombre": "ORTIZ YANETH MERCEDES",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Bogotá)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 91,
    "cedula": "26453054",
    "nombre": "SOFIA DÍAZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 92,
    "cedula": "26422178",
    "nombre": "RODRÍGUEZ RINCÓN LEYLA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Neiva)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 93,
    "cedula": "55117488",
    "nombre": "RODRÍGUEZ RINCÓN GRACIELA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Guadalupe)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 94,
    "cedula": "4888002",
    "nombre": "SANDOVAL ENRIQUE",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 95,
    "cedula": "26453163",
    "nombre": "TOVAR CHILITO LIDIA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 96,
    "cedula": "1078247000",
    "nombre": "MONDRAGÓN MURCIA CARLOS ARTURO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 97,
    "cedula": "7720300",
    "nombre": "TRIVIÑO LIZ HERNÁN",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Neiva)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 98,
    "cedula": "26453089",
    "nombre": "TRUJILLO CAROLINA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 99,
    "cedula": "1003803961",
    "nombre": "LAURA VALENTINA RAMÍREZ YUSTY",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Armenia)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 100,
    "cedula": "1004301378",
    "nombre": "JOSE LUIS CHICUE MINU",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Guadalupe)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 101,
    "cedula": "26452641",
    "nombre": "LIZCANO OLGA CECILIA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Altamira)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 102,
    "cedula": "1130679909",
    "nombre": "MORALES GRIJALBA LUISA FERNANDA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA) (Cali)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 103,
    "cedula": "1083883561",
    "nombre": "ADRIANA MARCELA PARRA SAMBONI",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 104,
    "cedula": "26575696",
    "nombre": "ARGENIS RAMOS AVILEZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 105,
    "cedula": "36300871",
    "nombre": "MONICA TRUJILLO LIZCANO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 1 (LISTA AMARILLA)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 106,
    "cedula": "POR ASIGNAR",
    "nombre": "JESUS ANTONIO CHACON",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 107,
    "cedula": "36312840",
    "nombre": "DIANA MARCELA RINCON",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 108,
    "cedula": "1078246766",
    "nombre": "HUMBERTO GODOY GONZALEZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 109,
    "cedula": "1078246972",
    "nombre": "BRYSDY BEDOYA BARON",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 110,
    "cedula": "4888089",
    "nombre": "FERNANDO ALMARIO CABRERA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 111,
    "cedula": "36346851",
    "nombre": "EDNA VIVIANA CHAUX",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 112,
    "cedula": "1081512210",
    "nombre": "ALBA YURY CUELLAR OSORIO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 113,
    "cedula": "1078246424",
    "nombre": "PAOLA ANDREA MURCIA CABRERA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 114,
    "cedula": "4888676",
    "nombre": "HAMES CORREA YUSTY",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 115,
    "cedula": "1077874305",
    "nombre": "LILI ALEJANDRA IBAÑEZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 116,
    "cedula": "1003966644",
    "nombre": "FLOR STEFANY CABRERA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 117,
    "cedula": "1078246306",
    "nombre": "JORGE LUIS CHAUX OLARTE",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 118,
    "cedula": "1082130075",
    "nombre": "JUAN CARLOS ZULETA SAAVEDRA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 119,
    "cedula": "1193214924",
    "nombre": "JHONIER RODRIGUEZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 120,
    "cedula": "1078246875",
    "nombre": "RUDY DANIELA RODRIGUEZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 121,
    "cedula": "26453196",
    "nombre": "MARTHA C MURCIA RAMIREZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 122,
    "cedula": "26453300",
    "nombre": "YINA MARCELA IBARRA VARGAS",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 123,
    "cedula": "1003993908",
    "nombre": "JUAN ANDRES DIAZ VARGAS",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 124,
    "cedula": "1078246647",
    "nombre": "ASTRID CAROLINA LONDOÑO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 125,
    "cedula": "26453226",
    "nombre": "SANDRA LILIANA CALDERON",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 126,
    "cedula": "26453268",
    "nombre": "ANA RITA PARRA RAMOS",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 127,
    "cedula": "26453102",
    "nombre": "MARIA SAGRARIO BARON",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 128,
    "cedula": "36285896",
    "nombre": "BELLANID CORREA GASCA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 129,
    "cedula": "7708068",
    "nombre": "ADRIAN HOYOS URREA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 130,
    "cedula": "1003993890",
    "nombre": "MARIA CAMILA PROAÑOS TOLEDO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 131,
    "cedula": "4888438",
    "nombre": "AGUSTIN GASCA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 132,
    "cedula": "83055622",
    "nombre": "ANIBAL CORREA SALAZAR",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 133,
    "cedula": "1079180136",
    "nombre": "DIANA JIMENA PERDOMO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 134,
    "cedula": "1003993913",
    "nombre": "DANIEL STIVEN BATERO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 135,
    "cedula": "1078246238",
    "nombre": "RUBBY IBARRA CRUZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 136,
    "cedula": "18491680",
    "nombre": "HEBER PRIETO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 137,
    "cedula": "1010156542",
    "nombre": "ISABELA RODRIGUEZ PEREZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 138,
    "cedula": "26453231",
    "nombre": "LUZ DARY CORREA TOCORA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 139,
    "cedula": "1077848553",
    "nombre": "ARISTIDIS IDROBO CRIOLLO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 140,
    "cedula": "26453101",
    "nombre": "RUTH LIZCANO BELTRAN",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 141,
    "cedula": "1030591313",
    "nombre": "MAGALY POLO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 142,
    "cedula": "1082127022",
    "nombre": "JHON JAIRO MORALES CARDOZO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 143,
    "cedula": "26453320",
    "nombre": "LEIDY VIVIANA MESA VAQUIRO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 144,
    "cedula": "1078247308",
    "nombre": "LUIS ANGEL IBAÑEZ BARBOSA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 145,
    "cedula": "1032479285",
    "nombre": "JOHAN SEBASTIAN CAÑON CLAVIJO",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 146,
    "cedula": "26452994",
    "nombre": "CLARA INES JIMENEZ",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 147,
    "cedula": "55117110",
    "nombre": "MARLENY CARRERA ESCANDON",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  },
  {
    "id": 148,
    "cedula": "40729983",
    "nombre": "DIGNA OTILIA RAIRAN ROA",
    "programa": "VIVIENDA PROPIA",
    "sisben": "GRUPO 2 (LISTA AZUL)",
    "vereda": "MUNICIPIO ALTAMIRA",
    "celular": "POR ASIGNAR",
    "estado": "APROBADO (SI)",
    "vigencia": "2025",
    "fotos": {
      "antes": [],
      "despues": []
    },
    "fechaRegistro": "2025-01-15"
  }
];
