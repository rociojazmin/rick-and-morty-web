import React, { useState } from 'react';
import Modal from './Modal';

const CharacterCard = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="w-full bg-white shadow-xl text-black p-4 rounded">
      <figure>
        <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded" />
      </figure>
      <div className="mt-4">
        <h2 className="font-bold text-xl">{character.name}</h2>
        <p className="text-base m-2.5">
          <a className="underline decoration-2 decoration-sky-500">Status:</a> {character.status}
        </p>
        <p className="text-base m-2.5">
          <a className="underline decoration-2 decoration-pink-500">Species:</a> {character.species}
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <label htmlFor={`modal_${character.id}`} className="btn bg-blue-500 btn-sm text-white px-4 py-2 rounded-full">
          Details
        </label>
        <input
          type="checkbox"
          id={`modal_${character.id}`}
          className="modal-toggle"
          checked={modalOpen}
          onChange={toggleModal}
        />
        {modalOpen && (
          <Modal character={character} isOpen={modalOpen} onClose={toggleModal} />
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
