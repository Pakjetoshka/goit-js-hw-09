const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

savedForm();

form.addEventListener('submit', event => {
  event.preventDefault();

  const formValues = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (formValues.email === '' || formValues.message === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(formValues);

  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
});

form.addEventListener('input', () => {
  const formValues = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formValues));
});

function savedForm() {
  const savedMessage = JSON.parse(localStorage.getItem(storageKey));

  if (savedMessage) {
    emailInput.value = savedMessage.email || '';
    messageInput.value = savedMessage.message || '';
  }
}