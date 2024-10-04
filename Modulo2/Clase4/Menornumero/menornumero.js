function menorNumero(numeros){
    let numeroMenor = numeros[0];
    for(let i = 0; i<=numeros.length; i++){
        if(numeros[i] < numeroMenor){
            numeroMenor = numeros[i]
        }
    }
    return numeroMenor;
}

let array = [2, 6, 9283 , 394883092, 3, 1, 593]

console.log("el numero menor de todo el arreglo (" + array + ") es: " + menorNumero(array));
