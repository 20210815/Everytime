let newbox = document.getElementById("new");
let newform = document.getElementsByClassName("post_form");

function postInput() {
  newbox.style.display = "none";
  newform[0].style.display = "block";
}

newbox.addEventListener("click", postInput);
