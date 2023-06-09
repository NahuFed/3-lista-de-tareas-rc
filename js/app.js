let formulario = document.querySelector("form");
let lista = document.querySelector("ol");
let identificador = 0;

class Tarea {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }
}

let tareas = [];

function crearTarea(nombre) {
  tareas.push(new Tarea(nombre, identificador));
}
function capturarDatos(e) {
  e.preventDefault();
  agregarTarea(formulario.tarea.value);
}
function agregarTarea(tarea) {
  crearTarea(tarea);
  let elementoLista = document.createElement("li");
  elementoLista.innerHTML = `${tarea}<button class="ms-3 btn  btn-borrar" id="${identificador}"><i class="bi bi-x-square-fill"></i></button>`;
  lista.appendChild(elementoLista);
  let botonesEliminar = document.querySelectorAll(".btn-borrar");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      borrarTarea(boton.id);
    });
  });
  identificador++;
}

function borrarTarea(identificador) {
  let boton = document.getElementById(`${identificador}`);
  if (boton !== null) {
    let li = boton.parentElement;
    li.parentElement.removeChild(li);
  }
}

formulario.addEventListener("submit", capturarDatos);
