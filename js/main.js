$(function () {
  //<script src="./js/jquery-3.6.0.min.js"></script>
  let vh = $(window).height();
  $(window).scroll(function () {
    var top = $(this).scrollTop();
    var left = $(this).scrollLeft();
    console.log(top, left);

    if (top >= 500) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }

    if (top >= $("#contact").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(4) a").addClass("active");
    } else if (top >= $("#about").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(3) a").addClass("active");
    } else if (top >= $("#portfolio").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(2) a").addClass("active");
    } else if (top >= $("#services").offset().top - 130) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(1) a").addClass("active");
    } else if (top >= $("#home").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(0) a").addClass("active");
    } else {
      $(".internal a").removeClass("active");
    }

    $("body").css({
      "background-position-y": "-" + top + "px",
    });

    if (top >= $("#home").offset().top) {
      $("body").addClass("sticky-nav");
    } else {
      $("body").removeClass("sticky-nav");
    }
  });
});
