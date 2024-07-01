function toggleAnonymity() {
  const anonymOption = document.querySelector(".option .anonym");

  anonymOption.classList.toggle("active"); // Toggle active class for styling

  // Toggle comment display based on anonymity toggle state
  const comments = document.querySelectorAll(".comments");
  comments.forEach((comment) => {
    const mediumElement = comment.querySelector(".medium");

    if (anonymOption.classList.contains("active")) {
      comment.dataset.anonymity = "true"; // Set dataset attribute to "true" for anonymity
      mediumElement.innerText = "익명";
    } else {
      comment.dataset.anonymity = "false"; // Set dataset attribute to "false" for non-anonymity
      mediumElement.innerText = comment.dataset.username; // Use data attribute to get username
    }
  });
}

function prepareCommentForm() {
  const anonymityOption = document.querySelector(".option .anonym");

  // Check if anonymity option is active
  const isAnonym = anonymityOption.classList.contains("active");

  // Set hidden field value based on anonymity option
  document.querySelector("input[name='anonymity']").value = isAnonym ? "true" : "false";
}
function submitForm(formElement) {
  const anonymOption = document.querySelector(".option .anonym");

  // Set the value of the hidden field based on the toggle state
  document.querySelector("input[name='anonymity']").value = anonymOption.classList.contains("active")
    ? "true"
    : "false";

  // Submit the form
  formElement.submit();
}

document.addEventListener("DOMContentLoaded", function () {
  const replyButtons = document.querySelectorAll(".childcomment");

  replyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const existingForm = this.closest("article").querySelector(".writecomment.child");
      if (existingForm) {
        existingForm.remove();
      }

      const replyForm = document.createElement("form");
      replyForm.className = "writecomment child";
      replyForm.id = "commentForm";
      replyForm.innerHTML = `
        <input type="text" name="content" maxlength="300" autocomplete="off" placeholder="대댓글을 입력하세요." class="text">
        <ul class="option">
          <li title="익명" class="anonym" onclick="toggleAnonymity()"></li>
          <li title="완료" class="submit" onclick="submitForm(this.closest('form'))"></li>
        </ul>
        <div class="clearBothOnly"></div>
      `;

      const parentArticle = this.closest("article");
      parentArticle.insertAdjacentElement("afterend", replyForm);
    });
  });
});

function posvote() {
  const voteElement = document.querySelector(".status.left .vote");
  let count = parseInt(voteElement.innerText);
  if (voteElement.classList.contains("voted")) {
    alert("이미 공감하였습니다.");
  } else {
    if (confirm("이 글에 공감하십니까?")) {
      count++;
      voteElement.innerText = count;
      voteElement.classList.add("voted");
    }
  }
}

function scrap() {
  const scrapElement = document.querySelector(".status.left .scrap");
  const scrapButton = document.querySelector(".buttons .scrap");
  let count = parseInt(scrapElement.innerText);

  if (scrapButton.innerText === "스크랩") {
    if (confirm("이 글을 스크랩하시겠습니까?")) {
      count++;
      scrapElement.innerText = count;
      scrapButton.innerText = "스크랩 취소";
    }
  } else {
    if (confirm("이 글의 스크랩을 취소하시겠습니까?")) {
      count--;
      scrapElement.innerText = count;
      scrapButton.innerText = "스크랩";
    }
  }
}
