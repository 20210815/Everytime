document.getElementById("check_q").addEventListener("click", function () {
  var notice = document.getElementById("notice");
  if (this.checked) {
    notice.style.display = "flex";
  } else {
    notice.style.display = "none";
  }
});
