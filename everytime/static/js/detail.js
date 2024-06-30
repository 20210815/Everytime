function changeImage() {
  let img = document.getElementById("goodIcon");
  img.src = "img/goodicon.png";
}

function changeImage() {
  let img = document.getElementById("goodIcon");
  img.src = "img/goodicon.png";
}

function increaseScrap() {
  let scrapNumber = document.getElementById("scrapNumber");
  let scrapText = document.getElementById("scrapText");
  scrapNumber.textContent = parseInt(scrapNumber.textContent) + 1;
  scrapText.textContent = "스크랩 취소";
}

function showReplyBox(button) {
  let commentDiv = button.parentElement.parentElement;
  let replyBox = commentDiv.querySelector(".write_comment");

  if (replyBox) {
    if (replyBox.style.display === "none" || replyBox.style.display === "") {
      replyBox.style.display = "block";
    } else {
      replyBox.style.display = "none";
    }
  } else {
    let newReplyBox = document.createElement("div");
    newReplyBox.classList.add("write_comment");
    newReplyBox.innerHTML = `
        <div class="write_comment_text">
          <textarea placeholder="댓글을 입력하세요"></textarea>
        </div>
      `;
    commentDiv.appendChild(newReplyBox);
  }
}
