document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (email === '' || message === '') {
            toastr.error("Por favor, completa todos los campos.", "Error");
        } else if (!validateEmail(email)) {
            toastr.warning("Por favor, ingresa un email válido.", "Advertencia");
        } else {
            toastr.success("Gracias por contactarnos. Nos pondremos en contacto pronto.", "Enviado");

            // Aquí puedes agregar el envío de datos por AJAX a Formspree
            sendFormspreeData(email, message);
            
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    }

    // Configuración personalizada de Toastr
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    // Función para enviar los datos a Formspree utilizando AJAX
    function sendFormspreeData(email, message) {
        fetch("https://formspree.io/f/xpwzzzbj", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                toastr.success("Mensaje enviado exitosamente.");
            } else {
                toastr.error("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
            }
        })
        .catch(error => {
            toastr.error("Error al enviar el mensaje.");
        });
    }
});

//Reinicio de paginá al principio de ella

// Configura la restauración del desplazamiento para que siempre sea manual
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}