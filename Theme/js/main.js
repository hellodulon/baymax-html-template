// Compiling SCSS
//======================================================//
// (async () => {
//     const compiled = (await Promise.all(
//       [...document.querySelectorAll("link")]
//         .filter(l => l.rel === 'stylesheet/scss')
//         .map(async l => {
//           url = l.href;
//           const code = await (await fetch(url)).text();
//           const basename = url.substring(url.lastIndexOf("/")+1);
//           Sass.writeFile(basename, code);
//           return Sass.compile(`@import "${basename}"; `);
//         })
//     )).join("\n");
//     document.head.innerHTML += `<style>${compiled}</style>`;
//     console.log(compiled);
//   })();
// ===================================================//

  var window_width = $(window).width(),
      window_height = window.innerHeight,
      header_height = $(".default-header").height(),
      header_height_static = $(".site-header.static").outerHeight(),
      fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height);
    $(".fitscreen").css("height", fitscreen);

    var nav_offset_top = $(".nav-section").height() + 50;

  (function($) {
    "use strict";

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".navbar").length) {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".navbar").addClass("navbar-fixed");
        } else {
          $(".navbar").removeClass("navbar-fixed");
        }
      });
    }
  }
  navbarFixed();

  /*=================================
    Javascript for banner area carousel
    ==================================*/
  $(".banner-area").owlCarousel({
    items: 1,
    autoplay: 2500,
    autoplayTimeout: 5000,
    loop: true,
    nav: false,
    dots: false
  });

  $(".active-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    nav: true,
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    responsiveClass: true
  });

  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    autoplay: false,
    smartSpeed: 1500,
    dots: true,
    responsiveClass: true
  })

  /*----------------------------------------------------*/
  /*  MailChimp Slider
    /*----------------------------------------------------*/
  function mailChimp() {
    $("#mc_embed_signup")
      .find("form")
      .ajaxChimp();
  }
  mailChimp();

  $("select").niceSelect();

})(jQuery);