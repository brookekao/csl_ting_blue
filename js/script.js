$('.cta').waypoint(function(direction) {

  console.log("fixed");

  $(this).addClass("fixed");

});

$('.unfixed').waypoint(function(direction) {

  console.log("unfixed");

  $('.cta').removeClass("fixed");

});

