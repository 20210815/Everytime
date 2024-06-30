const writingBTN = document.querySelector("section#loadPostButton");
const postToWrite = document.querySelector("section#postContainer");
const questionAlarm = document.querySelector("div.question_alarm");
let isquestion = false;

writingBTN.addEventListener("click", () => {
  postToWrite.style.display = "block";
  writingBTN.style.display = "none";
});

document.querySelector("input#question").addEventListener("click", () => {
  if (isquestion) {
    questionAlarm.style.display = "none";
    document.querySelector("textarea.input_writing_content").style.height =
      "380px";
  } else {
    questionAlarm.style.display = "block";
    document.querySelector("textarea.input_writing_content").style.height =
      "304px";
  }

  isquestion = !isquestion;
});

// 보안 문제
/*
fetch("post.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((html) => {
    document.getElementById("postContainer").innerHTML = html;
  })
  .catch((error) => {
    console.error(
      "There has been a problem with your fetch operation:",
      error
    );
  });
*/
