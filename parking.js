async function loadJSON() {
    var htmlString = "<p>The parking lots are:</p>";
    const response = await fetch("https://anastasialaperuta.github.io/SD330//parking.json");
    const data = await response.json();

    data.parkingLots.forEach((lot, index) => {
            htmlString += `<a href="lotDetails.html?lotIndex=${index}">${lot.name}</a><br>`;
    });

    document.getElementById('parkingLotNames').innerHTML = htmlString;
}
