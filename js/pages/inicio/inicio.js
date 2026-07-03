import { renderBanner } from './banner.js';
import { renderCategorias } from './categorias.js';
import { renderTutorial } from './tutorial.js';

export function renderInicioPage() {
    return `
        <div class="inicio-page animate-appear">
            ${renderBanner()}
            ${renderCategorias()}
            ${renderTutorial()}
        </div>
    `;
}
