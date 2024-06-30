const button = document.querySelector("button");
const names = document.querySelector("#id_username");
const nickname = document.querySelector("#id_nickname");
const email = document.querySelector("#id_email");
const pw = document.querySelector("#id_password1");
const re_pw = document.querySelector("#id_password2");

names.addEventListener("keyup", activeEvent);
nickname.addEventListener("keyup", activeEvent);
email.addEventListener("keyup", activeEvent);
pw.addEventListener("keyup", activeEvent);
re_pw.addEventListener("keyup", activeEvent);

function activeEvent() {
  switch (!(names.value && nickname.value && email.value && pw.value && re_pw.value)) {
    case true:
      button.disabled = false;
      break;
    case false:
      button.disabled = true;
      break;
  }
}
