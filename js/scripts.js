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
		cssEase: 'linear',
		arrows: true,

		// ეს 2 სვამს ისრების მაგივრად font-awesome-ის აიქონებს. ასეთ დროს აუცილებელია, რომ შეიცვალოს CSS-იც: 1. დაიმალოს არსებული ისრები (ამაზე სულ ბოლოს დავწერ) 2. დაედოს არსებულ ისარს ზომა და ფერი .slick-arrow i { color: white; font-size: 20px}
  	// prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	  // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"


		// ეს 2 ღილაკი ადებს ფოტოს ისრების მაგივრად
		prevArrow:"<button type='button' class='slick-prev pull-left'><img src='img/arrow-left.svg'></button>",
	  nextArrow:"<button type='button' class='slick-next pull-right'><img src='img/arrow-right.svg'></button>"

		// CSS-ები:
		//.slick-next:before  და  .slick-prev:before უნდა იყოს content: none; - ეს გააკეთებს იმას, რომ არსებული ისარი დაიმალება
		// ფოტოს სტილები: height: 100% არის ძველი ისრის სიმაღლე



	  });
