const aboutJS = {
    temp: (data) => `<div class="lippyD-about" data-about="${data.query}">
                        <h3>${data.name}/${data.eng}</h3>
                        <div class="lippyD-about-content1">
                            <div class="lippyD-about-set">
                                <div>ポジション</div>
                                <div>${data.state}</div>
                            </div>
                            <div class="lippyD-about-set">
                                <div>プロフィール</div>
                                <div>${data.disc}</div>
                            </div>
                            <div class="lippyD-about-set">
                                <div>好きなこと</div>
                                <div>${aboutJS.getLikes(data)}</div>
                            </div>
                            <div class="lippyD-about-set">
                                <div>主なゲーム作品</div>
                                <div>${aboutJS.getGames(data)}</div>
                            </div>
                        <div>
                        <div class="lippyD-about-content2">
                            <div id="imgs">
                                <img src="" alt="" width="300" height="300">
                                <div>
                                    <a href="${data.tw}">
                                    <img src="" alt="" width="30" height="30">
                                    <span>${data.tw}</span>
                                </div>
                            </div>
                        <div>
                        <div class="lippyD-about-content3">
                            <div class="lippyD-about-set youtube-content">
                                <div>おすすめ動画</div>
                                <div>${aboutJS.getYT(data)}</div>
                            </div>
                        <div>
                    </div>`,
    getLikes: (data) => {
        let html = "";
        data.like.forEach((like) => html += `<div><span>${like}</span></div>`);
        return html;
    },
    getGames: (data) => {
        let html = "";
        data.game.forEach((game) => html += `<div><span>${game}</span></div>`);
        return html;
    },
    getYT: (data)=>{
        let html = "";
        data.yt.forEach((yt) => html += `<div><div class="yt-wrap"><iframe width="100%" height="100%" src="${yt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>`)
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