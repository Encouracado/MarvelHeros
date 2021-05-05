import Globalstyles from './styles/GlobalStyles'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store'

import { useState } from 'react'
import { HeroContext, Hero } from './contexts/marvelContext'

export const App = () => {
  const [heroList, setHeroList] = useState([{}])
  // const [heroDescription, setHeroDescription] = useState({})
  const [currentHero, setCurrentHero] = useState(0)

  function openDescriptionHero(hero: Hero) {
    setHeroList([hero])
    setCurrentHero(0)
  }

  return (
    <>
      <HeroContext.Provider
        value={{ heroList, currentHero, openDescriptionHero }}
      >
        <Provider store={store}>
          <Routes />
          <Globalstyles />
        </Provider>
      </HeroContext.Provider>
    </>
  )
}
