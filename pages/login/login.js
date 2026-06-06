import { renderFormulario } from './formulario.js';

export function renderLoginPage() {
    return `
        <div class="login-page animate-appear">
            ${renderFormulario()}
        </div>
    `;
}
