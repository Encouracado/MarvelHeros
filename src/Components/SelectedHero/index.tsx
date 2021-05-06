import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Hero, HeroContext } from '../../contexts/marvelContext'

import Button from '../Button'

import {
  Container,
  ImageHero,
  DescriptionHero,
  Icon,
  DisplayIcon,
} from './styles'

const SelectedHero: React.FC = () => {
  const { OneHero } = useContext(HeroContext)
  const history = useHistory()

  function Voltar() {
    history.push('/ListHero')
  }

  return (
    <>
      <DisplayIcon>
        <Icon />
      </DisplayIcon>
      <Container>
        <ImageHero
          src={OneHero.thumbnail?.path + '.' + OneHero.thumbnail?.extension}
        />
        <DescriptionHero>
          <strong>{OneHero.name}</strong>
          {OneHero.description ? (
            <span>{OneHero.description}</span>
          ) : (
            <span>'This Hero does not have a description :/ </span>
          )}
          <Button onClick={() => Voltar()}>Voltar</Button>
        </DescriptionHero>
      </Container>
    </>
  )
}

export default SelectedHero
