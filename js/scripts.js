	$(".story1").hover(function () {
		$(this).addClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
		$(this).css('cursor','pointer');
		setTimeout(function(){ $(".story1").css('cursor','default'); },300);
	});
	$(".story2").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
		$(this).css('cursor','pointer');
		setTimeout(function(){ $(".story2").css('cursor','default'); },300);
	});
	$(".story3").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
		$(this).css('cursor','pointer');
		setTimeout(function(){ $(".story3").css('cursor','default'); },300);
	  });
	$(".story4").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
		$(this).css('cursor','pointer');
		setTimeout(function(){ $(".story4").css('cursor','default'); },300);
	  });
	$(".story5").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story6").removeClass("active");
		$(".story7").removeClass("active");
		$(this).css('cursor','pointer');
		setTimeout(function(){ $(".story5").css('cursor','default'); },300);
	  });
	$(".story6").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story7").removeClass("active");
		$(this).css('cursor','pointer');
		setTimeout(function(){ $(".story6").css('cursor','default'); },300);
	  });
	$(".story7").hover(function () {
		$(this).addClass("active");
		$(".story1").removeClass("active");
		$(".story2").removeClass("active");
		$(".story3").removeClass("active");
		$(".story4").removeClass("active");
		$(".story5").removeClass("active");
		$(".story6").removeClass("active");
		$(this).css('cursor','pointer');
		setTimeout(function(){ $(".story7").css('cursor','default'); },300);
	  });   
	  $(".logo").hover(function () {
		$(".container").toggleClass("dark");
		$(".container-story").toggleClass("dark");
		});

	  //slider

	  $('.slider1').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	  });