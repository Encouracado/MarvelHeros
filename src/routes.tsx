import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import ListHeros from './Components/ListHeros'
import SelectedHero from './Components/SelectedHero'

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={ListHeros} exact path="/ListHero" />
      <Route component={SelectedHero} exact path="/ListHero/:id" />
    </BrowserRouter>
  )
}

export default Routes
