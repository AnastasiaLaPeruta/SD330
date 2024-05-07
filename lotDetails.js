async function getDetails() {
	
    const urlParams = new URLSearchParams(window.location.search);
    const lotIndex = urlParams.get('lotIndex');

    const response = await fetch("https://anastasialaperuta.github.io/SD330//parking.json");
    const data = await response.json();
    const lot = data.parkingLots[lotIndex];

    let detailsHtml = `<h2>Details for ${lot.name}</h2><ul>`;
	detailsHtml += '<img style="width: 200px; height: 200px; float:left;" src= "{lot['mapFilename']}" id="map" />';
    lot.spots.forEach(spot => {
        detailsHtml += ` <li>Type: ${spot.type}, Handicap: ${spot.isHandicap}, Available: ${spot.isAvailable}, Time Reserved: ${spot.reservedTime}, Time Filled: ${spot.filledTime}</li>`;
    });
    detailsHtml += "</ul>";

    document.getElementById('details').innerHTML = detailsHtml;
}
