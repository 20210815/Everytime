let user_id = document.querySelector("#id_username");
let user_pw = document.querySelector("#id_password");
let submit = document.querySelector("#submit");

function submitColor() {
  if (id_username.value !== "" && id_password.value !== "") {
    submit.style.backgroundColor = "#ff0000";
  } else {
    submit.style.backgroundColor = "#989898";
  }
}

submitColor(); //초기값 - 회색으로 설정
user_id.addEventListener("input", submitColor); //값이 입력될 때마다 함수 실행!!
user_pw.addEventListener("input", submitColor);
