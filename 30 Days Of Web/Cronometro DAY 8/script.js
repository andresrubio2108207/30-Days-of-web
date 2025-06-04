let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null;
let enMarcha = false;

function actualizarPantalla() {
  const tiempo = document.querySelector('.time');
  const formato =
    (horas < 10 ? '0' + horas : horas) + ':' +
    (minutos < 10 ? '0' + minutos : minutos) + ':' +
    (segundos < 10 ? '0' + segundos : segundos);
  tiempo.textContent = formato;
}

function startTimer() {
  if (enMarcha) return;
  enMarcha = true;
  intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    actualizarPantalla();
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalo);
  enMarcha = false;
}

function resetTimer() {
  clearInterval(intervalo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  enMarcha = false;
  actualizarPantalla();
}
