let likeCount = 9; // 초기 좋아요 수
let isLiked = false; // 좋아요 상태

function change_good() {
  const countDisplay = document.getElementById("likeCount");

  if (!isLiked) {
    likeCount++; // 좋아요 상태면 숫자 증가
  } else {
    likeCount--; // 좋아요 취소 상태면 숫자 감소
  }

  countDisplay.textContent = likeCount; // 화면에 숫자 업데이트
  isLiked = !isLiked; // 상태 토글
}

let scrapCount = 0; // 초기 좋아요 수
let isScraped = false; // 좋아요 상태

function change_scrap() {
  const countDisplay = document.getElementById("scrapCount");

  if (!isScraped) {
    scrapCount++; // 좋아요 상태면 숫자 증가
    scrapButton.value = "스크랩 취소";
    scrapImage.style.display = "none";
  } else {
    scrapCount--; // 좋아요 취소 상태면 숫자 감소
    scrapButton.value = "스크랩";
    scrapImage.style.display = "block";
  }

  countDisplay.textContent = scrapCount; // 화면에 숫자 업데이트
  isScraped = !isScraped; // 상태 토글
}

let isChecked = false;

function checkbox() {
  const checkboxElement = document.getElementById("checkbox_red");
  const forRedElement = document.getElementById("for_red");

  if (!isChecked) {
    forRedElement.style.color = "red";
  } else {
    forRedElement.style.color = "rgb(162, 162, 162)";
  }

  isChecked = !isChecked;
}

function showComment() {
  const commentInput = document.getElementById("commentInput");
  const comment = commentInput.value;
  alert(comment);
}

let isChecked_2 = false;
function checkbox_1() {
  const checkboxElement = document.getElementById("checkbox_red_2");
  const forRedElement = document.getElementById("for_red_2");

  if (!isChecked_2) {
    forRedElement.style.color = "red";
  } else {
    forRedElement.style.color = "rgb(162, 162, 162)";
  }

  isChecked_2 = !isChecked_2;
}

function showComment_1() {
  const commentInput = document.getElementById("co-coment");
  const comment = commentInput.value;
  alert(comment);
}

document
  .getElementById("co-coment-toggle")
  .addEventListener("change", toggleDisplay);

function toggleDisplay() {
  var infoBox = document.getElementById("background");
  if (this.checked) {
    infoBox.style.display = "none"; // 체크되면 div 보이기
  } else {
    infoBox.style.display = "block"; // 체크 해제되면 div 숨기기
  }

  this.checked = !this.checked;
}
