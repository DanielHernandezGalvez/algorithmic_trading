import React from "react";

const Characters = (props) => {
  const { characters, setCharacters } = props;

  const resetCharacters = () =>{
    // console.log("reset")
    setCharacters(null)
  }
//   console.log(characters);
  // console.log(props)
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>volver a home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Vivo
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Muerto
                  </>
                )}
              </h6>
              <p className="text-grey">
                <span>Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especies: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
    </div>
  );
};

export default Characters;
