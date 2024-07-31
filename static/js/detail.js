// 좋아요, 스크랩
const articleLikesCount = document.querySelector("#article_likes_count");
const articleScrabsCount = document.querySelector("#article_scrabs_count");
const articleScrabsText = document.querySelector("#scrap_text");
const articleScrabsIcon = document.querySelector(
  "#article_scrab_button .imgBox_icons"
);

let isLiked = false;
let isScrabed = false;

document
  .querySelector("#article_like_button")
  .addEventListener("click", articleLikeClicked);
document
  .querySelector("#article_scrab_button")
  .addEventListener("click", articleScrabClicked);

function articleLikeClicked() {
  if (!isLiked) {
    articleLikesCount.innerText++;
    isLiked = !isLiked;
  }
}
function articleScrabClicked() {
  if (isScrabed) {
    articleScrabsCount.innerText--;
    articleScrabsText.innerText = "스크랩";
    articleScrabsIcon.style.display = "block";
  } else {
    articleScrabsCount.innerText++;
    articleScrabsText.innerText = "스크랩 취소";
    articleScrabsIcon.style.display = "none";
  }
  isScrabed = !isScrabed;
}

// 익명
const commentAnonymity = document.querySelectorAll("button#comment_anonymity");

commentAnonymity.forEach((checkBox) => {
  let isAnonymous = false;

  checkBox.closest("form").addEventListener("submit", (event) => {
    event.preventDefault();
  });

  checkBox
    .querySelector(".comment_anonymity_check")
    .addEventListener("click", onOffAnonymity);

  function onOffAnonymity() {
    if (isAnonymous) {
      checkBox.classList.remove("text-red");
    } else {
      checkBox.classList.add("text-red");
    }
    isAnonymous = !isAnonymous;
  }
});

// 대댓글
const commentsCommentBTN = document.querySelectorAll(".comments_comment");

commentsCommentBTN.forEach((button) => {
  button.addEventListener("click", () => {
    const parentArtc = button.closest(".artc");
    const commentsCommentWrite = parentArtc.querySelector(
      ".comments_comment_writing"
    );

    if (commentsCommentWrite.style.display == "block") {
      commentsCommentWrite.style.display = "none";
    } else {
      commentsCommentWrite.style.display = "block";
    }
  });
});

// 댓글 작성
const commentSubmit = document.querySelectorAll("button.img_writing_button");

commentSubmit.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const parentArtc = button.closest("form.artc_writing");
    const commentInput = parentArtc.querySelector("input.input_write_comment");
    if (commentInput.value.trim() !== "") {
      alert(commentInput.value.trim());
      commentInput.value = "";
    }
  });
});
