// variables html
container = document.querySelector('.container');
input_principal = document.querySelector('.input');
boton_agregar = document.querySelector('.boton-agregar')
<<<<<<< HEAD
h1nombre = document.querySelector('#nombrehero')

// crear class
=======

// crear classItem
>>>>>>> 8266f667a2646fdafcf0d27529a9674dadcc6a27
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
<<<<<<< HEAD
    const div_item = document.createElement('div')
    div_item.classList.add('Item')
=======
    const divs_item = document.createElement('div')
    divs_item.classList.add('Item')

    // btn editar
    let botonEditar = document.createElement('button');
    botonEditar.innerHTML = '<i class="fa-solid fa-lock">';
    botonEditar.classList.add('boton-editar');

    //btn removeeer
    let botonRemover = document.createElement('button');
    botonRemover.classList.add('boton-remover');
    botonRemover.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    //agregar elementos a la lista
    divs_item.appendChild(inputItem)
    divs_item.appendChild(botonEditar)
    divs_item.appendChild(botonRemover)
    container.appendChild(divs_item);

    //eventos botones edit
    botonEditar.addEventListener('click', function () {
      if (inputItem.disabled == true) {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
        inputItem.disabled = !true
      } else {
        inputItem.disabled = !false
        botonEditar.innerHTML = '<i class="fa-solid fa-lock">'
      }
    })

    //remove
    botonRemover.addEventListener('click', function () {
      container.removeChild(divs_item)

    })

  }
};

//check input
function chequearInput() {
  if (input_principal.value == '') {
    return
  } else {
    const res = new Item(input_principal.value.trim());
    input_principal.value = '';
    // return res
  }
};

boton_agregar.addEventListener('click', function () {
  chequearInput()
});
>>>>>>> 8266f667a2646fdafcf0d27529a9674dadcc6a27

    // btn editar
    let botonEditar = document.createElement('button');
    botonEditar.innerHTML = '<i class="fa-solid fa-lock">';
    botonEditar.classList.add('boton-editar');

<<<<<<< HEAD
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
=======
// debugger
// console.log('creando ...');
const stein2 = new Item()
const stein3 = new Item()
>>>>>>> 8266f667a2646fdafcf0d27529a9674dadcc6a27
