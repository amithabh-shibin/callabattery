jQuery(function($) {
    'use strict';


    // owl carousel Animation
    $(document).ready(function(){
        $("#testimonial-slider").owlCarousel({
            items:3,
            itemsDesktop:[1024,2],
            itemsDesktopSmall:[980,1],
            itemsTablet:[768,1],
            pagination:true,
            autoPlay:true
        });
    });

    // smooth scroll
    $(document).ready(function() {
    
        $('body').smoothScroll({
          delegateSelector: 'ul.navbar-nav a'
        });
      });


    
    $('.navbar-collapse ul li a').on('click', function() {
        $('#navbar-mob').removeClass('in');
    });

    // auto select navigation item while scrolling
     $(window).scroll(function() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a').each(function() {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        })


        
    });

 
    });