let user_name = document.querySelector("#user_name");
let user_nick = document.querySelector("#user_nick");
let user_email = document.querySelector("#user_email");
let user_pw = document.querySelector("#user_pw");
let re_user_pw = document.querySelector("#re_user_pw");
let submit = document.querySelector("#submit");

function submitColor() {
  if (
    user_name.value !== "" &&
    user_nick.value !== "" &&
    user_email.value !== "" &&
    user_pw.value !== "" &&
    re_user_pw.value !== ""
  ) {
    submit.style.backgroundColor = "#ff0000";
  } else {
    submit.style.backgroundColor = "#989898";
  }
}

submitColor(); //초기값
user_name.addEventListener("input", submitColor);
user_nick.addEventListener("input", submitColor);
user_email.addEventListener("input", submitColor);
user_pw.addEventListener("input", submitColor);
re_user_pw.addEventListener("input", submitColor);
