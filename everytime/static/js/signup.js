document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const nicknameInput = document.getElementById("nickname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rePasswordInput = document.getElementById("re-password");
    const submitButton = document.getElementById("bnt");

    function checkInputs() {
        const isUsernameValid = usernameInput.value.trim() !== "";
        const isNicknameValid = nicknameInput.value.trim() !== "";
        const isEmailValid = emailInput.value.trim() !== "";
        const isPasswordValid = passwordInput.value.trim() !== "";
        const isRePasswordValid = rePasswordInput.value.trim() !== "";

        if (isUsernameValid && isNicknameValid && isEmailValid && isPasswordValid && isRePasswordValid) {
            submitButton.classList.remove("input-sub-not");
            submitButton.classList.add("input-sub");
            submitButton.disabled = false;
        } else {
            submitButton.classList.remove("input-sub");
            submitButton.classList.add("input-sub-not");
            submitButton.disabled = true;
        }
    }

    checkInputs(); // 페이지가 로드될 때 초기 상태 확인
    usernameInput.addEventListener("input", checkInputs);
    nicknameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);
    rePasswordInput.addEventListener("input", checkInputs);
});