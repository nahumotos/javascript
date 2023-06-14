// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].

// var matriz = [[3], [6], [9], [12], [15]];
// var vector = [];
// for (let i = 0; i < 5; i++) {
//     vector.push(matriz[i][0] + 3);
// }
// console.log(vector);

var matriz = [[]];
num=3;
for (let i = 0; i < 5; i++) {
    matriz[0].push(num);
    num+=3;
}
var vector = [];
for (let i = 0; i < 5; i++) {
    vector.push(matriz[0][i] + 3);
}
console.log(vector);