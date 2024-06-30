// 공감, 스크랩
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.select-wrap .select:nth-child(1)').addEventListener('click', function() {
      var likeNumElement = document.querySelector('.comment-like-num');
      var likeNum = parseInt(likeNumElement.textContent);
      likeNumElement.textContent = likeNum + 1;
    });

    var scrapButton = document.querySelector('.select-wrap .select:nth-child(2)');
    scrapButton.addEventListener('click', function() {
      var scrapNumElement = document.querySelector('.comment-scrap-num');
      var scrapNum = parseInt(scrapNumElement.textContent);
      var scrapTextElement = this.querySelector('.select-text');
      
      if (scrapTextElement.textContent === '스크랩') {
        scrapNumElement.textContent = scrapNum + 1;
        scrapTextElement.textContent = '스크랩 취소';
      } else {
        scrapNumElement.textContent = scrapNum - 1;
        scrapTextElement.textContent = '스크랩';
      }
    });
  });

  // 메세지 창
  function messageAlert() {
    var comment_input = document.getElementById('comment-input').value;
    alert(comment_input);
    }    

  // 익명 버튼
  document.getElementById('anonymousCheckbox').addEventListener('change', function() {
    var textColor = this.checked ? 'red' : 'rgb(152, 152, 152)';
    document.getElementById('anonymousText').style.color = textColor;
  });

  // 대댓글
  document.querySelectorAll('.reply-btn').forEach(button => {
    button.addEventListener('click', () => {
      const addCommentWritingWrap = button.closest('.comment-text-wrap').querySelector('.add-comment-writing-wrap');
      addCommentWritingWrap.style.display = addCommentWritingWrap.style.display === 'none' || addCommentWritingWrap.style.display === '' ? 'block' : 'none';
    });
  });

  
