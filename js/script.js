$(document).ready(function () {
    AOS.init({
        once: true,
        // mirror: false
    });



    let menuHeight;
    let mainScreen = $(window).innerHeight();
    $('#main-screen').css('height', mainScreen + "px")

    $('.mobile-button,.send-message a').on('click', function () {
        $('.mobile-button').toggleClass('active');
        $('.mobile-button').children().toggleClass('active');
        $('.menu-wrap').toggleClass('active');
        menuHeight = $(window).innerHeight()
        $('.menu-wrap').css('height', menuHeight + "px")
    })


    $('input, textarea').on('input', function () {
        $(this).removeClass('error-field')
    })

    $('.layer,.popup-button').on('click', function () {
        $('.layer, .popup').fadeOut();
    })


    if ($('.video').length !== 0) {
        $('.video').css('opacity', '1')
            .css('transition', '0.5s');
    }

});




$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    animationDisabler = true;
    $('body').addClass('no-anime')

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000)



    setTimeout(function () {
        animationDisabler = false

    }, 1200)
});

// window.addEventListener('load', function () {
//     var ua = navigator.userAgent.toLowerCase();

//     if (ua.indexOf('safari') != -1 && this.innerWidth < 991) {
//         if (ua.indexOf('chrome') > -1) {
//             Array.prototype.forEach.call(document.querySelectorAll('.link-button'), function (e) {
//                 e.style = 'line-height: 40px';
//             });
//         } else {
//             Array.prototype.forEach.call(document.querySelectorAll('.link-button'), function (e) {
//                 e.style = 'line-height: 44px';
//             });

//         }
//     } else if (ua.indexOf('safari') != -1 && this.innerWidth > 991) {
//         Array.prototype.forEach.call(document.querySelectorAll('.link-button'), function (e) {
//             e.style = 'line-height: 70px';
//         });
//     }


// });
// window.addEventListener('resize', function () {
//     var ua = navigator.userAgent.toLowerCase();

//     if (ua.indexOf('safari') != -1 && this.innerWidth < 991) {
//         if (ua.indexOf('chrome') > -1) {
//             Array.prototype.forEach.call(document.querySelectorAll('.link-button'), function (e) {
//                 e.style = 'line-height: 40px';
//             });

//         } else {
//             Array.prototype.forEach.call(document.querySelectorAll('.link-button'), function (e) {
//                 e.style = 'line-height: 44px';
//             });

//         }
//     } else if (ua.indexOf('safari') != -1 && this.innerWidth > 991) {
//         Array.prototype.forEach.call(document.querySelectorAll('.link-button'), function (e) {
//             e.style = 'line-height: 70px';
//         });
//     }


// });