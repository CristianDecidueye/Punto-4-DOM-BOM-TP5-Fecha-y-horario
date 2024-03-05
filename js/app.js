function actualizarReloj() {
  const ahora = new Date();

  const fecha = ahora.toLocaleDateString();
  const hora = ahora.toLocaleTimeString();
  const diaSemana = ahora.toLocaleDateString("es-ES", { weekday: "long" });
  const mes = ahora.toLocaleDateString("es-ES", { month: "long" });
  const year = ahora.getFullYear();

  const reloj = document.getElementById("clock");
  reloj.innerHTML = `
      <p>Fecha: ${fecha}</p>
      <p>Hora: ${hora}</p>
      <p>Día de la semana: ${diaSemana}</p>
      <p>Mes: ${mes}</p>
      <p>Año: ${year}</p>
    `;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // Mostrar la hora de inmediato al cargar la página
