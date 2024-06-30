document.addEventListener("DOMContentLoaded", function() {
        const newButton = document.querySelector('.new'); 
        const postwrite = document.querySelector('.post-write');

        newButton.addEventListener('click', function() {
            postwrite.style.display = (postwrite.style.display === 'none' || postwrite.style.display === '') ? 'block' : 'none';
        });

    //체크박스 클릭 이벤트(색 변경)
    const anonym1Button = document.querySelector('.question-check');
    anonym1Button.addEventListener('click', function() {
        const anonym1text = document.querySelector('.question');
        anonym1text.style.color = '#28b9bb';
    })
    const anonym2Button = document.querySelector('.anonym-check');
    anonym2Button.addEventListener('click', function() {
        const anonym2text = document.querySelector('.anonym');
        anonym2text.style.color = 'red';
    })
});
