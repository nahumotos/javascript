// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

var persona ={
    nombre : "nahuel",
    edad : 19,
    sexo : "H",
    peso : 65,
    altura : 1.75
}

var a=JSON.stringify(persona)
console.log(a)
