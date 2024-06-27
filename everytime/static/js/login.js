document.addEventListener("DOMContentLoaded", function () {
  const idInput = document.getElementById("idInput");
  const pwInput = document.getElementById("pwInput");
  const submitButton = document.getElementById("submitButton");

  function checkInputs() {
    if (idInput.value.trim() === "" || pwInput.value.trim() === "") {
      submitButton.classList.remove("input-sub");
      submitButton.classList.add("input-sub-not");
    } else {
      submitButton.classList.remove("input-sub-not");
      submitButton.classList.add("input-sub");
    }
  }

  checkInputs(); // 페이지가 로드될 때 초기 상태 확인
  idInput.addEventListener("input", checkInputs); // 입력 상태 변경 감지
  pwInput.addEventListener("input", checkInputs);
});
