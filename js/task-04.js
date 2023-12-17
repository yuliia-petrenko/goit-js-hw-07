const runForm = document.querySelector('form.login-form');
runForm.addEventListener('submit', event => {
  event.preventDefault();
  const elemForm = event.target.elements;
  const formValue = {
    email: elemForm.email.value.trim(),
    password: elemForm.password.value.trim(),
  };

  if (formValue.email === '' || formValue.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(formValue);
    runForm.reset();
  }
});
