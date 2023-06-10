import React from 'react';
import styled from 'styled-components';

const CharacterItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  background-color: #f9f9f9;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CharacterName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  background-color: #f7d794;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Karakter = ({ character, onClick }) => {
  return (
    <CharacterItem onClick={onClick}>
      <CharacterName>{character.name}</CharacterName>
    </CharacterItem>
  );
}

export default Karakter;
