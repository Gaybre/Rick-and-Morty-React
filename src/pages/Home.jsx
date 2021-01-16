import React, { useState } from 'react'
import { fetchCharacter } from '../fetchCharacter'

import Searcher from '../components/Searcher'
import Card from '../components/Card'
import Loader from '../components/Loader'

const Home = () => {
  const [state, setState] = useState({
    searcher: '',
    colection: [],
    loading: false,
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

  const lookingForResults = () => {
    if (state.colection.length) {
      return state.colection.map(item => (
        <Card
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
    </main>
  )
}

export default Home
