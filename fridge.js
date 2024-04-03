	function doStartClock() {
		setInterval(doClockTick,1000);
	}

	function doClockTick() {
		var currentDate = new Date();
		var hours = currentDate.getHours();
		var mins = currentDate.getMinutes();
		var secs = currentDate.getSeconds();
		var timeString = hours+":"+mins+":"+secs;
		
		var outputElement = document.getElementById("timePar");
		outputElement.textContent = timeString;
	}
	
	function on(){
		var fridge = document.getElementById("fridge");
		var temp = document.getElementById("temp");
		tv.src = "https://aptokash.github.io/SD330-2/06-tv.jpg";
		browser.src = "https://aptokash.github.io/SD330-2/06-web.jpg";
		temp.style.color="purple";
		fridge.style.backgroundColor="white";
		asleep.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/5-fridge-interior-allan-swart.jpg";
	}
	
	function off(){
		var fridge = document.getElementById("fridge");
		var asleep = document.getElementById("asleep");
		var temp = document.getElementById("temp");
		var tv = document.getElementById("tv");
		var browser = document.getElementById("browser");
		tv.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2048px-Solid_black.svg.png";
		browser.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2048px-Solid_black.svg.png";
		fridge.style.backgroundColor="black";
		temp.style.color="black";
		asleep.src = "https://cdn3.iconfinder.com/data/icons/smileys-people-smiley-essential/48/v-71-512.png";
	}