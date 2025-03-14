export async function Links(url){
    const data = await fetch(url);
    const results = await data.json();
    
    return {results};
}

export async function List(url){
    const response = await Links(url);
    document.getElementById('Individual').innerHTML = '';

    let tab = '';

    tab = `<ul>
                <b><dt>${response.results.name}</dt></b>
                <b><dd>Películas:</dd></b>
                <div id="films"></div>
                <b><dd>Vehículos:</dd></b>
                <div id="vehicles"></div>
                <b><dd>Naves espaciales:</dd></b>
                <div id="Starships"></div>
               </ul>`;
    document.getElementById('Individual').innerHTML = tab;
    document.getElementById('films').innerHTML = '';
    document.getElementById('vehicles').innerHTML = '';
    document.getElementById('Starships').innerHTML = '';

    let tabFilms = '';
    let tabVehicles = '';
    let tabSShips = '';

    response.results.films.forEach(async function(film){
        const FilmName = await Links(film);
        tabFilms += `<dd>${FilmName.results.title}</dd>`;
        document.getElementById('films').innerHTML = tabFilms;
    })

    response.results.vehicles.forEach(async function(vehicle){
        const VehicleName = await Links(vehicle);
        tabVehicles += `<dd>${VehicleName.results.name}</dd>`;
        document.getElementById('vehicles').innerHTML = tabVehicles;
    })

    response.results.starships.forEach(async function(sships){
        const SShipsName = await Links(sships);
        tabSShips += `<dd>${SShipsName.results.name}</dd>`;
        document.getElementById('Starships').innerHTML = tabSShips;
    })
}