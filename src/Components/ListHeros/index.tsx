import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { GetAllHeros } from '../../store/repositories/actions'
import { Character } from '../../store/repositories/types'
import Logo from '../Logo'
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
  const dispatch = useDispatch()
  const HeroState = useSelector((state: RootStore) => state.repositories)
  const ShowHeros = () => dispatch(GetAllHeros())
  console.log('hero state: ', HeroState.hero?.data.results[1].name)
  useEffect(() => {
    ShowHeros()
  }, [])
  return (
    <>
      <Container>
        <Logo />
        {HeroState.hero &&
          HeroState.hero?.data.results.map((character: Character) => {
            return (
              <HeroCard key={character.id}>
                <strong>{character.name}</strong>
                <ImageHero
                  src={
                    character.thumbnail.path +
                    '.' +
                    character.thumbnail.extension
                  }
                />
              </HeroCard>
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
