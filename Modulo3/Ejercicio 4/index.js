class estudiante{
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}



class sala{
    constructor(letra, generacion, alumnos){
        this.leta = letra;
        this.generacion = generacion;
        this.alumnos = alumnos;
    }

    agregarAlumnos(infoAlumno){
        this.alumnos.push(infoAlumno)
        return "se ha agregado la info del alumno: " + infoAlumno.nombre
    }

    conocerEstudiantes(){
        const nombreAlumnos = this.alumnos.map((estudiante) => {
            return estudiante.nombre;
        })

        return nombreAlumnos
    }

    estudiantesAprobados(){
        const estudiantesAprobados = this.alumnos.filter((alumno) => {
            if(alumno.calificacion >= 40){
                return alumno.nombre;
            }
        })

        return estudiantesAprobados
    }

    promedioNotas(){
        let promedio = 0;
        let cuentaEstudiantes = this.alumnos.length;

        this.alumnos.forEach(alumno => {
            promedio += alumno.calificacion;
        });

        promedio = promedio/cuentaEstudiantes;
        return promedio
    }

    encontrarEstudiante(estudiante){
        let alumnoEncontrado = this.alumnos.find((alumno)=>(alumno.nombre === estudiante))

        return alumnoEncontrado;
    }

    infoClase(){
        return  `Esta clase es de la generacion ${this.generacion} y es la letra ${this.leta} `
    }
}

estudiante1 = new estudiante("juan", 70)
estudiante2 = new estudiante("pedro", 69)
estudiante3 = new estudiante("jose", 25)
estudiante4 = new estudiante("brayan", 30)
estudiante5 = new estudiante("yair", 70)
estudiante6 = new estudiante("tomas", 40)
estudiante7 = new estudiante("nicolas", 30)
estudiante8 = new estudiante("renato", 40)
estudiante9 = new estudiante("renata", 70)
estudiante10 = new estudiante("pedra", 60)

claseA = new sala("A", "octavos", [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9])

console.log("-----agrega estudiante----")
console.log(claseA.agregarAlumnos(estudiante10))
console.log("----lista estudiantes----")
console.log(claseA.conocerEstudiantes())
console.log("----Quienes Aprobaron (nota mayor o igual a 40)----")
console.log(claseA.estudiantesAprobados())
console.log("----Promedia Notas----")
console.log(claseA.promedioNotas())
console.log("----Busca Estudiantes como pedra----")
console.log(claseA.encontrarEstudiante("pedra"))
console.log("----Info Clase----")
console.log(claseA.infoClase())