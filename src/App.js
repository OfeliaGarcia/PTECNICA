import {API} from './Fetch';
//import { Informacion } from './Informacion';
import './App.css';
import './Busqueda'

function App() { 
  //for (let cont = 1; cont <= 83; cont++) {
    const {data, loading} = API('https://swapi.dev/api/people/1/');
    console.log(data.name);
  //}
  return (
    <div className="App">
      <header className="Práctica 1"></header>
      <body>
        <nav class='BARRA'><section class='NAVEGADOR'>
          <h1>PRÁCTICA TÉCNICA</h1>
          <input type='text' placeholder='Buscador' onChange='Busqueda'></input>
        </section></nav>

        <ul>
          {loading && <li>Loading...</li>}
          <li><dt>{data.name}</dt></li>
          <dd>Altura: {data.height}</dd>
          <dd>Peso: {data.mass}</dd>
          <dd>Color de cabello: {data.hair_color}</dd>
          <dd>Color de piel: {data.skin_color}</dd>
          <dd>Color de ojos: {data.eye_color}</dd>
          <dd>Nacimiento: {data.birth_year}</dd>
          <dd>Género: {data.gender}</dd>
          <dd>Planeta de nacimiento: {data.homeworld}</dd>
        </ul>

      </body>
    </div>
  );
}

export default App;
