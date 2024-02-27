// Importar el objeto localStorage
const localStorage = window.localStorage;

// Recuperar una variable de localStorage
const nombre = localStorage.getItem('nombre');
console.log("El nombre guardado es:", nombre)

// Guardar una variable en localStorage
localStorage.setItem('nombre', 'Pedro');


// Recuperar una variable de localStorage
nombre = localStorage.getItem('nombre');
console.log("El nombre guardado es:", nombre)

console.log("Ahora el nuevo nombre guardado es:", nombre)


// Eliminar una variable de localStorage
//localStorage.removeItem('nombre');