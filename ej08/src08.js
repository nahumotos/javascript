var num = parseInt(prompt(`Ingrese numeros, al final se mostrara el numero mas alto ingresado, para detener el programa envie un 0`));
var max = num;
var min = num;
var sum = 0;
var cont = 0;

while (num!=0) {
    cont++
    if (num >= max) {
        max = num;
    }
    if (num <= min) {
        min = num;
    }
    sum+=num
    num = parseInt(prompt(`Ingrese otro numero`));
}

alert(`El mayor numero ingresado fue ${max} 
El numero menor ingresado fue ${min} 
El promedio es ${sum/cont}`);
