function checkInputs() {
  const inputs = document.getElementsByClassName("graybox");
  const signupButton = document.getElementById("postbox");
  let isAllFilled = true; // 모든 필드가 채워져 있다고 가정
  let arePasswordsValid = true; // 비밀번호 필드가 유효하다고 가정

  // 모든 입력 필드 검사
  for (let input of inputs) {
    if (input.value.trim() === "") {
      isAllFilled = false; // 하나라도 비어 있으면 false로 설정
    }
    // 비밀번호 입력 필드이고 길이가 8자 미만인 경우
    if (input.type === "password" && input.value.length < 8) {
      arePasswordsValid = false; // 비밀번호 조건 불충족
    }
    // 어느 하나라도 조건 불충족 시 루프 종료
    if (!isAllFilled || !arePasswordsValid) {
      break;
    }
  }

  // 모든 텍스트가 있고, 비밀번호 조건이 충족되면 버튼 색상을 red로 변경
  if (isAllFilled && arePasswordsValid) {
    signupButton.style.backgroundColor = "red";
    signupButton.style.border = "1px solid red";
  } else {
    // 하나라도 조건 충족하지 않으면 버튼 색상을 gray로 변경
    signupButton.style.backgroundColor = "gray";
    signupButton.style.border = "1px solid gray";
  }
}

// 각 입력 필드에 'input' 이벤트 리스너 추가
Array.from(document.getElementsByClassName("graybox")).forEach((element) => {
  element.addEventListener("input", checkInputs);
});
