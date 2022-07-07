  // spのsafariにおける100vh表示の調整
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setFillHeight);

  setFillHeight(); 


  // loading
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

// tab
document.addEventListener('DOMContentLoaded',() => {
    const tabTriggers = document.querySelectorAll('.js_tab_trigger');
    const tabTargets = document.querySelectorAll('.js_tab_target');

    tabTriggers.forEach(tabTrigger => {
        tabTrigger.addEventListener('click', (e) => {
           let currentMenu = e.currentTarget;
           let currentContent = document.getElementById(currentMenu.dataset.id)
           tabTriggers.forEach(tabTrigger => {
            tabTrigger.classList.remove('is_active')
           });
           currentMenu.classList.add('is_active')

           tabTargets.forEach(tabTarget => {
            tabTarget.classList.remove('is_active')
           });
           if(currentContent !== null) {
            currentContent.classList.add('is_active')
           }
        })
    });
});

// ハンバーガー
const JsHamburgerBtn = document.querySelector('.bl_hamburger_button');
const JsHamburgerMenu = document.querySelector('.bl_hamburger_menu');
const JsHamburgerBgW = document.querySelector('.bl_hamburger_bg-w');
const body = document.body;

JsHamburgerBtn.addEventListener('click',function() {
  body.classList.toggle('js_hamburger_no_scroll');
  JsHamburgerBgW.classList.toggle('js_hamburger_open');
  JsHamburgerBtn.classList.toggle('js_hamburger_open');
  JsHamburgerMenu.classList.toggle('js_hamburger_open');
  JsHamburgerBgW.addEventListener('click', function() {
    JsHamburgerBtn.classList.remove('js_hamburger_open');
    JsHamburgerMenu.classList.remove('js_hamburger_open');
    JsHamburgerBgW.classList.remove('js_hamburger_open');
  });
});

// ヘッダースクロール
const Header = document.querySelectorAll('.js_header');
const HeaderHight = document.querySelector('.ly_fv').clientHeight;

window.addEventListener('scroll',function() {
  const Offset = window.pageYOffset;
  for (let i = 0; i < Header.length; i++) {
    if (HeaderHight < Offset) {
    Header[i].classList.add('headerColorScroll');
    } else {
      Header[i].classList.remove('headerColorScroll'); 
    }
  }
});

// アコーディオンメニュー
const jsAccordion = document.querySelectorAll('.js_accordion')

jsAccordion.forEach(jsAccordionEach => {
    let content = jsAccordionEach.nextElementSibling
    jsAccordionEach.addEventListener('click',() => {
      jsAccordionEach.classList.toggle('is-active');
        content.classList.toggle('is-active');
    });
});

//トップに戻るボタンの要素を取得
const topButton = document.getElementById('js_scroll_fadein');

function getScrolled() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset: document.documentElement.scrollTop;
}
//ボタンの表示・非表示
window.onscroll = function() {
    (getScrolled() > 500 ) ? topButton.classList.add('is_fadein'):topButton.classList.remove('is_fadein');
};
//トップに移動する関数
function scrollToTop() {
    //scrollToは指定先にスクロールするメソッド
    window.scrollTo({
        top: 0,
        behavior: 'smooth'//jsでもスムーススクロールオプション
    });
};
//イベント登録
topButton.onclick = function(){
    scrollToTop();
};


// intersection
const target = document.querySelectorAll('.target')
const targetArray = Array.prototype.slice.call(target);

//オプション設定!
const options = {
    root: null,
    rootMargin: '-200px 0px',
    threshold: 0
};

const observer = new IntersectionObserver(callback, options)
targetArray.forEach((tgt) => {
  observer.observe(tgt)
});

function callback(entries) {
  entries.forEach(function(entry, i) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains('is-active')) {
      const delay = i * 100
      setTimeout(function(){
        target.classList.add('is-active');
      },delay);
    }
  });
};



