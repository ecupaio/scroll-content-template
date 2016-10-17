$(document).ready(function() {
    /*$(window).bind('mousewheel DOMMouseScroll', function(event) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            //scrollPrev();
        } else {
           //scrollNext();
        }
    });*/
    $(document).keydown(function(e) {
        if (e.keyCode == 38) {
            scrollPrev();
        }
        if (e.keyCode == 40) {
            scrollNext();
        }
    });

    function scrollNext() {
        $('body,html').animate({
            scrollTop: $(".content-section").next(".content-section").offset().top
        }, '1000', 'swing');
    }
    function scrollPrev() {
        $('body,html').animate({
            scrollTop: $(".content-section").prev(".content-section").offset().top
        }, '1000', 'swing');
    }
});