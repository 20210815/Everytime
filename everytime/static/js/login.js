function checkInputs() {
  const idInput = document.getElementById("idbox");
  const passwordInput = document.getElementById("id_password");
  const signupButton = document.getElementById("id_username");

  let isAllFilled = idInput.value.trim() !== "" && passwordInput.value.trim() !== ""; // 모든 필드가 채워져 있는지 검사
  let arePasswordsValid = passwordInput.value.length >= 8; // 비밀번호 길이가 8자 이상인지 검사

  // 모든 텍스트가 있고, 비밀번호 조건이 충족되면 버튼 색상을 red로 변경
  if (isAllFilled && arePasswordsValid) {
    signupButton.style.backgroundColor = "red";
    signupButton.style.border = "1px solid red";
  } else {
    // 하나라도 조건을 충족하지 않으면 버튼 색상을 gray로 변경
    signupButton.style.backgroundColor = "gray";
    signupButton.style.border = "1px solid gray";
  }
}

// 각 입력 필드에 'input' 이벤트 리스너 추가
document.getElementById("idbox").addEventListener("input", checkInputs);
document.getElementById("id_password").addEventListener("input", checkInputs);
