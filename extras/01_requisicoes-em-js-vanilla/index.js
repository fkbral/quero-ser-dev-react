async function getRandomFact() {
  // const animalType = 'dog'
  // const amount = 2

  // const response = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${amount}`)
  const responseDogs = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=2`)
  const dogFacts = await responseDogs.json()

  const responseCats = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2`)
  const catFacts = await responseCats.json()
  
  const dogFactsTexts = dogFacts.map(fact => fact.text)
  const catFactsTexts = catFacts.map(fact => fact.text)
  
  console.log(dogFactsTexts)
  console.log(catFactsTexts)
  // return factsTexts
}

getRandomFact()