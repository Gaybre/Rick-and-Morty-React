import React from 'react'

const Card = ({name, picture, status, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__live-indicator">
        {status === 'Alive'
        ? <h3 className="card__live-indicator--alive">
            Alive
          </h3>
        : status === 'Dead'
        ? <h3 className="card__live-indicator--dead">
            Dead
          </h3>
        :
          <h3 className="card__live-indicator--unknown">
            Unknown
          </h3>
        }
      </div>
      <div className="card__image">
        <img src={picture} />
      </div>
      <div className="card__name">
        <h3>
          {name || 'Name'}
        </h3>
      </div>
      <div className="card__ver swipe">
        <p>{`Ver >>`}</p>
      </div>
    </div>
  )
}

export default Card
