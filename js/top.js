const topJS = {
    html: (url) => {
        return `<div class="yt-wrap"><iframe width="100%" height="100%" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
    },
    createYT: () =>{
        const wrap = document.querySelector(".yt-grid");
        userData.forEach((data)=>{
            data.yt.forEach((yt)=>{
            const html = topJS.html(yt);
                wrap.insertAdjacentHTML("beforeend", html);
            });
        });
    }
}
topJS.createYT();