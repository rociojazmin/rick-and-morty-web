import React from 'react';

const Modal = ({ character, isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box max-w-md">
                <h3 className="text-xl font-bold m-2.5 text-left">More information about <a className='text-orange-500'>{character.name}</a></h3>
                <p className='text-sm m-2 text-left'><a className="underline decoration-2 decoration-yellow-500">Gender</a>: {character.gender}</p>
                <p className='text-sm m-2 text-left'><a className="underline decoration-2 decoration-indigo-500">Origin</a>: {character.origin.name}</p>
                <p className='text-sm m-2 text-left'><a className="underline decoration-2 decoration-rose-500">Location</a>: {character.location.name}</p>
            </div>
            <label className="modal-backdrop" onClick={onClose}>
                Close
            </label>
        </div>
    );
};

export default Modal;
