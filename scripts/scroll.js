    // Efecto de aparición gradual
    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll('.fade-in');
    
        function checkVisibility() {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        }
    
        // Llama a la función al cargar la página y cuando se hace scroll
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Para elementos visibles desde el principio
    });


    /* Ocultar la barra de navegación */ 

    let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("mainNav");

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Mostrar navbar al hacer scroll hacia arriba
        navbar.style.top = "0";
    } else {
        // Ocultar navbar al hacer scroll hacia abajo
        navbar.style.top = "-80px"; // Cambia este valor si tu navbar tiene un tamaño diferente
    }

    prevScrollPos = currentScrollPos;
};

/* Ocultar navbar en dispositivos moviles o tablet */
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Detectar clic en el botón de hamburguesa
    navbarToggler.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            // Si el menú está abierto, cerrarlo
            new bootstrap.Collapse(navbarCollapse).hide();
        } else {
            // Si el menú está cerrado, abrirlo
            new bootstrap.Collapse(navbarCollapse).show();
        }
    });

    // Detectar clic en los enlaces del menú para cerrarlo
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            new bootstrap.Collapse(navbarCollapse).hide();
        });
    });
});