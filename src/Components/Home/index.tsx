import React from 'react'
import Logo from '../Logo'
import Form from '../Form'
import {
  Container,
  Wrapper,
  HomeIcon,
  BottonMenu,
  EmailIcon,
  NotificationIcon,
  SearchIcon,
  FunnyFace,
} from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo />
          <Form />
        </Wrapper>
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

export default Home
