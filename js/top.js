// DOCUMENT READY
$(document).ready(function() {
    "use strict";

    //Splitting Chars
    Splitting();

    let forms = document.querySelectorAll('form#fmail');

    for (var i = 0; i < forms.length; i++) {
        addPlaceholders(forms[i]);
    }

    
});

function addPlaceholders(form) {
    let emailInput = form.querySelector('[name="en1262055277"]');
    if (emailInput) {
        emailInput.placeholder = "sample@example.com";
    }

    let nameInput = form.querySelector('[name="en1240790859"]');
    if (nameInput) {
        nameInput.placeholder = "山田　太郎";
    }

    let addressInput = form.querySelector('[name="en1240791078"]');
    if (addressInput) {
        addressInput.placeholder = "福岡県久留米市野中町88-4";
    }

    let phoneInput = form.querySelector('[name="en1244884266"]');
    if (phoneInput) {
        phoneInput.placeholder = "09012345678";
    }
}

// WINDOW LOAD
$(window).bind('load', function() {
    "use strict";
    // CASE SLIDER
    if( $('.case_slider-main').length > 0 ) {
        $('.case_slider-main').slick({
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            asNavFor: '.case_slider-thumb, .case_slider-cmt',
        });
    }
    if( $('.case_slider-thumb').length > 0 ) {
        $('.case_slider-thumb').slick({
            speed: 600,
            slidesToShow: 9,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            focusOnSelect: true,
            asNavFor: '.case_slider-main, .case_slider-cmt',
        });
    }
    if( $('.case_slider-cmt').length > 0 ) {
        $('.case_slider-cmt').slick({
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            arrows: false,
            asNavFor: '.case_slider-main, .case_slider-thumb',
        });
    }

    if( $('.case_carousel-wrap').length > 0 ) {
        $('.case_carousel-wrap').slick({
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            nextArrow: '.case_carousel-arrow.arrow-next',
            prevArrow: '.case_carousel-arrow.arrow-prev',
        });
    }
    /*============== END - CASE SLIDER ================*/


    // CONTENT LOAD ANIMATION
    AOS.init({
        duration: 600,
        disable: 'mobile',
        once: true
    });
    /*============== END - CONTENT LOAD ANIMATION ================*/
});

$(window).bind('load scroll', function() {
    function scrollSection(id) {
        var offset = $(id).offset(),
            scrollTop = $(this).scrollTop(),
            isActive = scrollTop >= (offset.top - 5) && scrollTop < (offset.top + $(id).outerHeight() - 5);
    
        $('a[href="'+ id +'"]').toggleClass('active', isActive);
    }
    
    ['#sec-06', '#sec-12', '#sec-15', '#sec-17', '#sec-18', '#sec-19'].forEach(scrollSection);    
});