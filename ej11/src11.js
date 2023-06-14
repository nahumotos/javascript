// const encontrarPalabraMasLarga = (cadena) => {
// 	let palabras = cadena.split(" ");
// 	console.log(palabras);
// 	let palabraMasLarga = "";

// 	for (let i = 0; i < palabras.length; i++) {
// 		if (palabras[i].length > palabraMasLarga.length) {
// 			palabraMasLarga = palabras[i];
// 		}
// 	}

// 	return palabraMasLarga;
// };

// let texto = prompt("escriba una frase", "textito");
// let palabraLarga = encontrarPalabraMasLarga(texto);

// console.log("Frase original: " + texto + "\nPalabra mas larga: " + palabraLarga);

var frase = prompt("Ingrese la frase");

var palabras = frase.split(" ");
console.log(palabras);

for (let i = 0; i < palabras.length; i++) {
 if(palabras[i].length>palabras[0].length){
  var palabra_larga = palabras[i];
 }
  console.log(palabra_larga)
}
