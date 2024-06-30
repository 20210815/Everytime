//let click = document.getElementsByClassName("writingarticle");
//function clickBox(e) {
//  Event.preventDefault();
//}

document.addEventListener("DOMContentLoaded", function clickbox(e) {
  document
    .getElementByClassName("newwrite")
    .addEventListener("click", function clickbox(e) {
      Event.preventDefault();
      let writingarticle = document.getElementByClassName("writingarticle");
      if (
        writingarticle.style.display === "none" ||
        writingarticle.style.display === ""
      ) {
        writingarticle.style.display = "block";
      } else {
        writingarticle.style.display = "none";
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementByClassName("checkbox");
  const alertMessage = document.getElementById("alert-message");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      alertMessage.classList.remove("hidden");
    } else {
      alertMessage.classList.add("hidden");
    }
  });
});
