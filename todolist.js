// variables html
container = document.querySelector('.container');
input_principal = document.querySelector('.input');
boton_agregar = document.querySelector('.boton-agregar')

// crear class
class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }
  crearDiv(nuevaTarea) {

    //creating ... -input
    const inputItem = document.createElement('input')
    inputItem.setAttribute('type', 'text')
    inputItem.disabled = true
    inputItem.classList.add('item-input')
    inputItem.value = nuevaTarea

    //div
    const div_item = document.createElement('div')
    div_item.classList.add('Item')

    // btn editar
    let botonEditar = document.createElement('button');
    botonEditar.innerHTML = '<i class="fa-solid fa-lock">';
    botonEditar.classList.add('boton-editar');

    //btn removeeer
    let botonRemover = document.createElement('button');
    botonRemover.classList.add('boton-remover');
    botonRemover.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    //agregar elementos a la lista
    div_item.appendChild(inputItem)
    div_item.appendChild(botonEditar)
    div_item.appendChild(botonRemover)
    container.appendChild(div_item);

    //eventos botones -edit
    botonEditar.addEventListener('click', function () {
      if (inputItem.disabled == true) {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
        inputItem.disabled = !true
      } else {
        inputItem.disabled = !false
        botonEditar.innerHTML = '<i class="fa-solid fa-lock">'
      }
    })
    // hasAttribute = ve si tiene el atrributo -- mejorar btn edit 

    //btn remove
    botonRemover.addEventListener('click', () => {
      container.removeChild(div_item)
      removeLs(nuevaTarea);
    });
  }
};

//check input
function chequearInput() {
  if (input_principal.value == '') {
    return
  } else {
    let res = input_principal.value.trim();
    saveLocalStorage(res);
    res = new Item(input_principal.value.trim());
    input_principal.value = '';  //.reset();
    return res
  }
};

//event enter para input
input_principal.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    chequearInput()
  }
});

//btn event
boton_agregar.addEventListener('click', () => chequearInput());

//Guardar en localstorage EXTRA
let arrayLS = []; // un array para gobernarlos a todos 

const saveLocalStorage = function (tarea) {
  arrayLS.push(tarea);
  localStorage.setItem('tarea', JSON.stringify(arrayLS));
};

//traer ArrayLocalStorage
const getArrayLs = function () {
  arrayLS = JSON.parse(localStorage.getItem('tarea')); //comienza en null
  if (arrayLS == null) {
    arrayLS = [];
  };
  for (let tarea of arrayLS) {
    new Item(tarea)
  };
};
//event getArrayLs inicia al cargar el DOM 
addEventListener('DOMContentLoaded', getArrayLs());

// removeTareaLocalStorage
const removeLs = function (tarea) {
  arrayLS = JSON.parse(localStorage.getItem('tarea')); //comienza en null
  if (arrayLS == null) {
    return
  };
  arrayLS = arrayLS.filter(x => x != tarea);
  localStorage.setItem('tarea', JSON.stringify(arrayLS));
};
