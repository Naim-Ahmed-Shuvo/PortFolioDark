$(".slider").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

// jquery
$(document).ready(function () {
  //sticky menu
  $(".waypoints_sticky").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  // mixitup
  var mix = mixitup(".mix_container");
});
