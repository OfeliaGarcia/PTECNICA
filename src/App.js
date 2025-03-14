import './App.css';
import './Busqueda';
import { loadTable } from './Informacion';

function App() { 
  setTimeout(function(){loadTable("https://swapi.dev/api/people/")}, 60);
  return (
    <div className="App">
        <nav className='NAV'><section className='Browser'>
          <h1>PRÁCTICA TÉCNICA</h1>
          <input type='text' placeholder='Buscador'></input>
        </section></nav>

        <button disabled className='Prev' onClick='pagP();'>Anterior</button>
        <button className='Next' onClick='pagN();'>Siguiente</button>

        <div id="Individual"></div>
        
        <table className="table">
          <thead><tr>
            <th>Nombre</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Color de Cabello</th>
            <th>Color de piel</th>
            <th>Color de ojos</th>
            <th>Fecha de nacimiento</th>
            <th>Género</th>
            <th>Planeta de nacimiento</th>
          </tr></thead>
          <tbody id="body"></tbody>
        </table>
    </div>
  );
}

export default App;
