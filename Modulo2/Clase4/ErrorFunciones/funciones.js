function sumaNumeros(n1, n2, n3){

    if(typeof n1 === "number" && typeof n2 === "number" && typeof n3 === "number"){
        return n1 + n2 + n3;
    }else{
        return "No valido"
    }
}
console.log(sumaNumeros(4, 5))