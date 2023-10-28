document.addEventListener('DOMContentLoaded', function () {
    // Esta función se ejecutará después de que se haya cargado completamente el contenido de la página

    async function validarInicioSesion() {
        var correo = document.getElementById("correoInicio").value;
        var contraseña = document.getElementById("contraseñaInicio").value;

        if (!correo || !contraseña) {
            mostrarAlerta('Por favor, ingresa tu correo y contraseña.');
            return false;
        }

        if (!correo) {
            mostrarAlerta('Por favor, ingresa tu correo.');
            return false;
        }

        if (!contraseña) {
            mostrarAlerta('Por favor, ingresa tu contraseña.');
            return false;
        }

        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(correo)) {
            mostrarAlerta('El correo electrónico no tiene un formato válido.');
            return false;
        }

        // Si todas las validaciones pasan, puedes realizar alguna acción adicional aquí
        return true;
    }

    async function mostrarSegundaInterfaz() {
        // Obtener el elemento de la segunda interfaz
        const segundaInterfaz = document.querySelector('.segunda-interface');

        // Mostrar la segunda interfaz agregando las clases necesarias
        segundaInterfaz.classList.remove('oculta');
        segundaInterfaz.classList.add('mostrar-desde-abajo');

        // Opcional: Ocultar la interfaz de inicio de sesión si es necesario
        const interfazLogin = document.querySelector('.login-interface');
        interfazLogin.classList.add('oculta');
    }

    async function mostrarAlerta(mensaje) {
        // Mostrar la alerta y esperar a que se cierre antes de realizar más acciones
        await swal.fire({
            title: mensaje,
            icon: 'error',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,
            closeButtonAriaLabel: 'Cerrar'
        });

        // Después de cerrar la alerta, verificar si los datos son válidos y mostrar la segunda interfaz
        if (mensaje === '¡Bienvenido!' && await validarInicioSesion()) {
            mostrarSegundaInterfaz();
        }
    }

    // Asignar la función validarInicioSesion al evento click del botón
    const botonConfirmar = document.querySelector('.login-interface button');
    botonConfirmar.addEventListener('click', async function (event) {
        event.preventDefault(); // Evitar el envío del formulario (si existe)

        // Validar el inicio de sesión y mostrar la alerta
        await validarInicioSesion() && mostrarAlerta('¡Bienvenido!');
    });
});

function cerrarSegundaInterfaz() {
    const segundaInterfaz = document.querySelector('.segunda-interface');
    segundaInterfaz.classList.add('oculta');
  }
  document.querySelector('.cerrar-interfaz').addEventListener('click', cerrarSegundaInterfaz);