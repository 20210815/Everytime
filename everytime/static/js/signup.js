const formName = document.getElementById("id_username");
const formNickname = document.getElementById("id_nickname");
const formEmail = document.getElementById("id_email");
const formPassword = document.getElementById("id_password1");
const formRePassword = document.getElementById("id_password2");

const formSubmit = document.getElementById("formSubmit");

function validation() {
  const formNameValue = formName.value.trim();
  const formNicknameValue = formNickname.value.trim();
  const formEmailValue = formEmail.value.trim();
  const formPasswordValue = formPassword.value.trim();
  const formRePasswordValue = formRePassword.value.trim();

  if (
    formNameValue !== "" &&
    formNicknameValue !== "" &&
    formEmailValue !== "" &&
    formPasswordValue !== "" &&
    formRePasswordValue !== ""
  ) {
    on();
  } else {
    off();
  }
}

function off() {
  formSubmit.classList.remove("on");
}

function on() {
  formSubmit.classList.add("on");
}

formName.addEventListener("input", validation);
formNickname.addEventListener("input", validation);
formEmail.addEventListener("input", validation);
formPassword.addEventListener("input", validation);
formRePassword.addEventListener("input", validation);

validation();
