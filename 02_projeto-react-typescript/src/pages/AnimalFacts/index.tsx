import { useEffect, useState } from "react"

export function AnimalFacts() {
  const [defaultFacts, setDefaultFacts] = useState([])
  // let defaultFacts = []
  const [searchedAnimalType, setSearchedAnimalType] = useState('') 

  async function getRandomFact() {  
    const response = await fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=2`
    )
  
    const retrievedFacts = await response.json()

    setDefaultFacts(retrievedFacts)
    // defaultFacts = retrievedFacts
  }

  useEffect(() => {
    getRandomFact()
  }, [])

  return (
    <>
      <h1>Animal</h1>
      <h2>Exemplos de fatos</h2>
      <ul>
        {defaultFacts.map(fact => {
          return (
          <li>
            <p>{fact.text}</p>
          </li>
          )})}
      </ul>

      <h2>Pesquise novas curiosidades!</h2>

      <label htmlFor="animal-type">Tipo do animal</label>
      <input 
        type="text"
        id="animal-type"
        value={searchedAnimalType}
        onChange={(event) => setSearchedAnimalType(event.target.value)}
      />
    </>
  )
}