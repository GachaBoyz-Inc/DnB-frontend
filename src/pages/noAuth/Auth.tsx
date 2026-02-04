import React from 'react'
import Form from '../../components/form'
import Title from '../../components/Title'

const Auth = () => {
  return (
    <div className='size-full grid grid-cols-2 gap-20'>
        <section>
          <h3>Imagem aqui</h3>
        </section>
        <section>
          <Form.Root>
            <Title text='Crie sua conta' subText='Inicie sua jornada' />
            <Form.Input id="email" label="Email" classProps='w-full' />
          </Form.Root>
        </section>
    </div>
  )
}

export default Auth