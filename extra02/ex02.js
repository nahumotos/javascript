function agregarPersona() {
    var tr = document.getElementById("contenedor")
    var nombre = prompt("ingrese un nombre")
    var edad = prompt("ingrese su edad")
    var persona ={
        nombre: nombre,
        edad: edad
    }
    var listap =[]
    listap.push(persona)
    for (let index = 0; index < listap.length; index++) {
        var nuevap = listap[index]
        var tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta")

        var par = document.createElement("p")
        par.textContent= nuevap.nombre
        par.classList.add("nombre")

        var par2 = document.createElement("p")
        par2.textContent= nuevap.edad
        par2.classList.add("edad")

        tarjeta.appendChild(par)
        tarjeta.appendChild(par2)
        tr.appendChild(tarjeta)

    }
}