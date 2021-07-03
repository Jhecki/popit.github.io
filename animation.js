const colors = ["r", "o", "y", "g", "b", "p"];
const popit = document.getElementById("popit");

for (let color of colors) {
  const row = document.createElement("div");
  row.className = color;
  for (let i = 0; i < 5; i++) {
    const pop = document.createElement("div");
    pop.className = "circle " + color;
    row.appendChild(pop);
  }
  popit.appendChild(row);
}

const sound = new Audio(
  "https://freesound.org/data/previews/399/399934_1676145-lq.mp3"
);

popit.onclick = function (event) {
  const target = event.target;
  if (!target.matches(".circle")) {
    return;
  }

  sound.pause();
  sound.currentTime = 0;
  sound.play();
  if ("vibrate" in navigator) {
    navigator.vibrate(100);
  }
  target.classList.toggle("pressed");
};
