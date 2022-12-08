import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
     
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
      </Routes>
     
    </div>
  );
}

export default App;

// COMPONENTE HOME
// CARDS
// CARD
// FORM
// NAVBAR

// REDUX
// ACTIONS
// REDUCER
// STORE

// CONECTAR REACT CON REDUX => PROVIDER
// RUTAS
