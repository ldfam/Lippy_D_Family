$(function () {
    // $("#header").load("./header.html");
    $("#footer").load("./footer.html");
    $("#g-nav").load("./nav.html");
});
$(window).on('load', function () {
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1300).fadeOut('slow', function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
        if (!document.getElementById("particle")) return;
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 320,//この数値を変更すると星の数が増減できる
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",//形状はcircleを指定
                    "stroke": {
                        "width": 0
                    },
                },
                "opacity": {
                    "value": 1,//シェイプの透明度
                    "random": true,//シェイプの透明度をランダムにする
                    "anim": {
                        "enable": true,//シェイプの透明度をアニメーションさせる
                        "speed": 2,//シェイプの透明度をアニメーションさせる
                        "opacity_min": 0,//透明度の最小値０
                        "sync": false//全てを同時にアニメーションさせない
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "enable": true,
                    "speed": 100,//この数値を小さくするとゆっくりな動きになる
                    "direction": "none",//方向指定なし
                    "random": true,//動きはランダムに
                    "straight": true,//動きをとどめる
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                    },
                    "onclick": {
                        "enable": false,
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });

    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function () {
        $(function () {
            if (document.body.dataset.page == "top") {
                const br = window.innerWidth < 721 ? " <br>" : " ";
                $("#particle").particleText({
                    text: `LIPPY D${br}FAMILY`,
                    colors: ["#F54064", "#F5D940", "#18EBF2", "#FFF"],
                    speed: "slow",
                });
            }
            huckScrollEvent();
        });
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    function huckScrollEvent() {
        const fn = () => {
            const nav = document.getElementById("g-nav");
            const container = document.getElementById("particles-js");
            const heightVolume = !!container? container.clientHeight: 0;
            const scroll = window.pageYOffset;
            scroll > heightVolume ? nav.classList.add("view"): nav.classList.remove("view");
        }
        window.addEventListener("scroll", fn);
        setModalEvent()
    }

    function setModalEvent() {
        $(".modal-open").modaal({
            start_open: false,
            overlay_close: true,
            before_open: function () {
                $('html').css('overflow-y', 'scroll');
            },
            after_close: function () {
                $('html').css('overflow-y', 'scroll');
            }
        });
    }
});