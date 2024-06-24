const login_id = document.getElementById("id_username");
const login_pass = document.getElementById("id_password");
const btn = document.getElementById("login");

function checkInputs() {
  if (login_id.value && login_pass.value) {
    btn.style.backgroundColor = "#f91f15";
  } else {
    btn.style.backgroundColor = ""; // 입력이 모두 안 되었을 때 배경색 초기화
  }
}

// 입력 필드에 이벤트 리스너를 추가하여 입력이 변경될 때마다 확인합니다.
login_id.addEventListener("input", checkInputs);
login_pass.addEventListener("input", checkInputs);
