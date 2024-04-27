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
