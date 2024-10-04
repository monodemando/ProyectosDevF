function contarImpares(n1, n2){
    let impares = [];
    if(n1<n2){
        for(n1; n1<=n2; n1++){
            if(n1%2 > 0){
                impares.push(n1);
            }
        }
    }else{
        for(n2; n2<=n1; n2++){
            if(n2%2 > 0){
                impares.push(n2);
            }
        }
    }
    return impares;
}
let numero1 = 1;
let numero2 = 5;

console.log("hay: " + contarImpares(numero1, numero2).length + " numeros impares entre: " + numero1 + " y " + numero2 + " que son: " + contarImpares(numero1, numero2) );