const username = document.getElementById('id_username');
const password = document.getElementById('id_password');
const submitButton = document.getElementById('submitButton');

username.addEventListener('input', toggleButton);
password.addEventListener('input', toggleButton);

function toggleButton() {
    if (username.value && password.value) {
        submitButton.style.backgroundColor = 'rgb(174, 41, 41)';
    } else {
        submitButton.style.backgroundColor = 'gray';
    }
}