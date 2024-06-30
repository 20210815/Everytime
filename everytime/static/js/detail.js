document.addEventListener("DOMContentLoaded", function () {
  const goodButtons = document.querySelectorAll(".sel_good");

  goodButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const goodElement = this.closest(".pos_bottom").querySelector(".good");
      const numberElement = goodElement.querySelector("img").nextSibling;
      let currentNumber = parseInt(numberElement.textContent.trim());
      numberElement.textContent = ` ${currentNumber + 1}`;
    });
  });

  const scrapButtons = document.querySelectorAll(".sel_scrap");

  scrapButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const scrapElement = this.closest(".pos_bottom").querySelector(".scrap");
      const numberElement = scrapElement.querySelector("img").nextSibling;
      let currentNumber = parseInt(numberElement.textContent.trim());
      numberElement.textContent = ` ${currentNumber + 1}`;

      button.innerHTML = "스크랩 취소";

      const scrapIcon = button.querySelector("img");
      scrapIcon.style.display = "none";
    });
  });

  const commentTrigger = document.getElementById("anony_cmt");
  const typingBox = document.getElementById("typing");

  if (commentTrigger && typingBox) {
    commentTrigger.addEventListener("click", function () {
      typingBox.style.display = "block";
    });
  }

  const checkbox = document.getElementById("anony");
  const myCheckboxLabel = document.querySelector(".myCheckbox");

  if (checkbox && myCheckboxLabel) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        myCheckboxLabel.style.color = "red";
      } else {
        myCheckboxLabel.style.color = "";
      }
    });
  }

  const editButtons = document.querySelectorAll(".submit");

  editButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const inputBox = this.closest(".typing").querySelector(
        ".input_box input[type='text']"
      );
      const comment = inputBox.value.trim();
      alert(comment);
    });
  });
});
