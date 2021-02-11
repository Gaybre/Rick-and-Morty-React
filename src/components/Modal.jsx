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
        <img className="rotate" src="https://res.cloudinary.com/starlink/image/upload/v1610938380/RM/portal_xw9b59.png" atl="portal" />
        <CardModal
          character={character}
        />
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
