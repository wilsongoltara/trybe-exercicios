const btnSend = document.querySelector('#send');
const btnClear = document.querySelector('#clear');

function submitForm(event) {
  event.preventDefault();
  alert('você foi sorteado', document.querySelector('#username').value);
}

function clearForm() {
  alert('clear');
}

btnSend.addEventListener('click', submitForm);
btnClear.addEventListener('click', clearForm);
