import data from "./data.js"

let personajes = []
personajes = data.results

let datosActualizados = personajes.map(function(personaje){
    let datosImportantes = {nombre : personaje.name, especie: personaje.species, imagen: personaje.image}

    return datosImportantes;
})

console.log(datosActualizados);

