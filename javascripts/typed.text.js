$(function(){
	$(".typed").typed({
		strings: [
			"I do a bunch of data science work at Envoy.", 
			"On good days, I write miniaturist short fiction.",
			"When it comes to food, I'm a committed hedonist.",
			"These days, I play way less poker than I'd like.", 
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