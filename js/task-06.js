function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  let size = totalSize;
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    const colorBody = getRandomHexColor();
    divElement.style.width = `${size}px`;
    divElement.style.height = `${size}px`;
    divElement.style.backgroundColor = colorBody;
    boxes.append(divElement);
    size += sizeStep;
  }

  input.value = '';
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const totalSize = 30;
const sizeStep = 10;

btnCreate.addEventListener('click', event => {
  const totalInput = Number(input.value);
  if (totalInput >= 1 && totalInput <= 100) {
    input.value = '';
    createBoxes(totalInput);
  }
});
btnDestroy.addEventListener('click', event => {
  boxes.innerHTML = '';
});
