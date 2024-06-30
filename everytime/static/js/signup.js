document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.querySelector(".name");
  var idInput = document.querySelector(".id");
  var emailInput = document.querySelector(".email");
  var passwordInput = document.querySelector(".password");
  var password2Input = document.querySelector(".password2");
  var submitButton = document.querySelector(".submit");

  function updateButtonState() {
    if (
      nameInput.value &&
      idInput.value &&
      emailInput.value &&
      passwordInput.value &&
      password2Input.value
    ) {
      submitButton.classList.add("active");
    } else {
      submitButton.classList.remove("active");
    }
  }

  nameInput.addEventListener("input", updateButtonState);
  idInput.addEventListener("input", updateButtonState);
  emailInput.addEventListener("input", updateButtonState);
  passwordInput.addEventListener("input", updateButtonState);
  password2Input.addEventListener("input", updateButtonState);
});
