$(function(){
	$(".typed").typed({
		strings: [
			"I work as a data scientist at Envoy.", 
			"On good days, I write miniaturist short fiction.",
			"I'm still not sold on San Francisco.",
			"These days, I play a lot less poker than I'd like.", 
			"It's fairly obvious that my spirit animal is clam."
		],
		typeSpeed: 20,
		backSpeed: 1,
		backDelay: 2000,
		loop: true,
		loopCount: false,
		showCursor: true,
		cursorChar: "|"
	});
});