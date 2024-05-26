// Obtiene el elemento con id 'text' y lo asigna a la variable textEl
const textEl = document.getElementById('text');

// Obtiene el elemento con id 'speed' y lo asigna a la variable speedEl
const speedEl = document.getElementById('speed');

// Define la cadena de texto que se va a mostrar en el elemento textEl
const text = 'We Love Programming!';

// Inicializa el índice que se usará para determinar cuántos caracteres de la cadena se muestran
let idx = 1;

// Calcula la velocidad inicial en milisegundos a partir del valor del input speedEl
let speed = 300 / speedEl.value;

// Llama a la función writeText para iniciar el proceso de escritura del texto
writeText();

// Función que escribe el texto en el elemento textEl
function writeText() {
  // Asigna al elemento textEl el texto desde el inicio hasta el índice actual
  textEl.innerText = text.slice(0, idx);
  
  // Incrementa el índice para mostrar un carácter más en la siguiente llamada
  idx++;
  
  // Si el índice es mayor que la longitud del texto, reinicia el índice a 1
  if (idx > text.length) {
    idx = 1;
  }

  // Llama a writeText nuevamente después de un tiempo definido por la variable speed
  setTimeout(writeText, speed);
}

// Agrega un evento 'input' al elemento speedEl para actualizar la velocidad
speedEl.addEventListener('input', e => {
  // Actualiza la variable speed con el nuevo valor del input
  speed = 300 / e.target.value;
});
