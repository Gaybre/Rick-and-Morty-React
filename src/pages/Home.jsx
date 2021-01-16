import React, { useState } from 'react'
import { fetchCharacter } from '../fetchCharacter'

import Searcher from '../components/Searcher'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Modal from '../components/Modal'

const Home = () => {
  const [state, setState] = useState({
    searcher: '',
    selected: '',
    colection: [],
    loading: false,
    modalIsOpen: false
  })

  const handleChange = ev => {
    setState({
      ...state,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = async ev => {
    ev.preventDefault()
    setState({
      ...state,
      loading: true
    })
    const results = await fetchCharacter(state.searcher)
    setState({
      ...state,
      colection: results,
      loading: false
    })
    const $input = document.getElementById('inputcharacter')
    $input.value = ''
  }

  const handleCardClik = (character) => {
    setState({...state,
      selected: character,
      modalIsOpen: true
    })
  }

  const lookingForResults = () => {
    if (state.colection.length) {
      return state.colection.map(item => (
        <Card
          onClick={() => handleCardClik(item)}
          key={item.id}
          name={item.name}
          picture={item.image}
          status={item.status}
        />
      ))
    } else {
      console.log('no hay nada')
    }
  }

  return (
    <main className="main">
      <header className="main__header">
        <h1 className="main__header-title emphasis">
          Buscar
        </h1>
      </header>
      <Searcher
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {state.loading && <Loader />}
      <section className="main__results">
        {lookingForResults()}
      </section>
      <Modal
        character={state. selected}
        isOpen={state.modalIsOpen}
        onClose={() => setState({...state, modalIsOpen: false})}
      />
    </main>
  )
}

export default Home
