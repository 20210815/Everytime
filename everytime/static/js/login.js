function idFunction() {
  let usernameIn = document.getElementByClassName("idboxall");
  let loginButton = document.getElementByClassName("loginkor");

  function inputCheck() {
    let idboxall = usernameIn.value();

    inputCheck();

    if (idboxall) {
      loginButton.classList.add("login.done");
    } else {
      loginButton.classList.remove("login.done");
    }
  }

  usernameIn.addEventListener("input", inputCheck);
}
