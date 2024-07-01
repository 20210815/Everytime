document.addEventListener("DOMContentLoaded", function () {
  let username = document.querySelector("#id_username");
  let nickname = document.querySelector("#id_nickname");
  let email = document.querySelector("#id_email");
  let pw = document.querySelector("#id_password1");
  let re_pw = document.querySelector("#id_password2");
  let submit = document.querySelector("#signup_btn");

  function btnActivate() {
    if (username.value !== "" && nickname.value !== "" && email.value !== "" && pw.value !== "" && re_pw.value !== "") {
      submit.style.backgroundColor = "#ff0000";
    } else {
      submit.style.backgroundColor = "#D6D6D6";
    }
  }

  btnActivate();
  username.addEventListener("input", btnActivate);
  nickname.addEventListener("input", btnActivate);
  email.addEventListener("input", btnActivate);
  pw.addEventListener("input", btnActivate);
  re_pw.addEventListener("input", btnActivate);
});
