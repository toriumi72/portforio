const swiper1 = new Swiper('.slider1', {
    // Optional parameters
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    centeredSlides: true, //現在のスライドを中央に表示
    autoplay: {// 自動再生
        delay: 2000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
    },
    slidesPerView: 1, 
});

const swiper2 = new Swiper('.slider2', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 15000
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});