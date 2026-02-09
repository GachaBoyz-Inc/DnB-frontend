import Form from '../../components/form'
import Title from '../../components/Title'
import LoginImage from '../../assets/images/login-image.jpg'
import Button from '../../components/form/Button'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className='size-full grid lg:grid-cols-2'>
      <section
        className='h-screen bg-center bg-cover'
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        <div className='flex flex-col justify-center items-center backdrop-brightness-50 size-full p-4'>
          <Title
            text='Já é um viajante?'
            subText='Acesse suas fichas, acompanhe a evolução dos personagens e mantenha cada detalhe da campanha sempre à mão. O próximo teste de dado começa agora.'
            titleClassProps='text-primary-100 text-5xl font-bold mb-4 uppercase'
            subTitleClassProps='max-w-2xl text-contrast-100 text-xl font-light'
          />

          <Button label='Realizar login' containerClassProps='mt-8' onClick={() => navigate("/login")}/>
        </div>
      </section>
      <section className='relative flex flex-col justify-center items-center py-8 px-20 h-screen'>
        <Title
          containerClassProps='mb-16'
          text='Crie sua conta'
          subText='Inicie sua jornada'
          titleClassProps='text-4xl font-bold uppercase'
          subTitleClassProps='font-light text-xl'
        />

        <Form.Root classProps='w-full'>
          <Form.Input id="name" label="Nome" classProps='w-full mb-10' />
          <Form.Input id="email" label="Email" classProps='w-full mb-10' placeholder='Ex: usuario@example.com' />
          <Form.Input id="password" label="Senha" classProps='w-full mb-10' type='password' />
          <Form.Input id="confirmPassword" label="Confirmar Senha" classProps='w-full mb-10' type='password' />

          <Form.Button label='Criar conta' containerClassProps='text-end' />
        </Form.Root>

        <h3 className='absolute bottom-8 font-semibold uppercase text-secondary-200'>© Darius & Dragons</h3>
      </section>
    </div>
  )
}

export default Register