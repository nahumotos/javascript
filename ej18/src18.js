// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2]

// function mayor(valores) {

//     var palabra_larga = " "

//     for (let index = 0; index < valores.length - 1; index++) {
//         if (typeof valores[index] === "string") {
//             if (valores[index].length> palabra_larga.length){
//                 palabra_larga= valores[index]
//             }
//         }
//     }

//     return palabra_larga
// }
// console.log(mayor(valores))


// function trueFalse(valores) {
//     for (let index = 0; index < valores.length - 1; index++) {
//         if (typeof valores[index] === "boolean") {
//             if (valores[index]) {
//                 valores[index] = false
//             } else{
//                 valores[index] = true
//             }
//         }

//     }
//     console.log(valores)
// }
// console.log(trueFalse(valores))

 console.log(operaciones(valores))

function operaciones(valores) {
    let op=[]
    let j=0
    for (let i = 0; i < valores.length; i++) {
        if (typeof valores[i]==="number") {
             op[j]= valores[i]
            j++
           
        }
    }
    console.log("suma="+op[0]+" + "+op[1]+"= "+(op[0]+op[1]))
    console.log("resta="+op[0]+" - "+op[1]+"= "+(op[0]-op[1]))
    console.log("mult="+op[0]+" x "+op[1]+"= "+(op[0]*op[1]))
    console.log("div="+op[0]+" / "+op[1]+"= "+(op[0]/op[1]))
   
}