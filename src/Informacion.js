import {API} from './Fetch';

export function Informacion() {
    for (let step = 1; step <= 83; step++) {
        const {data, loading} = API("https://swapi.dev/api/people/1/");
        console.log(data.name);
        
        let RefTable = document.getElementById('InfoPersonajes');
        RefTable.insertRow();
        let cont = String.valueOf(step);

        let RefCellTable = RefTable.insertCell(0);
        RefCellTable.textContent = data.name;

        RefCellTable = RefTable.insertCell(1);
        RefCellTable.textContent = data.height;

        RefCellTable = RefTable.insertCell(2);
        RefCellTable.textContent = data.mass;

        RefCellTable = RefTable.insertCell(3);
        RefCellTable.textContent = data.hair_color;

        RefCellTable = RefTable.insertCell(4);
        RefCellTable.textContent = data.skin_color;

        RefCellTable = RefTable.insertCell(5);
        RefCellTable.textContent = data.eye_color;

        RefCellTable = RefTable.insertCell(6);
        RefCellTable.textContent = data.birth_year;

        RefCellTable = RefTable.insertCell(7);
        RefCellTable.textContent = data.gender;

        RefCellTable = RefTable.insertCell(8);
        RefCellTable.textContent = data.homeworld;
    }
}