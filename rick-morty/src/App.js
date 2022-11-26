import "./App.css";
import rickMorty from "./img/rick-morty (1).png";
import { useState } from "react";
import Characters from "./Components/Characters";
function App() {
  const [characters, setCharacters] = useState(null);
  

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    // console.log(characterApi);

    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={rickMorty} alt="Rick y Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
