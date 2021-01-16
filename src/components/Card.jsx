import React from 'react'

const Card = ({name, picture, status}) => {
  return (
    <div className="card">
      <div className="card__live-indicator">
        {status === 'Alive'
        ? <h3 className="card__live-indicator--alive">
            Alive
          </h3>
        : <h3 className="card__live-indicator--dead">
            Dead
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
