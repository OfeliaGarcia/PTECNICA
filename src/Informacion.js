export async function loadTable() {
//Datos---------------------------------------------------------------------
    const data = await fetch(`https://swapi.dev/api/people/`);
    const records = await data.json();

    let tab = '';
    
//Llenado de la tabla-------------------------------------------------------
    records.results.forEach(async function(result){
        const homeworld = await fetch(`${result.homeworld}`);
        const Nhomeworld = await homeworld.json();

        tab += `<tr><td>${result.name}</td>
        <td>${result.height}</td>
        <td>${result.mass}</td>
        <td>${result.hair_color}</td>
        <td>${result.skin_color}</td>
        <td>${result.eye_color}</td>
        <td>${result.birth_year}</td>
        <td>${result.gender}</td>
        <td>${Nhomeworld.name}</td></tr>`;

        document.getElementById('body').innerHTML = tab;
    })
}