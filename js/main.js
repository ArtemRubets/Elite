$(function () {
    $('[data-popup = "popup-btn"]').magnificPopup({
        type: 'inline',
        midClick: true
    });
    $(".header-menu > ul > li > a:not('#no-anchor') , .mobile-col > ul > li > a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('#gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });
});

window.onload = function () {

    const mobileMenuCloseRight = document.querySelector('#menu-close-right');
    const mobileMenuCloseLeft = document.querySelector('#menu-close-left');
    const mobileColRight = document.querySelector('#mobile-col-right');
    const mobileColLeft = document.querySelector('#mobile-col-left');
    const menuMobileRight = document.querySelector('#menu-mobile-right');
    const menuMobileLeft = document.querySelector('#menu-mobile-left');

    menuMobileRight.addEventListener('click', showMobileMenuRight);
    menuMobileLeft.addEventListener('click', showMobileMenuLeft);
    mobileMenuCloseRight.addEventListener('click', closingRight);
    mobileMenuCloseLeft.addEventListener('click', closingLeft);

    function showMobileMenuRight() {
        mobileColRight.classList.add('mobile-col-active-right');
    }

    function showMobileMenuLeft() {
        mobileColLeft.classList.add('mobile-col-active-left');
    }

    function closingRight() {
        mobileColRight.classList.remove('mobile-col-active-right');
    }

    function closingLeft() {
        mobileColLeft.classList.remove('mobile-col-active-left');
    }

}

// const list = document.querySelectorAll('.list ul');
// for(let i = 0;i<list.length;i++){
//    console.log (list[i])
// }
// const circles = document.querySelectorAll('.list ul .circle');
// let number = 0;
// for(let i = 0;i<circles.length;i++){
//     number++
//     circles[i].innerHTML = number
// }