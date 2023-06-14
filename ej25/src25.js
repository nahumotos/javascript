//  Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
// siguiente formulario.

function getFormValores() {
    
    var nombre = document.getElementById("form1").nombre.value
    var apellido = document.getElementById('form1').apellido.value

    console.log(nombre)
    console.log(apellido)

}