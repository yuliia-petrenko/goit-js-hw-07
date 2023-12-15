const inputName = document.querySelector('input#name-input');
const spaName = document.querySelector('span#name-output');

inputName.addEventListener('input', function (event) {
  let outputText = event.currentTarget.value.trim();
  console.log(outputText);
  if (outputText === '') {
    outputText = 'Anonymous';
  }
  spaName.textContent = outputText;
});
