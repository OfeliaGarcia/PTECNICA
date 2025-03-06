import './App.css';
import './Busqueda';
import { loadTable } from './Informacion';

function App() { 
  setTimeout(function(){loadTable()}, 50);
  return (
    <div className="App">
      <header className="Práctica 1"></header>
        <nav className='BARRA'><section className='NAVEGADOR'>
          <h1>PRÁCTICA TÉCNICA</h1>
          <input type='text' placeholder='Buscador'></input>
        </section></nav>

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
