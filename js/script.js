$(document).ready(function () {
    let isScrolling = false; // 중복 스크롤 방지 플래그
    const sections = $('section'); // 모든 섹션 선택
    let currentSectionIndex = 0; // 현재 섹션 인덱스

    // 메뉴 클릭 이벤트 처리
    $('nav ul li a').on('click', function (e) {
        e.preventDefault(); // 기본 동작 막기

        // 클릭한 메뉴의 대상 섹션으로 이동
        const target = $($(this).attr('href'));
        const targetIndex = sections.index(target); // 대상 섹션의 인덱스

        if (targetIndex !== -1) {
            moveToSection(targetIndex); // 섹션 이동 함수 호출
        }
    });

    // 휠 스크롤 이벤트 처리
    $(window).on('wheel', function (e) {
        if (isScrolling) return; // 현재 스크롤 중이면 무시

        if (e.originalEvent.deltaY > 0) {
            // 아래로 스크롤
            moveToSection(currentSectionIndex + 1);
        } else if (e.originalEvent.deltaY < 0) {
            // 위로 스크롤
            moveToSection(currentSectionIndex - 1);
        }
    });

    // 섹션 이동 함수
    function moveToSection(index) {
        if (index < 0 || index >= sections.length) return; // 범위를 벗어나면 무시

        isScrolling = true; // 스크롤 중 상태 설정
        currentSectionIndex = index; // 현재 섹션 업데이트

        $('html, body').animate(
            { scrollTop: $(sections[index]).offset().top },
            800, // 800ms 동안 부드럽게 스크롤
            function () {
                isScrolling = false; // 스크롤 완료 후 플래그 해제
            }
        );
    }


    let btt = document.querySelector('#go-top'),
        docElem = document.documentElement,
        scrollAmount;

    window.addEventListener('scroll', function () {
        scrollAmount = docElem.scrollTop;

        if (scrollAmount > 6000) {
            btt.className = 'active';
        } else {
            btt.classList.remove('active');
        }
    });
    currentSectionIndex = 0; // 최상단 섹션으로 인덱스 업데이트
    btt.addEventListener('click', function (e) {
        e.preventDefault();

        /* IE 불가
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });                 
        */
        let scrollInterval = setInterval(function () {
            if (scrollAmount != 0) {
                window.scrollBy(0, -55);
            } else {
                clearInterval(scrollInterval);
                currentSectionIndex = 0; // 최상단 섹션으로 인덱스 업데이트
            }
        }, 7);
        return false
    });
});

function lush_openPDF() {
    const pdfPath = "img/lush_pdf.pdf"; // PDF 파일 경로
    window.open(pdfPath, "_blank"); // 새 창에서 PDF 열기
}
function keybi_openPDF() {
    const pdfPath = "img/keybi_pdf.pdf"; // PDF 파일 경로
    window.open(pdfPath, "_blank"); // 새 창에서 PDF 열기
}
function bread_openPDF() {
    const pdfPath = "img/bread_pdf.pdf"; // PDF 파일 경로
    window.open(pdfPath, "_blank"); // 새 창에서 PDF 열기
}
function ohgranola_openPDF() {
    const pdfPath = "img/ohgranola_pdf.pdf"; // PDF 파일 경로
    window.open(pdfPath, "_blank"); // 새 창에서 PDF 열기
}
function rice_openPDF() {
    const pdfPath = "img/rice_pdf.pdf"; // PDF 파일 경로
    window.open(pdfPath, "_blank"); // 새 창에서 PDF 열기
}
