const runForm = document.querySelector('form.login-form');
runForm.addEventListener('submit', event => {
  event.preventDefault();
  const elemForm = event.target.elements;
  const formValue = {
    email: elemForm.email.value.trim(),
    password: elemForm.password.value,
  };
  console.log(formValue);
  if (formValue.email === '' || formValue.password === '') {
    alert('All form fields must be filled in');
  }
  runForm.reset();
});


