
function calcularArea(radio) {
    let area = Math.PI * radio**2
    return area;
}
function calcularPerimetro(radio) {
    let per = 2* Math.PI* radio
    return per;
}
var circulo={
    radio: prompt()
}

alert(`Area= ${calcularArea(circulo.radio)}
 Perimetro= ${calcularPerimetro(circulo.radio)}`
)