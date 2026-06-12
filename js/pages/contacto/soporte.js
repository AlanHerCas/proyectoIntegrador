export function renderSoporte() {
    return `
        <main class="soporte-container">
            <div class="soporte-grid">

                <div class="soporte-sidebar">

                    <div class="info-card">
                        <div class="info-card-icon">
                            <i class="bi bi-envelope"></i> </div>
                        <div class="info-card-text">
                            <h4>Correo electronico</h4>
                            <p>hola@gmail.com</p>
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="info-card-icon">
                            <i class="bi bi-telephone"></i> </div>
                        <div class="info-card-text">
                            <h4>Teléfono</h4>
                            <p>55-5555-555</p>
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="info-card-icon">
                            <i class="bi bi-whatsapp"></i>
                        </div>
                        <div class="info-card-text">
                            <h4>WhatsApp</h4>
                            <p>+52 55-5555-5555</p>
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="info-card-icon">
                            <i class="bi bi-clock"></i> </div>
                        <div class="info-card-text">
                            <h4>Horario de atención</h4>
                            <p>Lunes a Viernes</p>
                            <span>9:00 am - 6:00pm</span>
                        </div>
                    </div>

                </div>

                <div class="soporte-form-container">
                    <h2>Envíanos un mensaje</h2>

                    <form id="support-form" novalidate>
                        <div class="form-row-double">
                            <div class="form-field-group">
                                <label for="user_name">Nombre completo</label>
                                <input type="text" id="user_name" name="user_name" placeholder="Tu nombre" required>
                                <div class="error-msg" id="user_name_error"></div>
                            </div>
                            <div class="form-field-group">
                                <label for="user_email">Correo electronico</label>
                                <input type="email" id="user_email" name="user_email" placeholder="ejemplo@email.com" required>
                                <div class="error-msg" id="user_email_error"></div>
                            </div>
                        </div>

                        <div class="form-field-group">
                            <label for="subject">Asunto</label>
                            <input type="text" id="subject" name="subject" placeholder="¿En qué podemos ayudarte?" required>
                            <div class="error-msg" id="subject_error"></div>
                        </div>

                        <div class="form-field-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
                            <div class="error-msg" id="message_error"></div>
                        </div>

                        <div class="form-submit-container">
                            <button type="submit" class="btn-submit-form" id="btn-submit-text">Enviar mensaje</button>
                        </div>
                    </form>
                </div>

            </div>

            <section class="banner-ayuda-inmediata">
                <div class="banner-ayuda-content">
                    <div class="banner-ayuda-icon">
                        <i class="bi bi-headset"></i> </div>
                    <div class="banner-ayuda-text">
                        <h4>¿Necesitas ayuda inmediata?</h4>
                        <p>Habla con nuestro equipo por WhatsApp y obtén atención rápida.</p>
                    </div>
                </div>
                <button class="btn-banner-whatsapp">Contactar por WhatsApp</button>
            </section>
        </main>
    `;
}

export function initSoporte() {
    const form = document.getElementById('support-form');
    const nameInput = document.getElementById('user_name');
    const emailInput = document.getElementById('user_email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('user_name_error');
    const emailError = document.getElementById('user_email_error');
    const subjectError = document.getElementById('subject_error');
    const messageError = document.getElementById('message_error');

    if (!form || !nameInput || !emailInput || !subjectInput || !messageInput) return;

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function validateName() {
        const val = nameInput.value.trim();
        if (nameRegex.test(val)) {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
            nameError.textContent = '';
            return true;
        } else {
            nameInput.classList.remove('is-valid');
            nameInput.classList.add('is-invalid');
            nameError.textContent = 'El nombre debe tener entre 3 y 50 letras y espacios.';
            return false;
        }
    }

    function validateEmail() {
        const val = emailInput.value.trim();
        if (emailRegex.test(val)) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            emailError.textContent = '';
            return true;
        } else {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
            emailError.textContent = 'Introduce un correo electrónico válido.';
            return false;
        }
    }

    function validateSubject() {
        const val = subjectInput.value.trim();
        if (val.length >= 3 && val.length <= 100) {
            subjectInput.classList.remove('is-invalid');
            subjectInput.classList.add('is-valid');
            subjectError.textContent = '';
            return true;
        } else {
            subjectInput.classList.remove('is-valid');
            subjectInput.classList.add('is-invalid');
            subjectError.textContent = 'El asunto debe tener entre 3 y 100 caracteres.';
            return false;
        }
    }

    function validateMessage() {
        const val = messageInput.value.trim();
        if (val.length >= 10 && val.length <= 1000) {
            messageInput.classList.remove('is-invalid');
            messageInput.classList.add('is-valid');
            messageError.textContent = '';
            return true;
        } else {
            messageInput.classList.remove('is-valid');
            messageInput.classList.add('is-invalid');
            messageError.textContent = 'El mensaje debe tener entre 10 y 1000 caracteres.';
            return false;
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    subjectInput.addEventListener('input', validateSubject);
    messageInput.addEventListener('input', validateMessage);

    form.addEventListener('reset', () => {
        nameInput.classList.remove('is-valid', 'is-invalid');
        emailInput.classList.remove('is-valid', 'is-invalid');
        subjectInput.classList.remove('is-valid', 'is-invalid');
        messageInput.classList.remove('is-valid', 'is-invalid');
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            if (typeof window.sendMail === 'function') {
                window.sendMail();
            }
        }
    });
}
