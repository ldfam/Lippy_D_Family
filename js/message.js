const messageJS = {
    init: () => {
        messageJS.create();
        messageJS.addEvent();
    },
    create: () => {
        const html = messageData.reduce((text, data) => {
            const mintext = data.mes.slice(0, 80);
            return text +
                `<div class="fadeUpTrigger li">
                <div class="name">${data.name}</div>
                <div class="minmes">${mintext}...</div>
                </div>`
        }, "");
        const wrap = document.getElementById("lippyD-mes-ul");
        wrap.innerHTML = html;
    },
    addEvent: () => {

    },
}
messageJS.init();