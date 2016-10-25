$(document).ready(function() {
    $(window).keydown(function(e) {
        if (e.keyCode == 38) {
            scrollPrev();
        }
        if (e.keyCode == 40) {
            scrollNext();
        }
    });
    $('body,html').on('mousewheel', function(event, delta) {
        if ($('body,html').is(':animated')) {
            return false;
        }
        if (delta < 0) {
            scrollNext();
        }
        if (delta > 0) {
            scrollPrev();
        }
    });

    function scrollNext() {
        $('body,html').animate({
            scrollTop: $(".content-section").next(".content-section").offset().top - 50
        }, '1000', 'swing');

    }

    function scrollPrev() {
        $('body,html').animate({
            scrollTop: $(".content-section").prev(".content-section").offset().top - 50
        }, '1000', 'swing');
    }
    var sectionData;

    function scrollDirect() {
        $('body,html').animate({
            scrollTop: $('.content-section[data-section="' + sectionData + '"]').offset().top - 50
        }, '1000', 'swing');
    }

    var sectionIndex;
    $('.content-section').each(function(index, obj) {
        sectionIndex = index + 1;
        $('.quick-jump').append('<div class="quick-jump-item" data-section="' + sectionIndex + '" ><i class="fa fa-circle"></i></div>');
    });

    $('.quick-jump-item').click(function() {
        sectionData = $(this).data('section');
        scrollDirect();
    });
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        $('.content-section').each(function() {
            var contentTop = $(this).offset().top
            sectionData = $(this).data('section');
            var contentHeader = $(this).find('.section-header').text();
            if (contentTop - scrollTop < 100) {
                $('.current-section').text(contentHeader);
                $('.site-title').hide();
                $('.current-section').show();
                //highlight quick jump item
                $('.quick-jump-item').removeClass('active');
                $('.quick-jump-item[data-section="' + sectionData + '"]').addClass('active');
            }
        });
    });

    $('.scroll-btn').click(function() {
        if ($(this).hasClass('up')) {
            scrollPrev();
        } else if ($(this).hasClass('down')) {
            scrollNext();
        }
    });

});