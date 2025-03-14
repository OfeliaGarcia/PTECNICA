import {Links, List} from "./Links.js"

export async function loadTable(url) {
//Datos---------------------------------------------------------------------
    const records = await Links(url);

    const next = records.results.next;
    const prev = records.results.previous;

    let tab = '';
    var count = 0;
    
//Llenado de la tabla-------------------------------------------------------
    records.results.results.forEach(async function(result){
        const homeworld = await Links(`${result.homeworld}`)

        tab += `<tr><td title="Películas, naves y vehículos" nohref style="cursor:pointer;" onClick="${List(result.url)}">${result.name}</td>
            <td>${result.height}</td>
            <td>${result.mass}</td>
            <td>${result.hair_color}</td>
            <td>${result.skin_color}</td>
            <td>${result.eye_color}</td>
            <td>${result.birth_year}</td>
            <td>${result.gender}</td>
            <td>${homeworld.results.name}</td></tr>`;

        document.getElementById('body').innerHTML = tab;
    })
}