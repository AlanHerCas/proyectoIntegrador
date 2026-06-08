import { renderBotonRegreso } from './botonRegreso.js';
import { renderPublicacion } from './publicacion.js';
import { renderBotonPublicar } from './botonPublicar.js';

export function renderCrearPublicacionPage() {
    return `
        <div class="crear-publicacion-page container py-5 animate-appear">
            ${renderBotonRegreso()}
            <h2 class="titulo-principal mb-4" style="color: var(--azul-rey-profundo);">
                Crear Nueva Publicación
            </h2>
            ${renderPublicacion()}
            ${renderBotonPublicar()}
        </div>
    `;
}
