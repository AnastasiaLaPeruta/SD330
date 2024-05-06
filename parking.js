async function loadJSON() {
    var htmlString = "<p>The parking lots are:</p>";
	const response = await fetch("https://anastasialaperuta.github.io/SD330//parking.json");
    const data = await response.json();

    data.parkingLots.forEach(lot => {
		htmlString += `<p>${lot.name}</p>`;
    });

    document.getElementById('parkingLotNames').innerHTML = htmlString;
    }
}
