
// let reves = (palabra) => {
//     let aux=""
//     for (let index = palabra.length-1; index >=0; index--) {
//         aux+= palabra.substring(index, index+1)
        
//     } 


//     return aux
// };



// console.log(reves(prompt("ingrese una frase")))
var palabra = prompt("Ingrese una palabra");
const reverseWord = (palabra) => {
  return palabra.split("").reverse().join(""); }
// console.log(reverseWord(palabra));

