import { renderBanner } from './banner.js';
import { renderCategorias } from './categorias.js';
import { renderTutorial } from './tutorial.js';
import { renderMision } from './mision.js'

export function renderInicioPage() {
    return `
        <div class="inicio-page animate-appear">
            ${renderBanner()}
            ${renderCategorias()}
            ${renderTutorial()}
            ${renderMision()}
        </div>
    `;
}
