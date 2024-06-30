document.addEventListener("DOMContentLoaded", function () {
  var idInput = document.querySelector(".id");
  var passwordInput = document.querySelector(".password");
  var loginButton = document.querySelector(".login");

  function updateButtonState() {
    if (idInput.value && passwordInput.value) {
      loginButton.classList.add("active");
    } else {
      loginButton.classList.remove("active");
    }
  }

  idInput.addEventListener("input", updateButtonState);
  passwordInput.addEventListener("input", updateButtonState);
});
