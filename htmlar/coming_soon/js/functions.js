	
	setInterval(function() {
		var target = new Date("March 15 2021 13:30:00 GMT+0100"); //replace with YOUR DATE
		var now = new Date();
		var difference = Math.floor((target.getTime() - now.getTime()) / 1000);

		var seconds = fixIntegers(difference % 60);
		difference = Math.floor(difference / 60);

		var minutes = fixIntegers(difference % 60);
		difference = Math.floor(difference / 60);

		var hours = fixIntegers(difference % 24);
		difference = Math.floor(difference / 24);

		var days = difference;
	
		$(".countdown #seconds").html(seconds);
		$(".countdown #minutes").html(minutes);
		$(".countdown #hours").html(hours);
		$(".countdown #days").html(days);

		
	}, 1000); 
	function fixIntegers(integer) {
		if (integer < 0)
			integer = 0;
		if (integer < 10)
			return "0" + integer;
		return "" + integer;
	}