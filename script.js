 //APP "perdida de la concentracion"
 // Los pomodoros consisten en lapsos de tiempo de 25 min que se le
 //dan al usuario para que realice sus objetivos, dandole intervalos de 5 min
 //para luego ir pasando de forma gradual a intervalos de 10 min.
 // La idea es lograr captar su mayor atencion posible en sus objetivos
 // a travez de lapsos cortos con intervalos iterativos.

let cantidadObjetivos = parseInt(prompt("Ingrese cantidad de objetivos"))
const objetivos = []

function cargarObjetivos(cantObj){
for(let i=0; i< cantObj;i++){
    const objetivo = prompt("Ingrese su objetivo N - " + i);
    objetivos.push(objetivo)
}
}

cargarObjetivos(cantidadObjetivos)
let comenzarOBJ = prompt("Escribe el objetivo con el que quieres comenzar (ver tabla por consola) " + console.table(objetivos))

function elegirOBJ (objSeleccionado){

    for(i=0;i<objetivos.length;i++){
        if (objSeleccionado == objetivos[i]){
            console.warn("Te quedan 24:50min para el proximo breack")
        }else if(!objetivos.includes(objSeleccionado)){
            console.warn("No escribiste correctamente el objetivo")
        }
        }
}

elegirOBJ(comenzarOBJ)