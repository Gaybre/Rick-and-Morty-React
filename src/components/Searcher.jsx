import React, { useState } from 'react'

const Searcher = ({handleChange, handleSubmit}) => {
  return (
    <section className="searcher">
      <h2
        className="searcher__title"
      >
      Encuentra a tu personaje Favorito !!
      </h2>
      <form
        className="searcher__form"
        id="searcher-form"
        onSubmit={handleSubmit}
      >
        <input
          className="searcher__form-input"
          id="inputcharacter"
          type="text"
          name="searcher"
          placeholder="Buscar..."
          onChange={handleChange}
        />
      </form>
    </section>
  )
}

export default Searcher
