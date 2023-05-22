const messageJS = {
    init: () => {
        messageJS.create();
        messageJS.addEvent();
    },
    create: () => {
        const html = messageData.reduce((text, data) => {
            const mintext = data.mes.slice(0, 80);
            return text +
                `<li class="fadeUpTrigger li">
                <a href="#modal_mes" class="modal-open mes-open" data-id='${data.id}'>
                <div class="name">${data.name}</div>
                <div class="minmes">${mintext}...</div></a>
                </li>`
        }, "");
        const wrap = document.getElementById("lippyD-mes-ul");
        wrap.innerHTML = html;
    },
    addEvent: () => {
        const fn = (e) => {
            console.log(e.currentTarget.dataset.id)
        }
        const els = document.querySelectorAll(".mes-open");
        els.forEach(el => el.addEventListener("click", fn));
    },
}
messageJS.init();