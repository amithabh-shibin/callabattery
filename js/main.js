document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const faqAnswer = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
          faqAnswer.style.display = 'block';
      } else {
          faqAnswer.style.display = 'none';
      }
  });
});
  // Drop Down Menu
document.addEventListener('DOMContentLoaded', function() {
  // Handle main dropdown menu toggle for mobile
  const mainDropdowns = document.querySelectorAll('.dropdown-toggle');
  mainDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      e.preventDefault();
      // Hide all dropdown menus except the clicked one
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== this.nextElementSibling) {
          menu.style.display = 'none';
        }
      });
      // Reset all toggle icons to '+' except the clicked one
      document.querySelectorAll('.toggle-icon').forEach(icon => {
        if (icon !== this.querySelector('.toggle-icon')) {
          icon.textContent = '+';
        }
      });
      // Toggle the clicked dropdown menu
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });
  });
  // Handle submenu toggle
  const submenuToggles = document.querySelectorAll('.submenu-toggle .toggle-icon');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = this.parentElement.nextElementSibling;
      const isSubmenuVisible = submenu.style.display === 'block';
      // Hide all other submenus
      document.querySelectorAll('.dropdown-submenu > ul').forEach(submenu => {
        submenu.style.display = 'none';
      });
      // Reset all toggle icons to '+'
      document.querySelectorAll('.toggle-icon').forEach(icon => {
        icon.textContent = '+';
      });
      // Toggle the clicked submenu only if it was not already visible
      if (!isSubmenuVisible) {
        submenu.style.display = 'block';
        this.textContent = '-';
      } else {
        submenu.style.display = 'none';
        this.textContent = '+';
      }
    });
  });
  // Hide all dropdowns and submenus when clicking outside
  document.addEventListener('click', function(e) {
    const isClickInsideDropdown = e.target.closest('.dropdown') || e.target.closest('.dropdown-submenu');
    if (!isClickInsideDropdown) {
      // Hide all dropdown menus
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      // Reset all toggle icons to '+'
      document.querySelectorAll('.toggle-icon').forEach(icon => {
        icon.textContent = '+';
      });
    }
  });
  // Prevent dropdown and submenu from closing when clicking inside
  document.querySelectorAll('.dropdown, .dropdown-submenu').forEach(element => {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });











  (function ($) {
    "use strict";
  
    /* Preloader */
    $(window).on("load", function () {
      var preloaderFadeOutTime = 1000;
      function hidePreloader() {
        var preloader = $(".spinner-wrapper");
        setTimeout(function () {
          preloader.fadeOut(preloaderFadeOutTime);
        }, 1000);
      }
      hidePreloader();
    });
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });
  
    // Initiate the wowjs animation library
    new WOW().init();
  
    // Header scroll class
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
      } else {
        $("#header").removeClass("header-scrolled");
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    }
  
    // Smooth scroll for the navigation and links with .scrollto classes
    $(".main-nav a, .mobile-nav a, .scrollto").on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($("#header").length) {
            top_space = $("#header").outerHeight();
  
            if (!$("#header").hasClass("header-scrolled")) {
              top_space = top_space - 40;
            }
          }
  
          $("html, body").animate(
            {
              scrollTop: target.offset().top - top_space,
            },
            1500,
            "easeInOutExpo"
          );
  
          if ($(this).parents(".main-nav, .mobile-nav").length) {
            $(".main-nav .active, .mobile-nav .active").removeClass("active");
            $(this).closest("li").addClass("active");
          }
  
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
            $(".mobile-nav-overly").fadeOut();
          }
          return false;
        }
      }
    });
  
    // Navigation active state on scroll
    var nav_sections = $("section");
    var main_nav = $(".main-nav, .mobile-nav");
    var main_nav_height = $("#header").outerHeight();
  
    $(window).on("scroll", function () {
      var cur_pos = $(this).scrollTop();
  
      nav_sections.each(function () {
        var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
          main_nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .parent("li")
            .addClass("active");
        }
      });
    });
  
    // jQuery counterUp (used in Whu Us section)
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000,
    });
  
    /**
     *  Slide Custom
     */
    if ($(".slide-item").length) {
      var $sync1 = $(".slide-image__front .swiper-container"),
        $sync2 = $(".slide-image__black .swiper-container");
  
      var galleryTop = new Swiper($sync1, {
        spaceBetween: 10,
      });
      var galleryThumbs = new Swiper($sync2, {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });
  
      galleryTop.params.control = galleryThumbs;
      galleryThumbs.params.control = galleryTop;
    }
  
    /**
     * Swiper
     */
    $(".swiper__module").each(function () {
      var self = $(this),
        wrapper = $(".swiper-wrapper", self),
        optData = eval("(" + self.attr("data-options") + ")"),
        optDefault = {
          paginationClickable: true,
          pagination: self.find(".swiper-pagination-custom"),
          nextButton: self.find(".swiper-button-next-custom"),
          prevButton: self.find(".swiper-button-prev-custom"),
          spaceBetween: 30,
        },
        options = $.extend(optDefault, optData);
      wrapper.children().wrap('<div class="swiper-slide"></div>');
      var swiper = new Swiper(self, options);
  
      function thumbnails(selector) {
        if (selector.length > 0) {
          var wrapperThumbs = selector.children(".swiper-wrapper"),
            optDataThumbs = eval("(" + selector.attr("data-options") + ")"),
            optDefaultThumbs = {
              spaceBetween: 10,
              centeredSlides: true,
              slidesPerView: 3,
              touchRatio: 0.3,
              slideToClickedSlide: true,
              pagination: selector.find(".swiper-pagination-custom"),
              nextButton: selector.find(".swiper-button-next-custom"),
              prevButton: selector.find(".swiper-button-prev-custom"),
            },
            optionsThumbs = $.extend(optDefaultThumbs, optDataThumbs);
          wrapperThumbs.children().wrap('<div class="swiper-slide"></div>');
          var swiperThumbs = new Swiper(selector, optionsThumbs);
          swiper.params.control = swiperThumbs;
          swiperThumbs.params.control = swiper;
        }
      }
      thumbnails(self.next(".swiper-thumbnails__module"));
    });
  
    // Porfolio isotope and filter
    $(window).on("load", function () {
      var portfolioIsotope = $(".portfolio-container").isotope({
        itemSelector: ".portfolio-item",
      });
      $("#portfolio-flters li").on("click", function () {
        $("#portfolio-flters li").removeClass("filter-active");
        $(this).addClass("filter-active");
  
        portfolioIsotope.isotope({ filter: $(this).data("filter") });
      });
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1,
    });
  
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: { items: 1 },
        520: { items: 2 },
        575: { items: 2 },
        768: { items: 4 },
        900: { items: 6 },
      },
    });
  })(jQuery);

});

// removeHash.js
window.addEventListener('load', function() {
  if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
  }
});
 