console.log("hola estoy en al consola");

alert("hola soy un alert");

var edad =prompt("que edad tenes?",19);

alert("hola tu edad es: "+ edad);

var palabra= "hola";
alert("el tipo de dato de numero es: "+ typeof palabra);

var numero= 81;
alert("el tipo de dato de numero es: "+ typeof numero);

var logicos= true;
alert("el tipo de dato de numero es: "+ typeof logicos);
"si le pongo null aparece como object";
"si no le pongo nada aparece undefinided";

OBJETOS;

var persona={
    apellido: "motos",
    nombre:"nahuel",
    dni: 1545644,
    nacimiento: new Date("05-05-2023"),
    mascotas:[
        {
        apodo:"juancito",
        numid: 1,
        nacimiento: new Date("05-05-2023")
        },{
            apodo:"mili",
            numid: 2,
            nacimiento: new Date("06-05-2023") 
        }


    ]

}
var mascota ={
    apodo:"juancito",
    numid: 45646554,
    nacimiento: new Date("05-05-2023")
}

class Mascota{
    apodo;
    numid;

}
var m = new Mascota();

m,apodo="alva";
m.numid= 3;
console.log(persona.mascotaa[0].apodo)

