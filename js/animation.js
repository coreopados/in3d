var pageScroll = 0,
    stepPos = $('#steps .step-1').position().top,
    stepPos2 = $('#steps .step-2').position().top,
    stepPos3 = $('#steps .step-3').position().top,
    applicationPosTop = $("#application").position().top,
    step1H = $('#steps .step-1').height() / 2,
    step2H = $('#steps .step-2').height() / 2,
    step3H = $('#steps .step-3').height() / 2,
    posStep1 = step1H + stepPos,
    posStep2 = step2H + stepPos2,
    posStepOver = step3H + stepPos3,
    check = false,
    check2 = false,
    step1 = false,
    step2 = false,
    step3 = false,
    trigger = true,
    animationDisabler = false

$(window).on('resize', function () {
    var pageScroll = 0,
        stepPos = $('#steps .step-1').position().top,
        stepPos2 = $('#steps .step-2').position().top,
        stepPos3 = $('#steps .step-3').position().top,
        applicationPosTop = $("#application").position().top,
        step1H = $('#steps .step-1').height() / 2,
        step2H = $('#steps .step-2').height() / 2,
        step3H = $('#steps .step-3').height() / 2,
        posStep1 = step1H + stepPos,
        posStep2 = step2H + stepPos2,
        posStepOver = step3H + stepPos3,
        check = false,
        check2 = false,
        step1 = false,
        step2 = false,
        step3 = false,
        trigger = true,
        animationDisabler = false

    //возврат на первый шаг

    $('.girl-img-3').css('opacity', '0')
    $('#background-iphone').css('opacity', '1')

    if (innerWidth < 768) {
        $('.girl-img-3').css('opacity', '1')
    }
    moveTopStep1()

    //
    //
    //    pageScroll = pageYOffset
    //    console.log(pageScroll)
    //    if (innerWidth > 1200 && pageScroll <= posStep1) {
    //        $('#steps #iphone').css('transform', 'translateY(-550px) scale(1)')
    //        moveTopStep1()
    //    } else if (innerWidth > 1200 && pageScroll >= posStep1) {
    //        $('#steps #iphone').css('transform', 'translateY(0) scale(0.2)')
    //
    //    } else if (innerWidth > 1200 && pageScroll >= posStep2) {
    //        $('#steps #iphone').css('transform', ' translateY(730px) scale(1)')
    //    } else if (innerWidth > 991 && innerWidth < 1200 && pageScroll <= posStep1) {
    //        $('#steps #iphone').css('transform', 'translateY(-400px) scale(1)')
    //    } else if (innerWidth > 991 && innerWidth < 1200 && pageScroll >= posStep1) {
    //        $('#steps #iphone').css('transform', 'translateY(0px) scale(0.2)')
    //    } else if (innerWidth > 991 && innerWidth < 1200 && pageScroll >= posStep2) {
    //        $('#steps #iphone').css('transform', 'translateY(500px) scale(1)')
    //    } else if (innerWidth > 768 && innerWidth < 991 && pageScroll <= posStep1) {
    //        $('#steps #iphone').css('transform', 'translateY(-300px) scale(1)')
    //    } else if (innerWidth > 768 && innerWidth < 991 && pageScroll >= posStep1) {
    //        $('#steps #iphone').css('transform', 'translateY(-30px) scale(0.2)')
    //    } else if (innerWidth > 768 && innerWidth < 991 && pageScroll >= posStep2) {
    //        $('#steps #iphone').css('transform', 'translateY(340px) scale(1)')
    //    } else if (innerWidth < 768) {
    //        $('.girl-img-3').css('opacity', '1')
    //    }

})




