    function validarEleccionCuenta (){

    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var FechaNacimiento = document.getElementById("FechaNacimiento").value;
    var SeleccionarDocumento = document.getElementById("SeleccionarDocumento").value;
   
    if(!numeroDocumento && !SeleccionarDocumento && !FechaNacimiento){
        swal.fire({
        title: 'Rellene los datos',
        icon: 'warning',
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: true,  // Corregido a showCloseButton
        closeButtonAriaLabel: 'Cerrar'})
        return false;
    }


    if(!SeleccionarDocumento){
        swal.fire({
        title: 'Seleccione el tipo de documento',
        icon: 'info',
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: true,  // Corregido a showCloseButton
        closeButtonAriaLabel: 'Cerrar'})
        return false;
    }
   

    if(!numeroDocumento){
        swal.fire({
            title: 'Ingrese su numero de documento',
            icon: 'warning',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;

    }

    var numeroRegex = /^[0-9]+$/;
    if (!numeroRegex.test(numeroDocumento)) {
        swal.fire({
            title: 'El documento solo debe tener numeros',
            icon: 'error',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;
    }

    if(!FechaNacimiento){
        swal.fire({
            title: 'Ingrese su fecha de nacimiento',
            icon: 'warning',
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,  // Corregido a showCloseButton
            closeButtonAriaLabel: 'Cerrar'})
            return false;
       
    }

    window.location.href = "estadocuenta.html";
}