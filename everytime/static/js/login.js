let id = document.querySelector("#id_username");
let pw = document.querySelector("#id_password");
let submit = document.querySelector("#login_btn");

function btnActivate() {
  if (id.value !== "" && pw.value !== "") {
    submit.style.backgroundColor = "#ff0000";
  } else {
    submit.style.backgroundColor = "#D6D6D6";
  }
}

btnActivate();
id.addEventListener("input", btnActivate);
pw.addEventListener("input", btnActivate);
