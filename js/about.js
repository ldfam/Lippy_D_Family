const aboutJS = {
    temp: (data) => `<div class="lippyD-about" data-about="${data.query}">
                        <h3>${data.name}<span><p>${data.eng}</p></span></h3>
                        <div class="lippyD-about-set"><p>ポジション</p><p>${data.state}</p></div>
                        <div class="lippyD-about-set"><p>プロフィール</p><p>${data.disc}</p></div>
                        <div class="lippyD-about-set">
                            <p>好きなこと</p>
                            <ul>${aboutJS.getLikes(data)}</ul>
                        </div>
                        <div class="lippyD-about-set">
                            <p>主なゲーム作品</p>
                            <ul>${aboutJS.getGames(data)}</ul>
                        </div>
                        <div id="imgs"><img src="" alt="" width="300" height="300"></div>
                        <div class="lippyD-about-set">
                            <p>おすすめ動画</p>
                            <ul>${aboutJS.getYT(data)}</ul>
                        </div>
                    </div>`,
    getLikes: (data) => {
        let html = "";
        data.like.forEach((like) => html += `<li><p>${like}</p></li>`);
        return html;
    },
    getGames: (data) => {
        let html = "";
        data.game.forEach((game) => html += `<li><p>${game}</p></li>`);
        return html;
    },
    getYT: (data)=>{
        let html = "";
        data.yt.forEach((yt) => html += `<li><div class="yt-wrap"><iframe width="100%" height="100%" src="${yt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></li>`)
        return html;
    },
    fn: () => {
        const area = document.getElementById("lippyD-abouts");
        userData.forEach((dt) => {
            area.insertAdjacentHTML("beforeend", aboutJS.temp(dt));
        });
    }
}
aboutJS.fn();