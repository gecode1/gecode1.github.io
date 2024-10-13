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