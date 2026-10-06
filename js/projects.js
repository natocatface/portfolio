const PROJECTS = [
  {
    slug: 'callops', title: 'CallOps', category: 'saas', country: 'PE',
    desc: 'Plataforma de gestión de campañas para Call Center: autenticación con roles, dashboard, campañas, contactos, agentes y reportes.',
    img: 'callops-2.png',
    gallery: ['callops-1.png', 'callops-2.png', 'callops-3.png', 'callops-4.png', 'callops-5.png', 'callops-6.png']
  },
  {
    slug: 'kaya-active', title: 'Kaya Active', category: 'web', country: 'PE',
    desc: 'Tienda online de ropa deportiva para mujer, con catálogo filtrable y pedidos directos por WhatsApp.',
    img: 'kaya-active-1.png',
    gallery: ['kaya-active-1.png', 'kaya-active-2.png', 'kaya-active-3.png', 'kaya-active-4.png']
  },
  {
    slug: 'habanda', title: 'Habanda', category: 'web', country: 'PE',
    desc: 'Estudio jurídico en Lima: asesoría en Derecho de Familia, Civil, Laboral y Administrativo.',
    img: 'habanda.png',
    gallery: ['habanda.png', 'habanda-2.png', 'habanda-3.png']
  },
  {
    slug: 'inmobisur', title: 'InmobiSur', category: 'web', country: 'PE',
    desc: 'Lotes en la Antigua Panamericana Sur con calculadora de financiamiento interactiva.',
    img: 'inmobisur.png',
    gallery: ['inmobisur.png', 'inmobisur-2.png', 'inmobisur-3.png']
  },
  {
    slug: 'iei-san-pedro-pescador', title: 'I.E.I. San Pedro Pescador', category: 'web', country: 'PE',
    desc: 'Sitio del colegio inicial con formulario de admisión 2026.',
    img: 'iei-san-pedro-pescador.png',
    gallery: ['iei-san-pedro-pescador.png', 'iei-san-pedro-pescador-2.png', 'iei-san-pedro-pescador-3.png']
  },
  {
    slug: 'minimarket-pos', title: 'MiniMarket POS', category: 'saas', country: 'PE',
    desc: 'Sistema POS con login, caja, inventario, usuarios y reportes con gráfico.',
    img: 'minimarket-pos.png',
    gallery: ['minimarket-pos.png', 'minimarket-pos-2.png']
  },
  {
    slug: 'lule-decoraciones', title: 'LeLu Decoraciones', category: 'web', country: 'PE',
    desc: 'Landing con cotizador interactivo conectado a WhatsApp.',
    img: 'lule-decoraciones.webp',
    gallery: ['lule-decoraciones.webp', 'lule-decoraciones-2.png', 'lule-decoraciones-3.png']
  },
  {
    slug: 'webmk', title: 'WebMK', category: 'web', country: 'PE',
    desc: 'E-commerce de regalos piramidales personalizados con configurador de 4 niveles y checkout por WhatsApp.',
    img: 'webmk.png'
  },
  {
    slug: 'inmobiliaria-nexus', title: 'Nexus Inmobiliaria', category: 'saas', country: 'PE',
    desc: 'CRM inmobiliario con gestión de propiedades, clientes y ventas. Stack Node/Express + React.',
    img: 'inmobiliaria-nexus.png',
    gallery: ['inmobiliaria-nexus.png', 'inmobiliaria-nexus-2.png']
  },
  {
    slug: 'ssoma-sistema', title: 'SSOMA', category: 'saas', country: 'PE',
    desc: 'Sistema de Seguridad y Salud Ocupacional para gestión de incidentes y cumplimiento normativo.',
    img: 'ssoma.png'
  },
  {
    slug: 'tienda-regalos', title: 'Regalo de Ensueño', category: 'saas', country: 'PE',
    desc: 'E-commerce y panel administrativo para tienda de regalos, con gestión de pedidos e inventario.',
    img: 'tienda-regalos.png',
    gallery: ['tienda-regalos.png', 'tienda-regalos-2.png']
  },
  {
    slug: 'alquiler-vehiculos', title: 'RentCar Web App', category: 'saas', country: 'PE',
    desc: 'Sistema de alquiler de vehículos con control de reservas, clientes y flota.',
    img: 'alquiler-vehiculos.png',
    gallery: ['alquiler-vehiculos.png', 'alquiler-vehiculos-2.png']
  },
  {
    slug: 'sistema-avicolas', title: 'Mi Granja Avícola', category: 'saas', country: 'PE',
    desc: 'Gestión de granjas avícolas: producción, inventario y control de lotes.',
    img: 'avicolas.png',
    gallery: ['avicolas.png', 'avicolas-2.png']
  },
  {
    slug: 'catering-erp', title: 'Gourmet Catering ERP', category: 'saas', country: 'PE',
    desc: 'ERP para servicios de catering: eventos, menús, insumos y facturación interna.',
    img: 'catering.png',
    gallery: ['catering.png', 'catering-2.png']
  },
  {
    slug: 'escuelas-deportivas', title: 'Gestión Académica Deportiva', category: 'saas', country: 'PE',
    desc: 'Administración de escuelas deportivas: alumnos, horarios, pagos y asistencia.',
    img: 'escuelas-deportivas.png',
    gallery: ['escuelas-deportivas.png', 'escuelas-deportivas-2.png']
  },
  {
    slug: 'hostal-gestion', title: 'Hostal Gestión', category: 'saas', country: 'PE',
    desc: 'Sistema de gestión hostalera: reservas, habitaciones y check-in/out.',
    img: 'hostales.png',
    gallery: ['hostales.png', 'hostales-2.png']
  },
  {
    slug: 'lavanderia-ropas', title: 'Lavandería Ropas', category: 'saas', country: 'PE',
    desc: 'Control de órdenes, clientes y estados de prendas para lavanderías.',
    img: 'lavanderia.png',
    gallery: ['lavanderia.png', 'lavanderia-2.png']
  },
  {
    slug: 'mudanzas-pro', title: 'MudanzasPro S.A.C.', category: 'saas', country: 'PE',
    desc: 'Gestión de servicios de mudanza: cotizaciones, rutas y seguimiento de clientes.',
    img: 'mudanzas.png',
    gallery: ['mudanzas.png', 'mudanzas-2.png']
  },
  {
    slug: 'muebleria-elegance', title: 'Muebles & Diseño Elegance', category: 'saas', country: 'PE',
    desc: 'ERP para mueblería: producción, inventario, ventas y clientes.',
    img: 'muebleria.png',
    gallery: ['muebleria.png', 'muebleria-2.png']
  }
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const flags = { PE: '🇵🇪 Perú', CO: '🇨🇴 Colombia', CL: '🇨🇱 Chile', EC: '🇪🇨 Ecuador', MX: '🇲🇽 México' };
  const categoryLabel = { saas: 'Sistema de Gestión', facturacion: 'Facturación Electrónica', web: 'Sitio Web' };

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="card" data-cat="${p.category}">
      <button type="button" class="card__media" data-modal-index="${i}" aria-label="Ampliar captura de ${p.title}">
        ${p.gallery && p.gallery.length > 1 ? `<span class="card__gallery-badge">▣ ${p.gallery.length} vistas</span>` : ''}
        <img src="assets/projects/${p.img}" alt="Captura del frontend de ${p.title}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="card__media-fallback" style="display:none;">
          <span class="glyph">${p.title.charAt(0)}</span>
          <span class="label">preview pendiente</span>
        </div>
        <div class="card__overlay">
          <span class="card__view">Ampliar vista →</span>
        </div>
      </button>
      <div class="card__body">
        <p class="card__country">${flags[p.country] || p.country} · ${categoryLabel[p.category]}</p>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc}</p>
      </div>
    </article>
  `).join('');
}

renderProjects();
