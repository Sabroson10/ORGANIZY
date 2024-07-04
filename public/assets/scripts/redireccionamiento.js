document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Previene el comportamiento por defecto del enlace
            const targetId = this.getAttribute("href").substring(1); // Obtiene el id de destino
            const targetSection = document.getElementById(targetId); // Obtiene la sección de destino

            targetSection.scrollIntoView({
                behavior: "smooth" // Desplazamiento suave
            });
        });
    });
})