$(document).on('scroll', function () {
    $('body').removeClass('no-anime')
    pageScroll = pageYOffset

    if (innerWidth > 1200 && animationDisabler === false && pageScroll < applicationPosTop && !$('body').hasClass('no-anime') && !$('body').hasClass('no-anime2')) {

        if (pageScroll > posStep1 && step1 === false) {
            //проходим "шаг 1" и опускаем телефон на "шаг 2" и уменьшаем его показываем анимацию
            moveBottomStep2();

        } else if (pageScroll < posStep1 && step1 === true && check === true) {
            //возвращение с "шаг 2" на "шаг 1" подымаем телефон на "шаг 1" и вуеличиваем его
            moveTopStep1();

        } else if (pageScroll >= posStep2 && step2 === false && trigger === false) {

            moveBottomStep3();

        } else if (pageScroll < posStep2 && step2 === true && check2 === true) {

            moveTopStep2();
        }

    } else if (innerWidth > 768 && innerWidth < 1200 && animationDisabler === false && pageScroll < applicationPosTop && !$('body').hasClass('no-anime') && !$('body').hasClass('no-anime2')) {
        console.log('ipad')
        if (pageScroll > (posStep1 - 200) && step1 === false) {
            //проходим "шаг 1" и опускаем телефон на "шаг 2" и уменьшаем его показываем анимацию
            moveBottomStep2();

        } else if (pageScroll < (posStep1 - 200) && step1 === true && check === true) {
            //возвращение с "шаг 2" на "шаг 1" подымаем телефон на "шаг 1" и вуеличиваем его
            moveTopStep1();

        } else if (pageScroll >= stepPos2 && step2 === false && trigger === false) {

            moveBottomStep3();

        } else if (pageScroll < stepPos2 && step2 === true && check2 === true) {
            moveTopStep2();

        }
    } else if (pageScroll >= applicationPosTop) {
        $('.girl-slide').removeClass('active')
    } else if (!$('body').hasClass('no-anime') && innerWidth <= 768 && pageScroll >= stepPos) {
        //        setTimeout(function () {
        $('.girl-slide').addClass('active')
        //        }, 1000)

    }
    // else if (pageScroll <= posStepOver) {
    //     moveTopStep2();
    //     hideAnimate2();
    // }
})



//"шаг 2"------------------------------------------------------

//контроль прохода "шаг 1"
function control() {
    if (pageScroll > posStep1) {
        check = true;
        step1 = true;

    } else {
        check = false;
        step1 = false;
    }

}


// показать анимацию "шаг 2"
function showAnimate() {

    // $('body').addClass('no-anime2')

    // $('html').css('overflow-y', 'hidden')


    // setTimeout(function () {
    $('.light-img').css('opacity', '1')
        .css('transition', '1s')
    // }, 700)

    //    setTimeout(function () {
    $('.girl-slide').addClass('active')
    //    }, 500)

    control();

    setTimeout(function () {
        // $('html').css('overflow-y', 'unset')
        // $('body').removeClass('no-anime2')
        trigger = false
        step2 = false
    }, 2100)
}



// скрыть анимацию "шаг 2"
function hideAnimate() {

    $('.light-img').css('opacity', '0')
        .css('transition', '0.1s')

    $('.girl-slide').removeClass('active')
    trigger = true
    control();

}

