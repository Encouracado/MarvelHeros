import Globalstyles from './styles/GlobalStyles'
import Routes from './routes'

import { useState } from 'react'
import { HeroContext, Hero } from './contexts/marvelContext'

export const App = () => {
  const [heroList, setHeroList] = useState([{}])
  const [OneHero, setOneHero] = useState({})
  // const [heroDescription, setHeroDescription] = useState({})
  const [currentHero, setCurrentHero] = useState(0)

  function openDescriptionHero(hero: Hero) {
    setOneHero(hero)
    setCurrentHero(0)
  }

  return (
    <>
      <HeroContext.Provider
        value={{ heroList, currentHero, OneHero, openDescriptionHero }}
      >
        <Routes />
        <Globalstyles />
      </HeroContext.Provider>
    </>
  )
}
