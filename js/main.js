const dataInfo = document.querySelectorAll(".data-info");
const icon = document.getElementById("state-icon");
const letter = document.getElementById("state-letter");
const open = ["green", "ABIERTO"];
const noOpen = ["red", "CERRADO"];

const start = new Date();

setInterval(() => {
  const hour = start.getHours();
  const day = start.getDay();
  const condition1 = [0, 1, 2, 3, 4].includes(day) && hour >= 2 && hour >= 10;
  const condition2 = [5, 6].includes(day) && hour >= 4 && hour >= 10;
  if (condition1) {
    icon.style.color = open[0];
    letter.textContent = open[1];
  } else if (condition2) {
    icon.style.color = open[0];
    letter.textContent = open[1];
  } else {
    icon.style.color = noOpen[0];
    letter.textContent = noOpen[1];
  }
}, 2000);

dataInfo.forEach((e) => {
  e.addEventListener("click", () => {
    Swal.fire({
      title: "<strong>Preguntas Frecuentes</strong>",
      html: `
     
      <button class="accordion">¿Cobran entrada para ingresar?</button>
      <div class="panel">
        <p>No, Se paga lo que se consume de juego y de comida y/o bebida</p>
      </div>
      
      <button class="accordion">¿Toman reservas?</button>
      <div class="panel">
        <p>No, Todos los juegos son por orden de llegada. Tampoco reservamos mesas.</p>
      </div>
      
      <button class="accordion">¿Abren los feriados?</button>
      <div class="panel">
        <p>Si, siempre</p>
      </div>
      
      <button class="accordion">¿Tienen restó?</button>
      <div class="panel">
        <p>¡Sí, tenemos de todo! Encontrá nuestro Menu</p>
      </div>
      
      <button class="accordion">¿Qué formas de pago aceptan?</button>
      <div class="panel">
        <p>Efectivo, Tarjetas de Débito, Credito y Mercado Pago</p>
      </div>
      
      `,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
    });

    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  });
});
