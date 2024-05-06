
	function loadJSON(){
		var htmlString = "";
		const response = 
			await fetch("https://anastasialaperuta.github.io/SD330//parking.json");
		const data = await response.json();
		
		htmlString += "<p> The parking lots are: " +
			data['parkingLots']['name'];
			
	}
