
do {
    console.log("s = suma")
    console.log("r = resta")
    console.log("m = mult")
    console.log("d = div")
    console.log("f = salir")
    var op= prompt("elija una opcion ")
    switch (op) {
        
        case 's' || 'S':
            var num1 = prompt("ingrese un numero ")
            var num2 = prompt("ingrese un numero ")
            var suma = num1 +num2
            console.log(suma)
            break;
        case 'r' || 'R':
            var num1 = prompt("ingrese un numero ")
            var num2 = prompt("ingrese un numero ")
            var resta = num1-num2
            console.log(resta)
            break;
        case 'm' || 'M':
            var num1 = prompt("ingrese un numero ")
            var num2 = prompt("ingrese un numero ")
            var mult = num1*num2
            console.log(mult)
            break;
        case 'd' || 'D':
            var num1 = prompt("ingrese un numero ")
            var num2 = prompt("ingrese un numero ")
            var div = num1/num2
            console.log(div)
            break;

    }

} while (op != "f");