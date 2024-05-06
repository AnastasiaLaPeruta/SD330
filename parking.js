
	async function loadJSON(){
		var htmlString = "";
		const response = 
			await fetch("https://anastasialaperuta.github.io/SD330//parking.json");
		const data = await response.json();
		
		data.parkingLots.forEach(lot => {
            htmlString += `<p>${lot.name}</p>`;
        });
		
		document.body.innerHTML += htmlString;
		
		htmlString += "<p> The parking lots are: " +
			data['parkingLots']['name'];
			
	}
