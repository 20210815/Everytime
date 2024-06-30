let like = document.getElementById("like");
const comments = document.getElementById("comments");
let scrap = document.getElementById("scrap");
const likeBtn = document.getElementsByClassName("button1")[0];
const scrapBtn = document.getElementsByClassName("button2")[0];
let scrapText = document.getElementById("button2Text");

const reply = document.getElementById("reply");
const replyTextBox = document.getElementsByClassName("post_detail_write2")[0];

const replyText = document.getElementById("replyText");
const replyBtn = document.getElementById("replyBtn");

let anonymous = document.getElementById("formA_img");

likeBtn.addEventListener("click", function () {
  var likeCount = parseInt(like.innerText, 10);
  likeCount++;
  like.innerText = likeCount;
});

let isScrapped = false; // 스크랩 상태를 나타내는 변수 추가

scrapBtn.addEventListener("click", function () {
  var scrapCount = parseInt(scrap.innerText, 10);

  // 스크랩 취소 상태인 경우
  if (isScrapped) {
    scrapCount--;
    scrapText.innerText = "스크랩";
  } else {
    scrapCount++;
    scrapText.innerText = "스크랩 취소";
  }

  scrap.innerText = scrapCount;

  // 스크랩 상태 변경
  isScrapped = !isScrapped;
});

reply.addEventListener("click", function () {
  replyTextBox.style.display = "";
});

replyBtn.addEventListener("click", function () {
  if (isClickedA) {
    alert(`***익명 선택됨*** \n${replyText.value}`);
  } else {
    alert(`***익명 선택 안 됨*** \n${replyText.value}`);
  }
});

let isClickedA = false;

anonymous.addEventListener("click", function () {
  console.log("클릭됨");
  if (isClickedA) {
    anonymous.src = "img/container.articles.write.anonym.png";
  } else {
    anonymous.src = "img/container.articles.write.anonym.active.png";
  }
  isClickedA = !isClickedA;
});
