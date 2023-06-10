import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Karakter from './components/Karakter';
import CustomModal from './components/Modal';


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const CharacterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterFilms, setCharacterFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCharacter) {
      axios.all(selectedCharacter.films.map(url => axios.get(url)))
        .then(axios.spread((...responses) => {
          const films = responses.map(response => response.data.title);
          setCharacterFilms(films);
        }))
        .catch(error => {
          console.error(error);
        });
    }
  }, [selectedCharacter]);

  const openModal = character => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <Container>
      <Header>Karakterler</Header>
      <CharacterList>
        {characters.map(character => (
          <Karakter
            key={character.name}
            character={character}
            onClick={() => openModal(character)}
          />
        ))}
      </CharacterList>
      <CustomModal
        character={selectedCharacter}
        isOpen={selectedCharacter !== null}
        onRequestClose={closeModal}
        films={characterFilms}
      />
    </Container>
  );
}

export default App;
