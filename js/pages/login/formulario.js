export function renderFormulario() {
    return `
        <section class="login-section py-5">
            <div class="container">
                <div class="row g-4 align-items-stretch justify-content-center">
                    <div class="col-12 col-lg-6">
                        <div class="login-registro-card">
                            <h2 class="login-registro-titulo">Iniciar sesión</h2>
                            <h4 class="mb-2">Bienvenido de nuevo<br>Ingresa para continuar</h4>
                            <div id="login-formAlertContainer"></div>
                            <form id="login-registroForm" novalidate>                                
                                <div class="mb-1">
                                    <label for="login-regEmail" class="login-form-label">Correo electrónico</label>
                                    <input type="email" class="form-control login-input-custom" id="login-regEmail" placeholder="correo@example.com">
                                    <div class="login-error-msg" id="login-regEmailError"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="login-regPassword" class="login-form-label d-flex align-items-center gap-1">
                                        Contraseña
                                        <span class="login-password-info-container">
                                            <i class="bi bi-info-circle" id="login-pwInfoIcon"></i>
                                            <span class="login-password-tooltip">
                                                <strong>Requisitos de contraseña:</strong>
                                                <ul>
                                                    <li>Mínimo 8 caracteres</li>
                                                    <li>Al menos una letra mayúscula</li>
                                                    <li>Al menos una letra minúscula</li>
                                                    <li>Al menos un número</li>
                                                    <li>Al menos un carácter especial (@$!%*?&.)</li>
                                                </ul>
                                            </span>
                                        </span>
                                    </label>
                                    <div class="login-password-wrapper position-relative">
                                        <input type="password" class="form-control login-input-custom" id="login-regPassword" placeholder="Contraseña">
                                        <i class="bi bi-eye-slash toggle-password-icon" id="login-togglePassword" style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--azul-rey-profundo); z-index: 5;"></i>
                                    </div>
                                    <div class="login-error-msg" id="login-regPasswordError"></div>
                                </div>
                                <button type="submit" class="login-btn-registrar w-100 mt-2">Iniciar sesión</button>
                                <div class="login-divider d-flex align-items-center my-4">
                                    <div class="login-line"></div>
                                    <span class="px-3">o continúa con</span>
                                    <div class="login-line"></div>
                                </div>
                                <div class="login-social-buttons d-flex gap-3">
                                    <button type="button" class="login-btn-social login-btn-google flex-fill" id="login-btnGoogleReg">
                                        <i class="bi bi-google"></i> Google
                                    </button>
                                    <button type="button" class="login-btn-social login-btn-facebook flex-fill" id="login-btnFacebookReg">
                                        <i class="bi bi-facebook"></i> Facebook
                                    </button>
                                </div>
                                <div class="row mt-5" >
                                    <div class="col-6 text-center">
                                        <p><strong>¿No tienes cuenta aún?</strong></p>
                                    </div> 
                                    <div class="col-6 text-center">
                                        <a href="#registro">Regístrate aquí</a>
                                    </div>                
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="login-beneficios-card">
                            <div class="login-title-icon mx-auto">
                                        <i class="bi bi-check text-center icon-title"></i>
                            </div>
                            <h1 class="login-beneficios-titulo">¡Ya casi estás listo!</h1>
                            <h2 class="login-beneficios-titulo">Al crear tu cuenta podrás:</h2>
                            <ul class="login-beneficios-list">
                                <li class="login-beneficio-item">
                                    <div class="login-beneficio-icon">
                                        <i class="bi bi-check"></i>
                                    </div>
                                    <div class="login-beneficio-text">
                                        <h3>Buscar y contactar profesionales</h3>
                                    </div>
                                </li>
                                <li class="login-beneficio-item">
                                    <div class="login-beneficio-icon">
                                        <i class="bi bi-check"></i>
                                    </div>
                                    <div class="login-beneficio-text">
                                        <h3>Publicar trabajos y recibir propuestas</h3>
                                    </div>
                                </li>
                                <li class="login-beneficio-item">
                                    <div class="login-beneficio-icon">
                                        <i class="bi bi-check"></i>
                                    </div>
                                    <div class="login-beneficio-text">
                                        <h3>Guardar favoritos y más</h3>
                                    </div>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initLogin() {
    const form = document.getElementById('login-registroForm');
    const emailInput = document.getElementById('login-regEmail');
    const passwordInput = document.getElementById('login-regPassword');
    const alertContainer = document.getElementById('login-formAlertContainer');
    const togglePassword = document.getElementById('login-togglePassword');

    // 1. Almacenar usuario de prueba en LocalStorage (Codificado)
    // Usamos btoa() para codificar strings en Base64
    const seedMockUser = () => {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        
        // Credenciales de prueba en texto plano: test@example.com / Password123!
        const mockUser = {
            email: btoa('test@example.com'),
            contrasena: btoa('Password123!'),
            nombre: 'Usuario de Prueba'
        };

        // Verificar si el usuario de prueba ya existe para no duplicarlo
        const exists = registeredUsers.some(user => user.email === mockUser.email);
        if (!exists) {
            registeredUsers.push(mockUser);
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        }
    };

    // Ejecutamos el sembrado de datos
    seedMockUser();

    // Extra: Funcionalidad del ojo para ver contraseña
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.classList.toggle('bi-eye');
            togglePassword.classList.toggle('bi-eye-slash');
        });
    }

    // 2. Manejo del envío del formulario (Submit)
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailVal = emailInput.value.trim();
        const passwordVal = passwordInput.value;

        // Validaciones básicas de campos vacíos
        if (!emailVal || !passwordVal) {
            alertContainer.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Por favor, llena todos los campos.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            return;
        }

        // 3. Codificar los datos ingresados por el usuario para la comparación
        const encodedEmail = btoa(emailVal);
        const encodedPassword = btoa(passwordVal);

        // 4. Implementar autenticación verificando en el LocalStorage
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const registeredUsersProfesional = JSON.parse(localStorage.getItem("registeredUsersProfesional")) || [];
        
        // Buscamos un usuario cuyas credenciales codificadas coincidan
        const userFound = registeredUsers.find(user => 
            user.email === encodedEmail && user.contrasena === encodedPassword
        );

        const userProFound = registeredUsersProfesional.find(user =>
            user.correo === encodedEmail && user.password ===encodedPassword
        );

        if (userFound) {
            // Éxito: Guardamos la sesión activa (puedes decodificar el nombre para mostrarlo)
            const activeUser = { nombre: userFound.nombre, email: emailVal };
            localStorage.setItem('currentUser', JSON.stringify(activeUser));

            alertContainer.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>¡Bienvenido de nuevo, ${userFound.nombre}!</strong> Has iniciado sesión correctamente.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            
            // Aquí puedes redireccionar al usuario después de 1.5 segundos
            // setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);
            
            form.reset();
        } else {

            if(userProFound){
                const activeUser = { nombre: userProFound.nombre, email: emailVal };
                localStorage.setItem('currentUser', JSON.stringify(activeUser));

                alertContainer.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>¡Bienvenido de nuevo, ${userProFound.nombre}!</strong> Has iniciado sesión correctamente.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
            }else{
                // Error de credenciales
            alertContainer.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Correo electrónico o contraseña incorrectos.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            }
            
        }
    });
}