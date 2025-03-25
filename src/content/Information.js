import { Links, List } from "./Links.js";

export async function loadTable(url) {
    const records = await Links(url);
    document.getElementById('Individual').innerHTML = ''; //Limpia la lista de personaje elegido
    let tab = '';
    var count = 0;

//Links del next y previous-------------------------------------------------------------------------------------------------------------------
    const next = records.results.next;
    const prev = records.results.previous;
    
//Carga la tabla de los datos del personaje---------------------------------------------------------------------------------------------------
    records.results.results.forEach(result => {
        tab += `<tr><td title="Películas, naves y vehículos"><a href="#" onclick="loadCharacter('${result.url}')">${result.name}</a></td>
            <td>${result.height}</td>
            <td>${result.mass}</td>
            <td>${result.hair_color}</td>
            <td>${result.skin_color}</td>
            <td>${result.eye_color}</td>
            <td>${result.birth_year}</td>
            <td>${result.gender}</td>
            <td id="HW${count}" title="${result.homeworld}"></td></tr>`;
        count++;
    });
    document.getElementById('body').innerHTML = tab;

//Carga los nombres de los planetas de origen-------------------------------------------------------------------------------------------------
    var add = 0;
    do {
        const link = document.getElementById(`HW${add}`);
        const homeworld = await Links(link.title);
        link.innerHTML = homeworld.results.name;
        add++; 
    }while(add<count);

    return {next, prev};
}

//Llama la funcion para cargar los detalles de los personajes al darles click----------------------------------------------------------------
window.loadCharacter = async function(url) {
    await List(url);
};

