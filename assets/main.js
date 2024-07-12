///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
$('.hambager').on('click', function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $('.hamberger-wrap').addClass('is-ham-open');
    $('.mega-menu').addClass('is-megamenu-open');
    $('.header-inner').addClass('is-megamenu-icon');
    $('.ham-txt').text('閉じる');
    $('.p-top_wrap02').addClass('dn');
    $('.sec-visual-swiper').addClass('dn');
    navFlg = true;
  } else {
    $('.hamberger-wrap').removeClass('is-ham-open');
    $('.mega-menu').removeClass('is-megamenu-open');
    $('.header-inner').removeClass('is-megamenu-icon');
    $('.ham-txt').text('メニュー');
    $('.p-top_wrap02').removeClass('dn');
    $('.sec-visual-swiper').addClass('dn');
    navFlg = false;
  }
}


//ハンバーガーメニュー アコーディオン
///////////////////////////////////////////
$(document).ready(function() {
  $(".little-nav").hide();
  $(".nav01 .parent").on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.little-nav').slideToggle(300);
  });
});


///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}


///////////////////////////////////////////
//FAQ アコーディオン
///////////////////////////////////////////
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});



////////////////////////////////////////////////////////////////////////////////////////
// ヘッダーを画面上に固定
///////////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
const headerWrap = document.querySelector(".header-wrap");
const header = document.querySelector("header");
gsap.to(header, {
  scrollTrigger: {
    trigger: headerWrap,
    start: "bottom top", 
    end: "top top", 
    toggleClass: {targets: header, className: "header-fixed"},
    onLeave: () => header.classList.add("header-fixed"),  
    onEnterBack: () => header.classList.remove("header-fixed"),  
  }
});

////////////////////////////////////////////////////////////////////////////////////////
// 下層ヘッダーが画面１番上を離れたら.header-fixedを付与
///////////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
gsap.to(".under-header", {
  scrollTrigger: {
    start: "top top", // headerのトップがビューポートのトップに達した時にトリガー
    end: "bottom top", // ドキュメントの最下部まで継続
    toggleClass: {targets: ".under-header", className: "header-fixed"} // header要素にheader-fixedクラスを切り替え
  }
});
gsap.registerPlugin(ScrollTrigger);

////////////////////////////////////////////////////////////////////////////////////////
// スマホヘッダーが画面１番上を離れたら.sp-header_activeを付与
///////////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
gsap.to(".sp-header", {
  scrollTrigger: {
    start: "top top", // headerのトップがビューポートのトップに達した時にトリガー
    end: "bottom top", // ドキュメントの最下部まで継続
    toggleClass: {targets: ".sp-header", className: "sp-header_active"} // header要素にheader-fixedクラスを切り替え
  }
});
gsap.registerPlugin(ScrollTrigger);



//////////////////////////////////////////////////////////////////////////////
//各Swiperイベントの初期化
//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {

  //TOP　バナースライダー
  const swiperBanner = new Swiper('.banner-slider', {
    slidesPerView: 1,
    spaceBetween: 20, // 画像間のスペース
    loop: true,
    autoplay: {
      delay: 0,             // delayを0にすることで連続的にスライドする
      disableOnInteraction: false,
    },
    speed: 15000,            // この値を調整して、スライドのスピードを変更する
    freeMode: true,
    freeModeMomentum: false, // フリック後のアニメーションを無効にする
    freeModeSticky: true,   // 無限ループ時にスライドがなめらかに連続して動くようにする
    breakpoints: {
      // スライドの表示枚数：700px以上の場合
      770: {
        spaceBetween: 20, // 画像間のスペース
        slidesPerView: 1.2,
      },
      // スライドの表示枚数：1280px以上の場合
      1280: {
        spaceBetween: 30, // 画像間のスペース
        slidesPerView: 2,
      },
      // スライドの表示枚数：1900px以上の場合
      1900: {
        spaceBetween: 30, // 画像間のスペース
        slidesPerView: 2,
      }
    },
  });

  //TOP　スタッフ一押しスライダー
  const recommendswiper = new Swiper(".recommend-swiper", {
    loop: true, // ループ
    // effect: 'fade',
    speed: 2000, // 少しゆっくり(デフォルトは300)
    slidesPerView: 1, // 一度に表示する枚数
    spaceBetween: 100, // スライド間の距離
    // autoplay: {
    //   // 自動再生
    //   delay: 3000, // 3秒後に次のスライド
    //   disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    // },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // //TOP　ランキングスライダー
  var rankingswiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 1100) {
        if (rankingswiper) {
          return;
        } else {
          rankingswiper = new Swiper('.ranking-swiper', {
            autoplay: {
              delay: 3000,
            },
            scrollbar: {
              el: '.swiper-scrollbar', //要素指定
            },
            breakpoints: {
              360: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              769: {
                slidesPerView: 5,
                spaceBetween: 10,
              }
            },
          });
        }
      } else {
        if (rankingswiper) {
          rankingswiper.destroy();
          rankingswiper = undefined;
        } 
      } 
  });

  //TOP　無限スライダー
  const visualswiper = new Swiper(".sec-visual-swiper", {
    loop: true, // ループ有効
    slidesPerView: 3, // 一度に表示する枚数
    speed: 10000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    breakpoints: {
      769: {
        slidesPerView: 5.5,
      }
    },
  });

  // //商品詳細 おすすめ
  var itemdetail_recommendswiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 1000) {
        if (itemdetail_recommendswiper) {
          return;
        } else {
          itemdetail_recommendswiper = new Swiper('.recommend_swiper', {
            autoplay: {
              delay: 3000,
            },
            scrollbar: {
              el: '.swiper-scrollbar', //要素指定
            },
            breakpoints: {
              360: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 5,
                spaceBetween: 10,
              }
            },
          });
        }
      } else {
          if (itemdetail_recommendswiper) {
            itemdetail_recommendswiper.destroy();
            itemdetail_recommendswiper = undefined;
          } 
      } 
  });


});


(function () {
  const jsText = document.querySelectorAll('.anime-ttl01');
  jsText.forEach(target => {
    let newText = '';
    const text = target.innerHTML;  
    const result = text.split('');
    for (let i = 0; i < result.length; i++) {
      // <br>タグを検出した場合
      if (result[i] === '<' && result[i + 1] === 'b' && result[i + 2] === 'r' && result[i + 3] === '>') {
          newText += '<br>';
          i += 3;  // <br>の残りの部分をスキップする
      } else {
          newText += '<span>' + result[i] + '</span>';
      }
    }
    target.innerHTML = newText;
  });
})();


////////////////////////////////////////////////////////////////////////////////////////
// GSAPアニメーション
///////////////////////////////////////////////////////////////////////////////////////
// テキストアニメ01
document.querySelectorAll('.anime-ttl01').forEach(function(elem) {
  gsap.to(elem.querySelectorAll('span'), {
    y: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: 'top 90%'
    }
  });
});

//順番にフェードイン
document.querySelectorAll('.fade_triger').forEach(trigger => {
  gsap.fromTo(trigger.querySelectorAll('.anime-fade'), 
    { opacity: 0, y: -10 }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.7, // 順番にフェードインする間隔
      scrollTrigger: {
        trigger: trigger,
        start: "top 50%", 
      }
    }
  );
});

