export async function Links(url){//Carga los links mandados
    const data = await fetch(url);
    const results = await data.json();
    
    return {results};
}

export async function HomeWorld(count) {//Carga el nombre del planeta de origen
    var add = 0;
    do {
        const link = document.getElementById(`HW${add}`);
        const homeworld = await Links(link.title);
        link.innerHTML = homeworld.results.name;
        add++; 
    } while(add<count);
}

export async function List(url){//Muestra la tabla con los datos de las peliculas, vehículos y naves espaciales del personaje seleccionado
    const response = await Links(url);
    document.getElementById('Individual').innerHTML = '';

    let tab = '';

//Carga la lista de los datos---------------------------------------------------------------------------------------------------------------
    tab = `<ul>
                <b><dd>${response.results.name}</dd></b>
                <b><dd>Películas:</dd></b>
                <div id="films"></div>
                <b><dd>Vehículos:</dd></b>
                <div id="vehicles"></div>
                <b><dd>Naves espaciales:</dd></b>
                <div id="Starships"></div>
               </ul>`;
    document.getElementById('Individual').innerHTML = tab;

    let tabFilms = '';
    let tabVehicles = '';
    let tabSShips = '';

    response.results.films.forEach(async function(film){//Obtiene los nombres de las peliculas
        const FilmName = await Links(film);
        tabFilms += `<dd>${FilmName.results.title}</dd>`;
        document.getElementById('films').innerHTML = tabFilms;
    })

    response.results.vehicles.forEach(async function(vehicle){//Obtiene los nombres de los vehículos
        const VehicleName = await Links(vehicle);
        tabVehicles += `<dd>${VehicleName.results.name}</dd>`;
        document.getElementById('vehicles').innerHTML = tabVehicles;
    })

    response.results.starships.forEach(async function(sships){//Obtiene los nombres de las naves espaciales
        const SShipsName = await Links(sships);
        tabSShips += `<dd>${SShipsName.results.name}</dd>`;
        document.getElementById('Starships').innerHTML = tabSShips;
    })
}