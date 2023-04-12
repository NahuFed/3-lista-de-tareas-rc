let formulario = document.querySelector('form')
let lista = document.querySelector('ol')
let identificador = 0

class Tarea{
    constructor(nombre,id){
        this.nombre = nombre
        this.id = id
    }
}

let tareas = []

function crearTarea(nombre){
    tareas.push( new Tarea(nombre, identificador))    
}

let botonesEliminar = document.getElementsByClassName('btn-borrar')



function capturarDatos(e){
    e.preventDefault()
    agregarTarea(formulario.tarea.value)   
}

function agregarTarea(tarea){
    crearTarea(tarea)
    let elementoLista = document.createElement('li')
    elementoLista.innerHTML=`${tarea}<button class="ms-3 btn  btn-borrar" id="btn-${identificador}"><i class="bi bi-x-square-fill"></i></button>`
    lista.appendChild(elementoLista)
    identificador ++
}



function borrarTarea(identificador){
    let boton = document.querySelector(`#btn-${identificador}`)
    boton.parentElement.removeChild[identificador]
}

for (let i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].addEventListener('click', borrarTarea);
}








formulario.addEventListener('submit',capturarDatos)
