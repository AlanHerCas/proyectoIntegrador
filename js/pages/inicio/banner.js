export function renderBanner() {
    return `
        <section class="container hero-section">
            <div class="hero-content">
                <h1 class="hero-title">
                    Encuentra al profesional ideal para tu hogar <span>en segundos</span>
                </h1>
                <p class="hero-subtitle">
                    Conectamos de forma rápida y segura a personas que buscan ayuda con profesionales de confianza para plomería, electricidad, carpintería y más.
                </p>
                <div class="hero-buttons">
                    <a href="#buscar" class="hero-btn-primary">Buscar servicios</a>
                    <a href="#registro" class="hero-btn-secondary">Ofrecer servicios</a>
                </div>
            </div>
            <div class="hero-image">
                <svg width="450" height="350" viewBox="0 0 450 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="450" height="350" rx="20" fill="url(#hero-gradient)" />
                    <circle cx="360" cy="90" r="60" fill="white" fill-opacity="0.15" />
                    <circle cx="90" cy="270" r="40" fill="white" fill-opacity="0.1" />
                    <path d="M50 180 C 120 120, 200 250, 300 150 C 370 70, 400 280, 420 180" stroke="white" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8" opacity="0.4" />
                    
                    <g transform="translate(145, 95)">
                        <rect width="160" height="160" rx="16" fill="white" filter="url(#drop-shadow)" />
                        <circle cx="80" cy="65" r="30" fill="#bae6fd" />
                        <path d="M70 65 L77 72 L90 57" stroke="#1591DC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <rect x="30" y="115" width="100" height="8" rx="4" fill="#e5e7eb" />
                        <rect x="45" y="130" width="70" height="6" rx="3" fill="#9ca3af" opacity="0.6" />
                    </g>
                    
                    <defs>
                        <linearGradient id="hero-gradient" x1="0" y1="0" x2="450" y2="350" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2C5EAD" />
                            <stop offset="1" stop-color="#1591DC" />
                        </linearGradient>
                        <filter id="drop-shadow" x="0" y="0" width="180" height="180" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#1e3a8a" flood-opacity="0.15" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    `;
}
