const boxes = document.querySelectorAll('.caja > div > div');
const mensajeFinal = document.getElementById('mensajeFinal');
const mensajeTexto = document.getElementById('mensajeTexto');
const reiniciarBtn = document.getElementById('reiniciar');

let turno = 'X'; // jugador que empieza
let jugadas = ['', '', '', '', '', '', '', '', ''];
let jugando = true;

// Combos ganadores (indices de las cajas)
const combosGanadores = [
  [0,1,2], [3,4,5], [6,7,8], // filas
  [0,3,6], [1,4,7], [2,5,8], // columnas
  [0,4,8], [2,4,6]           // diagonales
];

// Función para mostrar mensaje y mostrar el contenedor
function mostrarMensaje(msg) {
  mensajeTexto.textContent = msg;
  mensajeFinal.style.display = 'flex';
}

// Mostrar mensaje inicial
mostrarMensaje('¡Comienza el juego!');

function manejarClick(e) {
  const index = Array.from(boxes).indexOf(e.target);
  if (!jugando || jugadas[index] !== '') return; // ignorar si ya jugado o juego parado

  jugadas[index] = turno;
  e.target.textContent = turno;

  if (revisarGanador()) {
    mostrarMensaje(`¡El jugador ${turno} gana!`);
    jugando = false;
    return;
  }

  if (jugadas.every(j => j !== '')) {
    mostrarMensaje('¡Empate!');
    jugando = false;
    return;
  }

  // Cambiar turno
  turno = turno === 'X' ? 'O' : 'X';
  mensajeTexto.textContent = `Turno del jugador ${turno}`;
}

function revisarGanador() {
  return combosGanadores.some(combo => {
    return combo.every(i => jugadas[i] === turno);
  });
}

function reiniciarJuego() {
  jugadas.fill('');
  boxes.forEach(box => box.textContent = '');
  jugando = true;
  turno = 'X';
  mensajeFinal.style.display = 'none';
}

boxes.forEach(box => box.addEventListener('click', manejarClick));
reiniciarBtn.addEventListener('click', reiniciarJuego);
