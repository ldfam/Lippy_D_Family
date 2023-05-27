const messageJS = {
    init: () => {
        messageJS.create();
        messageJS.addEvent();
    },
    create: () => {
        // ミニ文章
        const minHTML = messageData.reduce((text, data) => {
            const mintext = data.mes.slice(0, 75);
            return text +
                `<li class="fadeUpTrigger li">
                <a href="#modal_mes" class="modal-open mes-open" data-id='${data.id}'>
                <div class="name">${data.name}</div>
                <div class="minmes">${mintext}...</div></a>
                </li>`
        }, "");
        const minWrap = document.getElementById("lippyD-mes-ul");
        minWrap.innerHTML = minHTML;

        // 全体文章
        const maxHTML = messageData.reduce((text, data) => {
            return text + `<li class="modal" data-id='${data.id}'><div class="name">${data.name}</div><div class="minmes">${data.mes}</div></li>`
        }, "");
        const maxWrap = document.getElementById("modal_mes");
        maxWrap.innerHTML = `<ul class="modal-wrapper">${maxHTML}</ul>`;

    },
    addEvent: () => {
        const fn = (e) => {
            messageJS.viewDetailText(e.currentTarget.dataset.id);
        }
        const els = document.querySelectorAll(".mes-open");
        els.forEach(el => el.addEventListener("click", fn));
    },
    viewDetailText: (id) => {
        const success = (el) => el.classList.remove("hidden");
        const failure = (el) => el.classList.add("hidden");
        const modalEls = document.querySelectorAll("#modal_mes .modal");
        modalEls.forEach(el => el.dataset.id == id ? success(el) : failure(el));
    }
}
messageJS.init();