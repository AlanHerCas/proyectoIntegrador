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

                    <form onsubmit="event.preventDefault(); sendMail();">
                        <div class="form-row-double">
                            <div class="form-field-group">
                                <label for="user_name">Nombre completo</label>
                                <input type="text" id="user_name" name="user_name" placeholder="Tu nombre" required>
                            </div>
                            <div class="form-field-group">
                                <label for="user_email">Correo electronico</label>
                                <input type="email" id="user_email" name="user_email" placeholder="ejemplo@email.com" required>
                            </div>
                        </div>

                        <div class="form-field-group">
                            <label for="subject">Asunto</label>
                            <input type="text" id="subject" name="subject" placeholder="¿En qué podemos ayudarte?" required>
                        </div>

                        <div class="form-field-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
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
