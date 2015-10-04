// Scroll easing

$('a[href^="#"]').on('click', function(event) {
	var target = $($(this).attr('href'));
	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 600);
	}
});

// Typed

$(function(){
	$(".typed").typed({
		strings: ["Data scientist.", "Founder.", "Fiction writer.", "Poker player.", "Drummer."],
		typeSpeed: 50,
		startDelay: 1000,
		backSpeed: 30,
		backDelay: 3000,
		loop: true,
		loopCount: false,
		showCursor: true,
		cursorChar: "|"
	});
});