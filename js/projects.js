const PROJECTS = [
  {
    slug: 'habanda', title: 'Habanda', category: 'web', country: 'PE',
    desc: 'Estudio jurídico en Lima: asesoría en Derecho de Familia, Civil, Laboral y Administrativo.',
    img: 'habanda.png'
  },
  {
    slug: 'inmobisur', title: 'InmobiSur', category: 'web', country: 'PE',
    desc: 'Lotes en la Antigua Panamericana Sur con calculadora de financiamiento interactiva.',
    img: 'inmobisur.png'
  },
  {
    slug: 'iei-san-pedro-pescador', title: 'I.E.I. San Pedro Pescador', category: 'web', country: 'PE',
    desc: 'Sitio del colegio inicial con formulario de admisión 2026.',
    img: 'iei-san-pedro-pescador.png'
  },
  {
    slug: 'minimarket-pos', title: 'MiniMarket POS', category: 'saas', country: 'PE',
    desc: 'Sistema POS con login, caja, inventario, usuarios y reportes con gráfico.',
    img: 'minimarket-pos.png'
  },
  {
    slug: 'lule-decoraciones', title: 'LeLu Decoraciones', category: 'web', country: 'PE',
    desc: 'Landing con cotizador interactivo conectado a WhatsApp.',
    img: 'lule-decoraciones.webp'
  },
  {
    slug: 'webmk', title: 'WebMK', category: 'web', country: 'PE',
    desc: 'E-commerce de regalos piramidales personalizados con configurador de 4 niveles y checkout por WhatsApp.',
    img: 'webmk.png'
  },
  {
    slug: 'inmobiliaria-nexus', title: 'Nexus Inmobiliaria', category: 'saas', country: 'PE',
    desc: 'CRM inmobiliario con gestión de propiedades, clientes y ventas. Stack Node/Express + React.',
    img: 'inmobiliaria-nexus.png'
  },
  {
    slug: 'ssoma-sistema', title: 'SSOMA', category: 'saas', country: 'PE',
    desc: 'Sistema de Seguridad y Salud Ocupacional para gestión de incidentes y cumplimiento normativo.',
    img: 'ssoma.png'
  },
  {
    slug: 'tienda-regalos', title: 'Regalo de Ensueño', category: 'saas', country: 'PE',
    desc: 'E-commerce y panel administrativo para tienda de regalos, con gestión de pedidos e inventario.',
    img: 'tienda-regalos.png'
  },
  {
    slug: 'alquiler-vehiculos', title: 'RentCar Web App', category: 'saas', country: 'PE',
    desc: 'Sistema de alquiler de vehículos con control de reservas, clientes y flota.',
    img: 'alquiler-vehiculos.png'
  },
  {
    slug: 'sistema-avicolas', title: 'Mi Granja Avícola', category: 'saas', country: 'PE',
    desc: 'Gestión de granjas avícolas: producción, inventario y control de lotes.',
    img: 'avicolas.png'
  },
  {
    slug: 'catering-erp', title: 'Gourmet Catering ERP', category: 'saas', country: 'PE',
    desc: 'ERP para servicios de catering: eventos, menús, insumos y facturación interna.',
    img: 'catering.png'
  },
  {
    slug: 'escuelas-deportivas', title: 'Gestión Académica Deportiva', category: 'saas', country: 'PE',
    desc: 'Administración de escuelas deportivas: alumnos, horarios, pagos y asistencia.',
    img: 'escuelas-deportivas.png'
  },
  {
    slug: 'hostal-gestion', title: 'Hostal Gestión', category: 'saas', country: 'PE',
    desc: 'Sistema de gestión hostalera: reservas, habitaciones y check-in/out.',
    img: 'hostales.png'
  },
  {
    slug: 'lavanderia-ropas', title: 'Lavandería Ropas', category: 'saas', country: 'PE',
    desc: 'Control de órdenes, clientes y estados de prendas para lavanderías.',
    img: 'lavanderia.png'
  },
  {
    slug: 'mudanzas-pro', title: 'MudanzasPro S.A.C.', category: 'saas', country: 'PE',
    desc: 'Gestión de servicios de mudanza: cotizaciones, rutas y seguimiento de clientes.',
    img: 'mudanzas.png'
  },
  {
    slug: 'muebleria-elegance', title: 'Muebles & Diseño Elegance', category: 'saas', country: 'PE',
    desc: 'ERP para mueblería: producción, inventario, ventas y clientes.',
    img: 'muebleria.png'
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
