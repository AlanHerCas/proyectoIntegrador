import './navBar.js';
import { renderInicioPage } from './pages/inicio/inicio.js';
import { renderListaProductosPage } from './pages/lista-productos/listaProductos.js';
import { renderAcercaPage } from './pages/acerca-de-nosotros/acerca.js';
import { renderContactoPage } from './pages/contacto/contacto.js';
import { renderLoginPage } from './pages/login/login.js';
import { renderRegistroPage } from './pages/registro/registro.js';
import { renderRegistroProfesionalPage } from './pages/registro-profesionales/registroProfesional.js';
import { renderCrearPublicacionPage } from './pages/crear-publicacion/crearPublicacion.js';

const mainContent = document.getElementById('main-content');

// Mapeo de rutas (hashes) a sus funciones coordinadoras de renderizado
const routes = {
    '#inicio': renderInicioPage,
    '#buscar': renderListaProductosPage,
    '#acerca': renderAcercaPage,
    '#contacto': renderContactoPage,
    '#login': renderLoginPage,
    '#registro': renderRegistroPage,
    '#registro-profesional': renderRegistroProfesionalPage,
    '#crear-publicacion': renderCrearPublicacionPage
};

function router() {
    const hash = window.location.hash || '#inicio';
    
    // 1. Renderizar el contenido correspondiente de la ruta activa
    if (routes[hash]) {
        mainContent.innerHTML = routes[hash]();
    } else {
        // Ruta no encontrada, redirigir a inicio
        window.location.hash = '#inicio';
        return;
    }

    // 2. Resaltar enlace activo en la barra de navegación
    updateActiveNavLink(hash);

    // 3. Cerrar el menú desplegable en móviles tras navegar
    closeNavbarOnMobile();
}

function updateActiveNavLink(currentHash) {
    const navLinks = document.querySelectorAll('.nav-link-custom, .btn-custom');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentHash) {
            link.classList.add('active-nav-item');
        } else {
            link.classList.remove('active-nav-item');
        }
    });
}

function closeNavbarOnMobile() {
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Si bootstrap está disponible globalmente
        if (window.bootstrap && window.bootstrap.Collapse) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse) || new window.bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
}

// Escuchar cambios de ruta y carga inicial de la página
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
