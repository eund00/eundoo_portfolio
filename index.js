$(document).ready(function () {

    document.querySelector(".nav_btn").addEventListener("click", function () {
        document.querySelector(".nav").classList.toggle("click");
    });

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

});