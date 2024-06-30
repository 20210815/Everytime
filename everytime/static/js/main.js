const staticUrl = "/static/img/";
const newPost = document.getElementsByClassName("new_post")[0];
const post = document.getElementsByClassName("post")[0];
const aside = document.getElementsByClassName("aside_live")[0];

const form = document.getElementsByClassName("post0")[0];

let question = document.getElementById("formQ_img");
let anonymous = document.getElementById("formA_img");
let ques_txt = document.getElementById("ques_txt");

let isClickedQ = false;
let isClickedA = false;

newPost.addEventListener("click", function () {
  aside.style.display = "none";
  newPost.style.display = "none";
  form.style.display = "block";
});

question.addEventListener("click", function () {
  console.log("클릭됨");
  if (isClickedQ) {
    question.src = staticUrl + "container.articles.write.question.png";
    ques_txt.style.display = "none";
  } else {
    question.src = staticUrl + "container.articles.write.question.active.png";
    ques_txt.style.display = "block";
  }
  isClickedQ = !isClickedQ;
});

anonymous.addEventListener("click", function () {
  console.log("클릭됨");
  if (isClickedA) {
    anonymous.src = staticUrl + "container.articles.write.anonym.png";
  } else {
    anonymous.src = staticUrl + "container.articles.write.anonym.active.png";
  }

  isClickedA = !isClickedA;
});
