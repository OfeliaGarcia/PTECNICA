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
                <li><dt>${response.results.name}</dt></li>
                <dd>Películas:</dd>
                <div id="films"></div>
                <dd>Vehículos:</dd>
                <div id="vehicles"></div>
                <dd>Naves espaciales:</dd>
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