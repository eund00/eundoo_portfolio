$(document).ready(function () {

    // .nav_btn 클릭시 .nav에 .click 클래스 추가
    document.querySelector(".nav_btn").addEventListener("click", function () {
        document.querySelector(".nav").classList.toggle("click");
    });

    // .nav_wrap 요소 선택
    const navWrap = document.querySelector('.nav_wrap');
    // .nav_btn 요소 선택
    const navBtn = document.querySelector('.nav_btn');

    // 너비를 측정하고 .nav_btn의 right 속성을 업데이트하는 함수
    function updateNavWidth() {
        const navWidth = navWrap.offsetWidth; // .nav_wrap의 너비를 가져옴
        console.log('Current .nav_wrap width:', navWidth);

        // .nav_btn의 right 속성 업데이트
        navBtn.style.right = `${navWidth + 10}px`;
    }

    // 초기 너비 측정 및 right 속성 설정
    updateNavWidth();

    // 윈도우 크기 변경 시 너비 측정 및 right 속성 설정
    window.addEventListener('resize', updateNavWidth);

    const $text = document.querySelector("#typing");

    // 글자 모음
    const letters = [
        "꼼꼼한",
        "창의적인",
        "유연한",
        "협동적인"
    ];

    // 글자 입력 속도
    const speed = 200;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(500);

        // 지우는 효과
        remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 1500);

    // SKILL 슬라이드
    var subSwiper = new Swiper(".cont_skill .mySwiper", {
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 2000,
        slidesPerView: '5',
        spaceBetween: 10,
        breakpoints: {
            500: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            650: {
                slidesPerView: 7,
                spaceBetween: 10
            },
            750: {
                slidesPerView: 9,
                spaceBetween: 15
            },
            1000: {
                slidesPerView: 11,
                spaceBetween: 25
            }
        }
    })

    // 알림창 띄우기
    document.querySelectorAll(".big_alert").forEach(element => {
        element.addEventListener("click", () => {
            alert("교육전자저작물은 저작권 이슈로 링크이동이 불가합니다. 😢");
        });
    });


    gsap.timeline({
        scrollTrigger: {
            trigger: '.cont_intro',
            start: 'top center'
        }
    })
        .fromTo('.intro_img', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
        .fromTo('.intro_title span', { left: '-50px', opacity: 0 }, { left: 0, opacity: 1, duration: .3, stagger: 0.3, delay: -0.5 })
        .fromTo('.intro_text', { top: '50px', opacity: 0 }, { top: 0, opacity: 1, duration: .3, stagger: 0.3, delay: 0.3 })
        .fromTo('.intro_description p', { top: '50px', opacity: 0 }, { top: 0, opacity: 1, duration: .5, stagger: 0.8, delay: .3 })

    gsap.timeline({
        scrollTrigger: {
            trigger: '.cont_history',
            start: 'top center'
        }
    })
        .fromTo('.histroy_list', { top: '50px', opacity: 0 }, { top: 0, opacity: 1, duration: .5, stagger: 0.8 })

    gsap.timeline({
        scrollTrigger: {
            trigger: '.license_inner',
            start: 'top center'
        }
    })
        .fromTo('.license_list', { top: '50px', opacity: 0 }, { top: 0, opacity: 1, duration: .5, stagger: 0.8 })

    gsap.timeline({
        scrollTrigger: {
            trigger: '.active_inner',
            start: 'top center'
        }
    })
        .fromTo('.active_list', { top: '50px', opacity: 0 }, { top: 0, opacity: 1, duration: .5, stagger: 0.3 })

    gsap.timeline({
        scrollTrigger: {
            trigger: '.cont_bye',
            start: 'top center'
        }
    })
        .fromTo('.bye_title .txt_block', { top: '120px', opacity: 0 }, { top: 0, opacity: 1, duration: 1, stagger: .8 })
        .fromTo('.bye_icon', { opacity: 0 }, { opacity: 1, duration: 1 })
        .to('.bye_mail', { opacity: 1, scale: 1, duration: 1, delay: -.5 })

});