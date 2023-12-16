function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const totalSize = 30;
    const sizeStep = 10;
    let size = totalSize;
    for (let i = 0; i < amount; i++) {
      const divElement = document.createElement('div');
      const colorBody = getRandomHexColor();
      divElement.style.width = `${size}px`;
      divElement.style.height = `${size}px`;
      divElement.style.backgroundColor = colorBody;
      const parentElement = document.body;
      boxes.append(divElement);
      size += sizeStep;
    }
  }
}
function deletInput() {
  boxes.innerHTML = '';
  inpuName.value = '';
}

const inpuName = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

btnCreate.addEventListener('click', event => {
  const totalInput = inpuName.value;
  deletInput();
  createBoxes(totalInput);
});
btnDestroy.addEventListener('click', event => {
  deletInput();
});
