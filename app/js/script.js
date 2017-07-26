$(function () {
    $(".scroll").effect("bounce", { times:2, distance: 10 }, 500);
});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 15) {
         $('.scroll').fadeOut();
     }
     else {
         $('.scroll').fadeIn();
     }
});