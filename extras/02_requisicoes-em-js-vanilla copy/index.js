async function getRandomFact() {
  const animalType = 'dog'
  const amount = 2
  const baseUrl = 'https://cat-fact.herokuapp.com'

  const response = await fetch(
    `${baseUrl}/facts/random?animal_type=${animalType}&amount=${amount}`,
    {
      method: 'GET'
    }
  )
  const facts = await response.json()
  
  const factsTexts = facts.map(fact => fact.text)
  
  console.log(factsTexts)
  // return factsTexts
}

const jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com'

async function getUsers() {
  const response = await fetch(`${jsonPlaceholderApi}/users`)
  const users = await response.json()

  console.log(users)

  return users
}

async function getUser(id) {
  const response = await fetch(`${jsonPlaceholderApi}/users/${id}`)
  const user = await response.json()

  console.log(user)

  return user
}

async function createUser(data) {
  const response = await fetch(
    `${jsonPlaceholderApi}/users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) 
    }
  )

  const user = await response.json()

  console.log(user)

  return user
}

// getRandomFact()
getUsers()
createUser({
  name: 'Maria da Silva',
  email: 'maria1233@outlook.com'
})

getUser(14)