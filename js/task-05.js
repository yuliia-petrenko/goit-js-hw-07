function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnLisener = document.querySelector('button.change-color');
const colorBackground = document.querySelector('span.color');

btnLisener.addEventListener('click', event => {
  colorBackground.style.backgroundColor = getRandomHexColor();
});
