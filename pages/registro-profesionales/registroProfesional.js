import { renderPaso1 } from './paso1.js';
import { renderPaso2 } from './paso2.js';
import { renderPaso3 } from './paso3.js';
import { renderPaso4 } from './paso4.js';

export function renderRegistroProfesionalPage() {
    return `
        <div class="registro-profesional-page container py-5 animate-appear">
            <h2 class="titulo-principal mb-4 text-center" style="color: var(--azul-rey-profundo);">
                Registro de Profesional
            </h2>
            <div id="pasos-registro">
                ${renderPaso1()}
                ${renderPaso2()}
                ${renderPaso3()}
                ${renderPaso4()}
            </div>
        </div>
    `;
}
