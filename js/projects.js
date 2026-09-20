const PROJECTS = [
  {
    slug: 'saas-ventas-inventario', title: 'Ventas e Inventario', category: 'saas', country: 'PE',
    desc: 'SaaS multi-tenant de ventas e inventario con facturación electrónica SUNAT integrada.',
    img: 'saas-ventas-inventario.png'
  },
  {
    slug: 'saas-veterinaria', title: 'VetSystem', category: 'saas', country: 'PE',
    desc: 'Gestión de citas, historias clínicas y grooming para veterinarias, con facturación SUNAT.',
    img: 'saas-veterinaria.png'
  },
  {
    slug: 'saas-gimnasio', title: 'GymSaaS Pro', category: 'saas', country: 'PE',
    desc: 'Administración de membresías, asistencia y pagos para gimnasios.',
    img: 'saas-gimnasio.png'
  },
  {
    slug: 'saas-botica', title: 'Mi Botica', category: 'saas', country: 'PE',
    desc: 'Punto de venta y control de inventario farmacéutico con facturación electrónica.',
    img: 'saas-botica.png'
  },
  {
    slug: 'saas-minimarket', title: 'TPV Minimarket', category: 'saas', country: 'PE',
    desc: 'Sistema de punto de venta para minimarkets con control de caja e inventario.',
    img: 'saas-minimarket.png'
  },
  {
    slug: 'saas-prestamos-cobranzas', title: 'Préstamos y Cobranzas', category: 'saas', country: 'PE',
    desc: 'Gestión integral de préstamos, cronogramas de pago y cobranza.',
    img: 'saas-prestamos-cobranzas.png'
  },
  {
    slug: 'saas-academia', title: 'AcademiaPro', category: 'saas', country: 'PE',
    desc: 'Gestión académica: matrículas, cursos, pagos y reportes para academias.',
    img: 'saas-academia.png'
  },
  {
    slug: 'saas-colegio', title: 'Colegio SaaS', category: 'saas', country: 'PE',
    desc: 'Plataforma escolar: matrículas, pensiones, notas y facturación electrónica.',
    img: 'saas-colegio.png'
  },
  {
    slug: 'saas-ferreteria', title: 'FerreMax', category: 'saas', country: 'PE',
    desc: 'Control de inventario y ventas para ferreterías con microservicio de facturación.',
    img: 'saas-ferreteria.png'
  },
  {
    slug: 'saas-clinica', title: 'Clínica SaaS', category: 'saas', country: 'PE',
    desc: 'Gestión de citas médicas, historiales y facturación para clínicas.',
    img: 'saas-clinica.png'
  },
  {
    slug: 'saas-taller-automotriz', title: 'AutoTaller Pro', category: 'saas', country: 'PE',
    desc: 'Órdenes de trabajo, repuestos y facturación para talleres automotrices.',
    img: 'saas-taller-automotriz.png'
  },
  {
    slug: 'saas-citas-medicas', title: 'Citas Médicas', category: 'saas', country: 'PE',
    desc: 'Agenda médica y facturación electrónica para consultorios.',
    img: 'saas-citas-medicas.png'
  },
  {
    slug: 'saas-odontologia', title: 'OdontoCRM', category: 'saas', country: 'PE',
    desc: 'CRM odontológico con historial clínico y facturación electrónica.',
    img: 'saas-odontologia.png'
  },
  {
    slug: 'saas-hospedaje', title: 'Hospedaje Pro', category: 'saas', country: 'PE',
    desc: 'Reservas, check-in/out y facturación electrónica para hospedajes.',
    img: 'saas-hospedaje.png'
  },
  {
    slug: 'saas-restaurante', title: 'Mi Restaurante VIP', category: 'saas', country: 'PE',
    desc: 'Gestión de mesas, comandas y facturación electrónica para restaurantes.',
    img: 'saas-restaurante.png'
  },
  {
    slug: 'saas-tienda-moda', title: 'Tienda de Moda', category: 'saas', country: 'PE',
    desc: 'E-commerce y punto de venta para tiendas de ropa y moda.',
    img: 'saas-tienda-moda.png'
  },
  {
    slug: 'saas-taller-textil', title: 'Taller Textil', category: 'saas', country: 'PE',
    desc: 'Control de producción y pedidos para talleres textiles.',
    img: 'saas-taller-textil.png'
  },
  {
    slug: 'fac-pe-tpv-fastfood', title: 'TPV FastFood', category: 'facturacion', country: 'PE',
    desc: 'Punto de venta para comida rápida con facturación electrónica SUNAT.',
    img: 'fac-pe-tpv-fastfood.png'
  },
  {
    slug: 'fac-pe-hospedaje', title: 'Sistema de Hospedaje', category: 'facturacion', country: 'PE',
    desc: 'Sistema de hospedaje con facturación electrónica SUNAT — versión Perú.',
    img: 'fac-pe-hospedaje.png'
  },
  {
    slug: 'fac-co-restaurante', title: 'Sistema de Restaurante', category: 'facturacion', country: 'CO',
    desc: 'Sistema de restaurante con facturación electrónica DIAN — versión Colombia.',
    img: 'fac-co-restaurante.png'
  },
  {
    slug: 'fac-pe-tpv-panaderia', title: 'TPV Panadería', category: 'facturacion', country: 'PE',
    desc: 'Punto de venta para panaderías con control de mermas, stock y facturación electrónica SUNAT.',
    img: 'fac-pe-tpv-panaderia.png'
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
