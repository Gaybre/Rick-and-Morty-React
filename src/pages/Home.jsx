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
    thereIsError: null,
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
      thereIsError: null,
      loading: true
    })
    const data = await fetchCharacter(state.searcher, setState)
    resultsValidation(data)
    const $input = document.getElementById('inputcharacter')
    $input.value = ''
    $input.blur()
  }

  const resultsValidation = data => {
    if(data.results) {
      setState({
        ...state,
        colection: data.results,
        thereIsError: null,
        loading: false
      })
    }
    else if(data.error) {
      setState({
        ...state,
        colection: [],
        thereIsError: data.error,
        loading: false
      })
    }
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
      return (
        <section className="main__results-empty">
          <img src="https://res.cloudinary.com/starlink/image/upload/v1610865603/RM/r-and-m-a_gwdtwv.png" alt="rick-and-morty-empty-cards" />
        </section>
      )
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
      {state.thereIsError && <h2>No se encontraron coincidencias</h2>}
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
