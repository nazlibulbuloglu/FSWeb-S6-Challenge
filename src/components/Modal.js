import React from 'react';
import styled from 'styled-components';

const ModalContent = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const ModalTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ModalText = styled.p`
  color: #666;
  margin-bottom: 5px;
`;

const CloseButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const CustomModal = ({ character, isOpen, onRequestClose, films }) => {
  if (!character) {
    return null;
  }

  return (
    <div>
      <ModalContent>
        <ModalTitle>{character.name}</ModalTitle>
        <ModalText>
          <strong>Doğum Yılı:</strong> {character.birth_year}
        </ModalText>
        <ModalText>
          <strong>Cinsiyet:</strong> {character.gender}
        </ModalText>
        <ModalText>
          <strong>Filmler:</strong>
        </ModalText>
        <ul>
          {films.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
        <ModalText>
          <strong>Boy:</strong> {character.height} cm
        </ModalText>
        <ModalText>
          <strong>Ağırlık:</strong> {character.mass} kg
        </ModalText>
        <ModalText>
          <strong>Göz Rengi:</strong> {character.eye_color}
        </ModalText>
        <ModalText>
          <strong>Saç Rengi:</strong> {character.hair_color}
        </ModalText>
        <ModalText>
          <strong>Ten Rengi:</strong> {character.skin_color}
        </ModalText>
        <CloseButton onClick={onRequestClose}>Kapat</CloseButton>
      </ModalContent>
    </div>
  );
};

export default CustomModal;
