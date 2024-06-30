document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("border");

  searchBox.addEventListener("click", function () {
    console.log("Search box clicked");

    const postHTML = `
    <div class="box">
      <form class="post_form">
        <div class="title">
          <input
            type="text"
            id="title"
            name="title"
            placeholder='네가 "깃아 미안해" 했잖아?'
          />
        </div>
        <div class="main">
          <textarea
            name="main"
            id="main"
            placeholder="그럼 깃 충돌 이딴거 안생겼어"
          ></textarea>
        </div>
        <div class="post">
          <div class="data">
            <img
              alt="태그"
              src="img/everytime_other_img/container.articles.write.hashtag.png"
            />
            <img
              alt="사진"
              src="img/everytime_other_img/container.articles.write.attach.png"
            />
          </div>
          <div class="arrange">
            <div class="check">
              <input type="checkbox" id="anony" />
              <div class="myCheckbox">익명</div>
            </div>
            <button class="submit" type="submit">
              <img
                alt="글쓰기"
                src="img/everytime_other_img/container.articles.write.submit.png"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
    `;

    searchBox.innerHTML = postHTML;
    searchBox.style.height = "auto";
    searchBox.style.padding = "0";

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = postCssUrl;
    document.head.appendChild(link);

    console.log("Post HTML injected and CSS applied");
    attachFormHandlers();

    console.log(searchBox.innerHTML);
  });
});
