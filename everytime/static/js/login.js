const idValue = document.getElementById("id_username");
const passwordValue = document.getElementById("id_password");
const idBoxValue = document.getElementById("loginBtn");

function color() {
  if (idValue.value.length > 0 && passwordValue.value.length > 0) {
    idBoxValue.style.backgroundColor = "#f91f15";
  } else {
    idBoxValue.style.backgroundColor = "#8e8b8b";
  }
}

idValue.addEventListener("input", color);
passwordValue.addEventListener("input", color);
// idBoxValue.addEventListener("click", color);
