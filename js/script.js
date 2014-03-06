$('.cta').waypoint(function(direction) {
	$(this).addClass("fixed");
});

$('.unfixed').waypoint(function(direction) {
	$('.cta').removeClass("fixed");
});
