function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnLisener = document.querySelector('.change-color');
const colorBackground = document.querySelector('.color');

btnLisener.addEventListener('click', event => {
    const colorBody =  getRandomHexColor();
    document.body.style.backgroundColor = colorBody;
    colorBackground.textContent = colorBody;
});



