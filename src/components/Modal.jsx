import React from 'react'
import ReactDOM from 'react-dom'
import CardModal from './CardModal'

const Modal = ({character, isOpen, onClose}) => {
  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        <button
          onClick={onClose}
          className="modal__close">
          x
        </button>
        <CardModal
          character={character}
        />
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
