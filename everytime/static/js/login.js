const formIdElement = document.getElementById("id_username");
const formPasswordElement = document.getElementById("id_password");
const formSubmitButton = document.getElementById("form_submit");

function validation() {
  const formIdValue = formIdElement.value.trim();
  const formPasswordValue = formPasswordElement.value.trim();

  if (formIdValue !== "" && formPasswordValue !== "") {
    on();
  } else {
    off();
  }
}

function off() {
  formSubmitButton.classList.remove("on");
}

function on() {
  formSubmitButton.classList.add("on");
}

formIdElement.addEventListener("input", validation);
formPasswordElement.addEventListener("input", validation);
