import React, { useContext } from 'react'

import { HeroContext } from '../../contexts/marvelContext'

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
  const { heroList } = useContext(HeroContext)
  console.log(heroList)
  return (
    <>
      <Container>
        <Logo />

        {heroList.map((hero) => {
          return hero.id ? (
            <HeroCard
              key={hero.id}
              type="button"
              onClick={() => alert(hero.name)}
            >
              <strong>{hero.name}</strong>
              <ImageHero
                src={hero.thumbnail?.path + '.' + hero.thumbnail?.extension}
              />
              {console.log(
                hero.thumbnail?.path + '+++' + hero.thumbnail?.extension
              )}
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
