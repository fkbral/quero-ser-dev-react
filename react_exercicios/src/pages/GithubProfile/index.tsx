import { useEffect, useState } from 'react'
import './styles.css'
// import { v4 as uuid } from 'uuid'

type GithubUserProfile = {
  name: string
  followers: number
  following: number
  bio: string
  created_at: Date
  updated_at: Date
}

type GithubRepo = {
  id: string
  name: string
  html_url: string
  description: string
}

export function GithubProfile() {
  const [githubProfile, setGithubProfile] =
   useState({} as GithubUserProfile)
  // const [githubUserRepositories, setGithubUserRepositories] =
  //  useState<GithubRepo[]>([])
  const [githubUserRepositories, setGithubUserRepositories] =
   useState([] as GithubRepo[])

  const [isLoadingProfile, setIsLoadingProfile] = useState(false)
  // let githubProfile: GithubUserProfile = {} as GithubUserProfile

  async function getGithubProfileData() {
    setIsLoadingProfile(true)

    try {
      const response = await fetch('https://api.github.com/users/fkbral')

      const githubData = await response.json()

      // githubProfile = githubData
      setGithubProfile(githubData)
    } 
    catch (error) {
      alert(error)
    }
    finally {
      setIsLoadingProfile(false)
    }
  }

  async function getGithubUserRepos() {
    try {
      const response = await fetch(
        'https://api.github.com/users/fkbral/repos'
      )

      const githubRepos = await response.json()

      // githubProfile = githubData
      setGithubUserRepositories(githubRepos)
    } 
    catch (error) {
      alert(error)
    }
    finally {
    }
  }

  useEffect(() => {
    getGithubProfileData()
    getGithubUserRepos()
  }, [])

  return (
    <>
      <h1>Github</h1>
      {isLoadingProfile && <h2>Carregando perfil do usuário</h2>}
      {githubProfile.name && 
        <>
          <p><strong>nome:</strong> {githubProfile.name}</p>
          <p><strong>bio:</strong> {githubProfile.bio}</p>
          <p><strong>seguidores:</strong> {githubProfile.followers}</p>
          <p><strong>seguindo:</strong> {githubProfile.following}</p>
        </>
      }

      <h2>Meus repositórios:</h2>

      <ul>
        {githubUserRepositories.map(repo => {
          return (
            // <li key={uuid()}>
            <li key={repo.id}>
              <p><strong>nome:</strong> {repo.name}</p>
              <p><strong>descrição:</strong> {repo.description ? repo.description : 'sem descrição'}</p>
              <p>
                <strong>link de acesso:</strong> 
                <a href={repo.html_url} target="_blank"> acessar repositório</a>
              </p>
            </li>
          )})
        }
      </ul>
    </>
  )
}