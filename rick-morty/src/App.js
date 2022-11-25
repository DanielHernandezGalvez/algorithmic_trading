import './App.css';
import rickMorty from "./img/rick-morty (1).png"

function App() {
  const reqApi = () => {
    console.log("Clicking")
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       <img src={rickMorty} alt="Rick y Morty" className="img-home"/>
       <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
      </header>
    </div>
  );
}

export default App;
