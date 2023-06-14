console.log("ingresar numeros hasta superar el limite")
var limite = Math.random() * 10
var num = 0
do {
    num +=parseInt(prompt())
    console.log(num)
    console.log("limite" + limite)
} while (num <= limite);

