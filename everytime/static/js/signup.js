function SignUpFunction() {
  let usernameIn = document.getElementByClassName("nameboxtext");
  let loginButton = document.getElementByClassName("joinkor");

  function inputCheck() {
    let nameboxtext = usernameIn.value();

    inputCheck();

    if (nameboxtext) {
      loginButton.classList.add(".redbox");
    } else {
      loginButton.classList.remove(".redbox");
    }
  }

  usernameIn.addEventListener("input", inputCheck);
}
