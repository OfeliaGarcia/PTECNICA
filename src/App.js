import './App.css';
import { Browser } from './content/Search';
import { loadTable } from './content/Information';
import { useState, useEffect } from 'react';

function App() { 
  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await loadTable(url); //Llama a la funcion para cargar los datos en la tabla
      setNextUrl(data.next);
      setPrevUrl(data.prev);
    }
    fetchData();
  }, [url]); //Ejecución cuando la URL cambia

  async function handleOnChange(event){
    await Browser(event.currentTarget.value); //Actua cuando cambia el input del buscador
  }

  return (
    <div className="App">
        <nav className='NAV'>
          <section className='Browser'>
            <h1>PRÁCTICA TÉCNICA</h1>
            <input id='Search' type='search' placeholder='Buscador' onChange={handleOnChange}></input>
          </section>
        </nav>

        <div id="Individual"></div>

        <button className='Prev' id='Prev' disabled={!prevUrl} onClick={() => setUrl(prevUrl)}>Anterior</button>
        <button className='Next' id='Next' disabled={!nextUrl} onClick={() => setUrl(nextUrl)}>Siguiente</button>
        
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>Color de Cabello</th>
              <th>Color de piel</th>
              <th>Color de ojos</th>
              <th>Fecha de nacimiento</th>
              <th>Género</th>
              <th>Planeta de nacimiento</th>
            </tr>
          </thead>
          <tbody id="body"></tbody>
        </table>
    
    <p>Datos obtenidos de: <a href="https://swapi.dev/" target="_blank">"The Star Wars API"</a></p>
    </div>
  );
}

export default App;