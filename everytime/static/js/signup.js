const username = document.getElementById('id_username');
const nickname = document.getElementById('id_nickname');
const email = document.getElementById('id_email');
const password = document.getElementById('id_password');
const passwordConfirm = document.getElementById('id_passwordConfirm');
const signupButton = document.getElementById('id_signupButton');

document.querySelectorAll('.input-section input').forEach(item => {

    item.addEventListener('input', toggleButton);
});

function toggleButton() {
    if(username.value && nickname.value && email.value && password.value && passwordConfirm.value) {
        signupButton.style.backgroundColor = 'rgb(174, 41, 41)';
            } else {
                signupButton.style.backgroundColor = 'gray';
            }
        }