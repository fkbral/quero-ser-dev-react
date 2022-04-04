import { useEffect, useState } from "react"

type Fact = {
  _id: string,
  text: string,
  updatedAt: Date,
}

export function AnimalFacts() {
  // const [defaultFacts, setDefaultFacts] = useState([] as Fact[])
  const [defaultFacts, setDefaultFacts] = useState<Fact[]>([])
  const [facts, setFacts] = useState<Fact[]>([])
  // let defaultFacts = []
  const [searchedAnimalType, setSearchedAnimalType] = useState('') 
  const [animalType, setAnimalType] = useState('') 

  async function getDefaultRandomFacts() {  
    const response = await fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=2`
    )
  
    const retrievedFacts = await response.json()

    setDefaultFacts(retrievedFacts)
    // defaultFacts = retrievedFacts
  }

  async function getRandomFacts(animal_type: string = 'dog') {  
    const response = await fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_type.toLowerCase()}&amount=5`
    )
  
    const retrievedFacts = await response.json()

    setAnimalType(searchedAnimalType)
    setFacts(retrievedFacts)
    // defaultFacts = retrievedFacts
  }

  function handleSubmitAnimalFactSearch(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()
    getRandomFacts(searchedAnimalType)
  }

  useEffect(() => {
    getDefaultRandomFacts()
  }, [])

  return (
    <>
      <h1>Animal</h1>
      <h2>Example dog facts</h2>
      <ul>
        {defaultFacts.map(fact => {
          return (
          <li key={fact._id}>
            <p>{fact.text}</p>
            <strong>{fact.updatedAt}</strong>
          </li>
          )})}
      </ul>

      <h2>Search for new facts!</h2>

      <form onSubmit={handleSubmitAnimalFactSearch}>
        <label htmlFor="animal-type">Animal Type</label>
        <input 
          type="text"
          id="animal-type"
          value={searchedAnimalType}
          onChange={(event) => setSearchedAnimalType(event.target.value)}
          />

        <button>Search for facts</button>
      </form>

      {animalType && <h2>{animalType} facts</h2> }
      <ul>
        {facts.length > 0 
          ? facts.map(fact => {
            return (
            <li key={fact._id}>
              <p>{fact.text}</p>
            </li>
            )})
          : animalType && <p>No facts found for <strong>{animalType}</strong></p>
        }
      </ul>
    </>
  )
}