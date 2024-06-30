let icon1 = document.querySelector(".vote-button");
let icon3 = document.querySelector(".scrap-button");
let num1 = document.querySelector(".vote-number");
let num3 = document.querySelector(".scrap-number");
let i = 0;
let j = 0;

icon1.addEventListener("click", () => {
  i++;
  num1.textContent = i;
});

icon3.addEventListener("click", () => {
  num3.textContent = j;
});

function change() {
  const btn = document.getElementById("scrapBtn");
  if (btn.value === "스크랩") {
    btn.value = "스크랩 취소";
    j++;
    num3.textContent = j;
  } else {
    btn.value = "스크랩";
    j--;
    num3.textContent = j;
  }
}

function change2() {
  const btn = document.getElementById("check");
  const change2 = btn.checked;

  if ((change2 = "true")) {
    check1.classList.add("active");
  } else {
    check1.classList.remove("avtive");
  }
}

document.querySelectorAll(".replybtn").forEach(function (button) {
  button.addEventListener("click", function () {
    var commentBox = this.closest(".comment-box");
    var inputBox2 = commentBox.querySelector(".input-box2");
    if (inputBox2.style.display === "none") {
      inputBox2.style.display = "block";
    } else {
      inputBox2.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll(".input-box2 form, .input-box form");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var input = form.querySelector(".comment-input").value;
      if (input === "") {
        alert("내용을 입력해 주세요.");
      } else {
        alert(input);
      }
    });
  });
});
