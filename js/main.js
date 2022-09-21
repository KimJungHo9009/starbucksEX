const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', ()=>{
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', ()=> {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합 검색');
});

searchInputEl.addEventListener('blur', ()=> {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// BADGE 컨트롤
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(()=>{
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // Scrolltop 보이기
    gsap.to(toTopEl, 0.2, {
      x: -160,
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // Scrolltop 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 0,
    });
  }
}, 300));
// _.throttle(함수, 지연시간), lodash 라이브러리

toTopEl.addEventListener('click', ()=> {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// 메인 배너 비쥬얼, 순차적 이미지 애니메이션 처리
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index)=> {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //순차적으로 이미지를 나타내기 위해 각 요소의 index에 따른 delay 값 설정
    opacity: 1
  });
});

/* SWIPER */
// Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleBtnUp = document.querySelector('.toggle-promotion .upload');
const promotionToggleBtnDown = document.querySelector('.toggle-promotion .download');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', ()=> {
  isHidePromotion = !isHidePromotion;
  console.log(promotionToggleBtn.textContent);
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
    promotionToggleBtnUp.style.display = 'none';
    promotionToggleBtnDown.style.display = 'block';
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
    promotionToggleBtnUp.style.display = 'block';
    promotionToggleBtnDown.style.display = 'none';
  }
});

// 범위 랜덤 함수
// `,toFixed()`를 통해 반환된 문자 데이터를
// `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
function random(min, max) {
  return parseFloat((Math.random() * (max - min)+ min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl, index)=>{
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: 0.8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();