//проходим первый шаг телефон уменьшается и опускается на "шаг 2"
function moveBottomStep2() {

    if (innerWidth > 1200) {
        $('#iphone').css('transform', 'translateY( 0) scale(0.2)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '0')

    } else if (innerWidth > 991 && innerWidth < 1200) {
        $('#iphone').css('transform', 'translateY( 0) scale(0.2)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '0')
    } else if (innerWidth > 768 && innerWidth < 991) {
        $('#iphone').css('transform', 'translateY( -30px) scale(0.2)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '0')
    }

    showAnimate();

}

//возвращаемся из "шаг 2" на "шаг 1", телефон подымается на "шаг 1"
function moveTopStep1() {

    hideAnimate()

    $('.girl-slide').removeClass('active')

    $('.light-img').css('opacity', '0')
        .css('transition', '0.6s')
    if (innerWidth > 1200) {
        $('#iphone').css('transform', 'translateY( -550px) scale(1)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '-50%')
    } else if (innerWidth > 991 && innerWidth < 1200) {
        $('#iphone').css('transform', 'translateY( -400px) scale(1)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '-50%')
    } else if (innerWidth > 768 && innerWidth < 991) {
        $('#iphone').css('transform', 'translateY( -300px) scale(1)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '-50%')
    }

}

//"шаг 3"------------------------------------------------------

//контроль прохода "шаг 2"
function control2() {
    if (pageScroll > posStep2) {

        setTimeout(function () {
            check = false;
            check2 = true;
            step2 = true
        }, 800)

    } else {

        check = false;
        check2 = false;
        step2 = false

    }
}

function control2tablet() {
    if (pageScroll > stepPos2) {
        setTimeout(function () {
            check = false;
            check2 = true;
            step2 = true
        }, 800)

    } else {
        check = false;
        check2 = false;
        step2 = false
    }
}
//==========================

//==========================
// показать анимацию "шаг 3"
function showAnimate2() {
    // $('html').css('overflow', 'hidden')

    setTimeout(function () {
        $('.girl-img-3').css('opacity', '1')
            .css('transition', '1s')

    }, 300)
    $("#background-iphone").css("opacity", "0")
        .css('transition', '1s')

    // control2();
    // }, 700)

    control2();
}

function showAnimate2tablet() {
    // $('html').css('overflow', 'hidden')

    // setTimeout(function () {
    $("#background-iphone").css("opacity", "0")
        .css('transition', '1s')

    $('.girl-img-3').css('opacity', '1')
        .css('transition', '1s')

    // }, 1000)


    // control2();


    control2tablet();
}
//===========================



//=======================
// скрыть анимацию "шаг 3"
function hideAnimate2() {

    $("#background-iphone").css("opacity", "1")
    $('.girl-img-3').css('opacity', '0')
        .css("transition", "unset");

    control2();
}

// скрыть анимацию "шаг 3"
function hideAnimate2tablet() {

    $("#background-iphone").css("opacity", "1")
    $('.girl-img-3').css('opacity', '0')
        .css("transition", "unset");

    control2tablet();
}
//==========================




//===========================
//проходим "шаг 2" переключаемся на "шаг 3"
function moveBottomStep3() {

    hideAnimate();


    $('.girl-slide').removeClass('active');

    $('.light-img').css('opacity', '0')
        .css('transition', '.6s');
    if (innerWidth > 1200) {
        $('#iphone').css('transform', 'translateY( 730px) scale(1)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '-50%')
        showAnimate2();
    } else if (innerWidth < 1200 && innerWidth > 991) {
        $('#iphone').css('transform', 'translateY( 500px) scale(1)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '-50%')
        showAnimate2tablet();
    } else if (innerWidth < 991 && innerWidth > 768) {
        $('#iphone').css('transform', 'translateY( 340px) scale(1)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '-50%')
        showAnimate2tablet();
    }



}
//===========================


//===========================
//возвращаемся из "шаг 3" в "шаг 2"
function moveTopStep2() {

    if (innerWidth > 1200) {
        hideAnimate2();
        $('#iphone').css('transform', 'translate( 0) scale(0.2)')
            .css('transition', '.6s')
        //            .css('margin-left', '0')
        //            .css('right', '0')
    } else if (innerWidth > 991 && innerWidth < 1200) {
        hideAnimate2tablet();
        $('#iphone').css('transform', 'translate( 0) scale(0.2)')
            .css('transition', '0.6s')
        //            .css('margin-left', '0')
        //            .css('right', '0')
    } else if (innerWidth > 768 && innerWidth < 991) {
        hideAnimate2tablet();
        $('#iphone').css('transform', 'translateY( -30px) scale(0.2)')
            .css('transition', '.6s')
        //            .css('margin-left', '0')
        //            .css('right', '0')
    }

    showAnimate();

}
//===========================

$('.arrow-down').on('click', function () {

    if (innerWidth < 768) {

        $('.girl-slide').removeClass('active')
        setTimeout(function () {
            $('.girl-slide').addClass('active')
        }, 1500)
    }

});
