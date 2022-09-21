const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');


btnEl.addEventListener('click', changeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  // spanEl.style.backgroundColor = getRandomHexColor(toString)
  spanEl.after(getRandomHexColor())
}