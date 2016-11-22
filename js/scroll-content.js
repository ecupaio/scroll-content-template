$(document).ready(function() {
    $('.content-section[data-section="1"]').addClass('active');
    var sectionData;
    var sectionIndex;
    var nextSection = $(".content-section.active").next(".content-section");
    var prevSection = $(".content-section.active").next(".content-section");
    $(window).keydown(function(e) {
        var nextSection = $()
        console.log()
        if (e.keyCode == 38) {
            scrollPrev();
        }
        if (e.keyCode == 40) {
            scrollNext();
        }
    });


    function scrollNext() {
        if ($(".content-section.active").next().is(".content-section")) {
            $('body,html').animate({
                scrollTop: $(".content-section.active").next(".content-section").offset().top - 77
            }, '1000', 'swing');
            console.log(nextSection);
        }


    }

    function scrollPrev() {
        if ($(".content-section.active").prev().is(".content-section")) {
            $('body,html').animate({
                scrollTop: $(".content-section.active").prev(".content-section").offset().top - 77
            }, '1000', 'swing');
        }
    }


    function scrollDirect() {
        $('body,html').animate({
            scrollTop: $('.content-section[data-section="' + sectionData + '"]').offset().top - 77
        }, '1000', 'swing');
    }

    



    $('.content-section').each(function(index, obj) {
        sectionIndex = index + 1;
        $('.quick-jump').append('<div class="quick-jump-item" data-section="' + sectionIndex + '" ><i class="fa fa-circle"></i></div>');
        $('.quick-jump-item[data-section="1"]').addClass('active');
        $(this).attr('data-section', sectionIndex);
    });
    //Sidebar Menu 
    $('.menu-toggle').click(function() {
        $('#sidebar-menu, .menu-toggle, .toggle-line, #wrapper, #footer').toggleClass('open');
    });
    var menuItem;
    $('.section-header').each(function(index, obj) {
        sectionIndex = index + 1;
        menuItem = $(this).text();
        $(".menu-items").append('<div class="menu-item" data-section="' + sectionIndex + '">'+menuItem+'</div>');
    });   
    $('.menu-item').click(function(){
        sectionData = $(this).data('section');
        $('#sidebar-menu, .menu-toggle, .toggle-line, #wrapper, #footer').toggleClass('open');
        scrollDirect();
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
                $('.current-section').addClass('active');
                //highlight quick jump item
                $('.quick-jump-item').removeClass('active');
                $('.quick-jump-item[data-section="' + sectionData + '"]').addClass('active');
                $('.content-section').removeClass('active');
                $(this).addClass('active');
            } else if (scrollTop < 100) {
                $('.current-section').removeClass('active');
            }
        });
        //Hide/Show Arrows 
        if ($(".content-section.active").next().is(".content-section")) {
            $('.scroll-btn.down').removeClass('hidden');
        } else {
            $('.scroll-btn.down').addClass('hidden');
        }
        if ($(".content-section.active").prev().is(".content-section")) {
             $('.scroll-btn.up').removeClass('hidden');
        } else {
            $('.scroll-btn.up').addClass('hidden');
        }  
    });

    $('.scroll-btn').click(function() {
        if ($(this).hasClass('up')) {
            scrollPrev();
        } else if ($(this).hasClass('down')) {
            scrollNext();
        }
    });

});