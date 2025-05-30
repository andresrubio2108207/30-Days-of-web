// script.js
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.options button');
  const resultado = document.getElementById('resultado');
  const opciones = ['piedra', 'papel', 'tijeras'];

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const eleccionUsuario = boton.getAttribute('data-choice');
      const eleccionBot = opciones[Math.floor(Math.random() * opciones.length)];
      let mensaje = '';

      if (eleccionUsuario === eleccionBot) {
        mensaje = `🤝 ¡Empate! Ambos eligieron ${eleccionUsuario}`;
      } else if (
        (eleccionUsuario === 'piedra' && eleccionBot === 'tijeras') ||
        (eleccionUsuario === 'papel' && eleccionBot === 'piedra') ||
        (eleccionUsuario === 'tijeras' && eleccionBot === 'papel')
      ) {
        mensaje = `🎉 ¡Ganaste! Tú elegiste ${eleccionUsuario} y el bot eligió ${eleccionBot}`;
      } else {
        mensaje = `😢 Perdiste. Tú elegiste ${eleccionUsuario} y el bot eligió ${eleccionBot}`;
      }

      resultado.textContent = mensaje;
    });
  });
});
