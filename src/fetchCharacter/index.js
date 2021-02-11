const API_URL = 'https://rickandmortyapi.com/api/character/?name='

export const fetchCharacter = async character => {
  try {
    const response = await fetch(`${API_URL}${character}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}
