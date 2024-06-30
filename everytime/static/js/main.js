  // 새 글 작성 
  document.querySelector('.new-article').addEventListener('click', () => {
    document.querySelector('.new-article-form').style.display = 'block';
    document.querySelector('.new-article').style.display = 'none';
  });

  // 익명 버튼 -> 빨간색
  document.getElementById('anonymousCheckbox').addEventListener('change', function() {
    var textColor = this.checked ? 'red' : 'rgb(152, 152, 152)';
    document.getElementById('anonymousText').style.color = textColor;
  });

  // 익명 버튼 -> 안내 문구
  document.getElementById('anonymousCheckbox').addEventListener('change', function() {
    var infoBox = document.getElementById('anonymousInfoBox');
    if (this.checked) {
      infoBox.style.display = 'block';
    } else {
      infoBox.style.display = 'none';
    }
  });
  