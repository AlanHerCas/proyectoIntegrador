import { renderBanner } from './banner.js';
import { renderSoporte } from './soporte.js';

export function renderContactoPage() {
    return `
        <div class="contacto-page animate-appear">
            ${renderBanner()}
            ${renderSoporte()}
        </div>
    `;
}
