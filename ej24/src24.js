// Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
// circulo y lo muestre en el HTML.

function calculo() {
    var valor= document.getElementById("diametro").value
    valor= valor/2
    document.getElementById("radio").textContent= valor
}


function boton() {
    var diametro = document.getElementById("diametro").value;
    var r = diametro / 2;
    document.getElementById("radio").textContent = r;
}
