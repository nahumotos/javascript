function agregar() {
    var tr = document.getElementById("nuevaTarea")
    var trae = tr.value
    var lista = document.getElementById("listaTareas")
    if (trae !== "") {
        var et = document.createElement("li")
        et.textContent= trae
        var bt = document.createElement("button")
        bt.textContent= "completado"
        bt.addEventListener("click",function() { /*addeventlistener (accion ) */
            et.classList.toggle("completed")

        })

        var bte = document.createElement("button")
        bte.textContent= "eliminar"
        
        bte.addEventListener("click",function(){
            et.remove()
        })
        lista.appendChild(et)
        et.appendChild(bt)
        et.appendChild(bte)
        tr.value=""
    }

}