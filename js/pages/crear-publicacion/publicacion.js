export function renderPublicacion() {
  return `
        <!-- Crear Publicación - Sección: Publicación (En desarrollo) -->
        <div class="publication  row">

            <!-- ========================= -->
            <!-- Información del Servicio -->
            <!-- ========================= -->
            <div class="infoService col-md rounded">
                <div class="info card h-100">

                    <div class="card-header bg-white border-0">
                        <h5 class="mb-0">
                            <i class="bi bi-file-earmark-text"></i>
                            Información del Servicio
                        </h5>
                    </div>

                    <div class="card-body">

                        <div class="mb-3">
                            <label class="form-label">Título del servicio</label>
                            <input type="text" class="form-control"
                                placeholder="Ej. Instalación Eléctrica Residencial">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Profesión o segmento</label>
                            <select class="form-select">
                                <option selected>Electricista</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Categoría</label>
                            <select class="form-select">
                                <option selected>Electricista</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Precio estimado</label>

                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input type="number" class="form-control" placeholder="500">
                                <span class="input-group-text">MXN</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Zona de Servicio</label>
                            <input type="text" class="form-control"
                                placeholder="Ej. Ciudad de México, CDMX">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Descripción del servicio</label>
                            <textarea class="form-control" rows="6"
                                placeholder="Describe tu servicio, materiales que utilizas, tiempo aproximado y beneficios..."></textarea>
                        </div>

                    </div>

                </div>
            </div>

            <!-- ========================= -->
            <!-- Evidencias -->
            <!-- ========================= -->
            <div class="evidencias col-md rounded">

                <div class="evidencia card h-100">

                    <div class="card-header bg-white border-0">
                        <h5 class="mb-0">
                            <i class="bi bi-folder2-open"></i>
                            Evidencias de Trabajos
                        </h5>
                    </div>

                    <div class="card-body">

                        <!-- Upload -->
                        <div class="border rounded text-center p-5 mb-4">

                            <i class="bi bi-cloud-arrow-up display-3"></i>

                            <h5 class="mt-3">Subir imágenes</h5>

                            <p class="text-muted mb-2">
                                Arrastra imágenes aquí o selecciona archivos
                            </p>

                            <small class="text-secondary">
                                Formatos: JPG, PNG (Máx 10MB)
                            </small>

                        </div>

                        <!-- Galería -->
                        <div class="row g-3">

                            <!-- Imagen -->
                            <div class="col-4">
                                <div class="galery rounded position-relative">

                                    <button
                                        class="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 translate-middle p-1">
                                        <i class="bi bi-x"></i>
                                    </button>

                                    <div
                                        class="border rounded d-flex justify-content-center align-items-center"
                                        style="height:100px;">
                                        <i class="bi bi-image fs-1"></i>
                                    </div>

                                </div>
                            </div>

                            <!-- Repetir -->
                            <div class="col-4">
                                <div class="galery position-relative rounded">

                                    <button
                                        class="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 translate-middle p-1">
                                        <i class="bi bi-x"></i>
                                    </button>

                                    <div
                                        class="border rounded d-flex justify-content-center align-items-center"
                                        style="height:100px;">
                                        <i class="bi bi-image fs-1"></i>
                                    </div>

                                </div>
                            </div>

                            <div class="col-4">
                                <div class="galery position-relative rounded">

                                    <button
                                        class="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 translate-middle p-1">
                                        <i class="bi bi-x"></i>
                                    </button>

                                    <div
                                        class="border rounded d-flex justify-content-center align-items-center"
                                        style="height:100px;">
                                        <i class="bi bi-image fs-1"></i>
                                    </div>

                                </div>
                            </div>

                            <div class="col-4">
                                <div class="galery position-relative rounded">

                                    <button
                                        class="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 translate-middle p-1">
                                        <i class="bi bi-x"></i>
                                    </button>

                                    <div
                                        class="border rounded d-flex justify-content-center align-items-center"
                                        style="height:100px;">
                                        <i class="bi bi-image fs-1"></i>
                                    </div>

                                </div>
                            </div>

                            <div class="col-4">
                                <div class="galery position-relative rounded">

                                    <button
                                        class="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 translate-middle p-1">
                                        <i class="bi bi-x"></i>
                                    </button>

                                    <div
                                        class="border rounded d-flex justify-content-center align-items-center"
                                        style="height:100px;">
                                        <i class="bi bi-image fs-1"></i>
                                    </div>

                                </div>
                            </div>

                            <div class=" col-4">
                                <div class="galery position-relative rounded">

                                    <button
                                        class="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 translate-middle p-1">
                                        <i class="bi bi-x"></i>
                                    </button>

                                    <div
                                        class="border rounded d-flex justify-content-center align-items-center"
                                        style="height:100px;">
                                        <i class="bi bi-image fs-1"></i>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- ========================= -->
            <!-- Vista previa -->
            <!-- ========================= -->
            <div class="previa col-md rounded">

                <div class="vistaPrevia card h-100">

                    <div class="card-header bg-white border-0">
                        <h5 class="mb-0 text-center">
                            Vista Previa a Publicar
                        </h5>
                    </div>

                    <div class="card-body">

                        <div class="card">

                            <div class="card-body text-center">

                                <div class="border rounded p-5 mb-4">
                                    <i class="bi bi-image display-1"></i>
                                </div>

                                <h5>
                                    Instalación eléctrica residencial
                                </h5>

                                <h4 class="text-primary">
                                    Desde $500 MXN
                                </h4>

                                <p class="text-muted mt-3">
                                    Instalaciones eléctricas seguras y eficientes
                                    para hogares con materiales de alta calidad
                                    y con garantía incluida.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;
}
