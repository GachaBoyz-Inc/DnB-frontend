import React from 'react'

const Header = () => {
    const navButtonStyle = 'after:duration-200 after:transform after:content-[""] after:block after:w-0 after:h-0.5 after:bg-contrast-100 after:mt-2 hover:after:w-full after:absolute relative'

  return (
    <header className='w-full bg-contrast-0 flex items-center justify-between px-8 py-6'>
        <p className='text-primary-100 font-bold text-4xl cursor-default'>
            DARIUS
        </p>

        <nav>
            <ul className='flex gap-15 text-contrast-100 font-medium'>
                <li className={navButtonStyle}><a href="#">Início</a></li>
                <li className={navButtonStyle}><a href="#">Sobre RPG</a></li>
                <li className={navButtonStyle}><a href="#">Projeto</a></li>
                <li className={navButtonStyle}><a href="#">Equipe</a></li>
            </ul>
        </nav>

        <div className='flex gap-6'>
            <button className='hover:bg-contrast-100 hover:text-contrast-0 transition-colors text-contrast-100 font-medium px-6 py-1 border-2 border-const rounded cursor-pointer'>
                Entrar
            </button>

            <button className='bg-primary-100 hover:bg-primary-200 transition-colors text-white font-medium py-2 px-4 rounded cursor-pointer'>
                Criar conta
            </button>
        </div>

    </header>
  )
}

export default Header