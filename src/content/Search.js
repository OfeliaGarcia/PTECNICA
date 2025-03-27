import { loadTable } from "./Information.js";
import { HomeWorld, Links, List } from "./Links.js";

export async function Browser(character) {//Efectua la funcion de busqueda mostrando en la tabla los resultados
    let people = [];
  
//Carga los resultados de todas las paginas de la API----------------------------------------------------------------------------------------
    for(let i=1; i<=9; i++){
        const response = await Links(`https://swapi.dev/api/people?page=${i}`);
        people = people.concat(response.results.results);
    }

//Pasa la busqueda y los nombres a minusculas para comparación, muestra los resultados-------------------------------------------------------
    const data = people.filter(({name}) => character && name.toLowerCase().includes(character.toLowerCase()));
    const obtain = data && data.length > 0;

//Carga los resultados en la tabla-----------------------------------------------------------------------------------------------------------
    if(obtain){
        let tab = '';
        var count = 0;

        data.map(result => {
            tab += `<tr title="Creado: ${result.created}">
                <td title="Películas, naves y vehículos"><a href="#" onclick="loadCharacter('${result.url}')">${result.name}</a></td>
                <td>${result.height}</td>
                <td>${result.mass}</td>
                <td>${result.hair_color}</td>
                <td>${result.skin_color}</td>
                <td>${result.eye_color}</td>
                <td>${result.birth_year}</td>
                <td>${result.gender}</td>
                <td id="HW${count}" title="${result.homeworld}"></td></tr>`;
            count++;
        })
        document.getElementById('body').innerHTML = tab;

        await HomeWorld(count);//Carga el nombre del planeta de origen
    } else {
        await loadTable("https://swapi.dev/api/people/");
    }
}

//Llama la funcion para cargar los detalles de los personajes al darles click----------------------------------------------------------------
window.loadCharacter = async function(url) {
    await List(url);
};