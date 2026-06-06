import { renderFormulario } from './formulario.js';

export function renderRegistroPage() {
    return `
        <div class="registro-page animate-appear">
            ${renderFormulario()}
        </div>
    `;
}
