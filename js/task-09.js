function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");

changeColorRef.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = getRandomHexColor();
}
