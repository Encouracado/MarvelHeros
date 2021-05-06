import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { HeroContext, Hero } from '../../contexts/marvelContext'

import Logo from '../Logo'
import Button from '../Button'
import {
  Container,
  HeroCard,
  ImageHero,
  HomeIcon,
  BottonMenu,
  EmailIcon,
  NotificationIcon,
  SearchIcon,
  FunnyFace,
} from './styles'

const RepositoryList: React.FC = () => {
  const { heroList, openDescriptionHero } = useContext(HeroContext)

  const history = useHistory()

  function ShowOneHero(hero: Hero) {
    openDescriptionHero(hero)
    history.push(`/ListHero/${hero.id}`)
  }

  return (
    <>
      <Container>
        <Logo />

        {heroList.map((hero) => {
          return hero.id ? (
            <HeroCard
              key={hero.id}
              type="button"
              onClick={() => ShowOneHero(hero)}
            >
              <strong>{hero.name}</strong>
              <ImageHero
                src={hero.thumbnail?.path + '.' + hero.thumbnail?.extension}
              />
            </HeroCard>
          ) : (
            ''
          )
        })}
      </Container>
      <BottonMenu>
        <HomeIcon />
        <EmailIcon />
        <NotificationIcon />
        <SearchIcon />
        <FunnyFace />
      </BottonMenu>
    </>
  )
}

export default RepositoryList
