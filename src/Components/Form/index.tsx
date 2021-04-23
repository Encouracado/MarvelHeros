import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Container, Wrapper, InputStyle, FormStyle } from './styles'
import Button from '../Button'
import { GetKeys, dataKey } from '../../services/api'
type Inputs = {
  privateKey?: string
  publicKey?: string
}
const Form: React.FC = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit = function (data: dataKey) {
    GetKeys(data)
    history.push('/ListHero')
  }

  return (
    <Container>
      <Wrapper>
        <FormStyle>
          <form>
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
          </form>
        </FormStyle>
      </Wrapper>
    </Container>
  )
}

export default Form
