let likeCount = 0;
let scrapCount = 0;

function likeon() {
  likeCount++;
  document.getElementById("likeCount").innerText = likeCount;
}

function scrapon() {
  var scrapBtn = document.getElementById("scrapBtn");

  if (scrapBtn.innerText === "스크랩") {
    scrapBtn.innerText = "스크랩 취소";
    scrapCount++;
  } else {
    scrapBtn.innerText = "스크랩";
    scrapCount--;
  }
  document.getElementById("scrapCount").innerText = scrapCount;
}

function changeColor() {
  var checkbox = document.getElementById("writeRed");
  var textElement = document.getElementById("text");

  if (checkbox.checked) {
    checkbox.style.backgroundColor = "#f91f15"; // 체크박스 배경색 변경
    textElement.style.color = "#f91f15"; // 텍스트 색상 변경
    textElement.style.fontWeight = "700"; // 텍스트 색상 변경
  } else {
    checkbox.style.backgroundColor = ""; // 체크박스 배경색 원래대로
    textElement.style.color = ""; // 텍스트 색상 원래대로
  }
}

function changeColor2() {
  var checkbox2 = document.getElementById("checkRed");
  var textElement2 = document.getElementById("text2");

  if (checkbox2.checked) {
    checkbox2.style.backgroundColor = "#f91f15"; // 체크박스 배경색 변경
    textElement2.style.color = "#f91f15"; // 텍스트 색상 변경
    textElement2.style.fontWeight = "700"; // 텍스트 색상 변경
  } else {
    checkbox2.style.backgroundColor = ""; // 체크박스 배경색 원래대로
    textElement2.style.color = ""; // 텍스트 색상 원래대로
  }
}

function show_cmt(id) {
  if (document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "flex";
  }
}

function show_Submit(event) {
  var comment = document.querySelector(".text").value;
  alert(comment);
}

function show_under_cnt(event) {
  var under_cnt = document.querySelector(".text2").value;
  alert(under_cnt);
}
