import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { HeroContext, Hero } from '../../contexts/marvelContext'

import Button from '../Button'
import api from '../../services/api'
import md5 from 'md5'

import { Container, Wrapper, InputStyle, FormStyle } from './styles'

type Inputs = {
  privateKey: string
  publicKey: string
}

const Form: React.FC = () => {
  const { heroList } = useContext(HeroContext)

  let ts = Number(new Date())

  const history = useHistory()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit = async function (data: Inputs) {
    let hashKeys = md5(ts + data.privateKey + data.publicKey)
    const dataMarvel: Hero = await api.get('characters', {
      params: {
        ts,
        apikey: data.publicKey,
        hash: hashKeys,
      },
    })

    dataMarvel.data.data.results.map((hero: Hero) => {
      heroList.push(hero)
    })

    history.push('/listHero')
  }

  return (
    <Container>
      <Wrapper>
        <FormStyle>
          <InputStyle
            type="text"
            id="publicKey"
            placeholder="Public Key Here"
            {...register('publicKey')}
          />

          <InputStyle
            type="text"
            id="privateKey"
            placeholder="Private Key Here"
            {...register('privateKey')}
          />

          <Button onClick={handleSubmit(onSubmit)} outlined>
            GET HEROS!
          </Button>
        </FormStyle>
      </Wrapper>
    </Container>
  )
}

export default Form
