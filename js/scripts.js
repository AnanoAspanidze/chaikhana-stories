	$(".story1").hover(function () {
		$(this).addClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
	});
	$(".story2").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
	});
	$(".story3").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
	  });
	$(".story4").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
	  });
	$(".story5").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
	  });
	$(".story6").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story7").removeClass("active");
	  });
	$(".story7").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
	  });   

	  //slider

	  $('.slider1').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	  });