
    function validarRegistro() {
        var correo = document.getElementById("correo").value;
        var confirmarCorreo = document.getElementById("confirmarCorreo").value;
        var contraseña = document.getElementById("contraseña").value;
        var confirmarContraseña = document.getElementById("confirmarContraseña").value;
        var aceptarTerminos = document.getElementById("aceptarTerminos").checked;

        if (!correo || !confirmarCorreo || !contraseña || !confirmarContraseña) {
            swal.fire({
             title: 'Todos los campos deben estar llenos.',
             icon: 'warning',
             showConfirmButton: false,
             showCancelButton: false,
             showCloseButton: true,  // Corregido a showCloseButton
             closeButtonAriaLabel: 'Cerrar'})
            return false;
        }

        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(correo)) {
            swal.fire({
            title:'El correo electrónico no tiene un formato válido.',
            icon: 'error',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;
        }

        if (correo !== confirmarCorreo) {
            swal.fire({
            title: 'Los correos no coinciden',
            icon: 'error',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;
        }

        if (contraseña.length < 8) {
            swal.fire({
            title: 'La contraseña debe tener al menos 8 caracteres.',
            icon: 'warning',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;
        }

        if (contraseña !== confirmarContraseña) {
            swal.fire({
            title: 'Las contraseñas no coinciden.',
            icon: 'error',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;
        }

       

        if (!aceptarTerminos) {
            swal.fire({
            title: 'Debes aceptar los términos y condiciones',
            icon: 'info',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;
        }

        window.location.href = "inicio_sesion.html";
    }
