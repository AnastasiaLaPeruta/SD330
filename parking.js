async function loadJSON() {
    var htmlString = "<p>The parking lots are:</p><ul>";
    const response = await fetch("https://anastasialaperuta.github.io/SD330//parking.json");
    const data = await response.json();

    data.parkingLots.forEach((lot, index) => {
            htmlString += `<li><a href="lotDetails.html?lotIndex=${index}">${lot.name}</a></li>`;
    });

    htmlString += "</ul>";
    document.getElementById('parkingLotNames').innerHTML = htmlString;
}
