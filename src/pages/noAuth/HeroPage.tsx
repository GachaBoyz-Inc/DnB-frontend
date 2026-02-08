import Header from '../../layouts/Header'
import heroImage from "../../assets/images/hero-image.jpg"
import arrow_right_white from "../../assets/icons/arrow_right_white.svg"
import transition from "../../assets/images/transition.png"
import transition_2 from "../../assets/images/transition_2.png"

const HeroPage = () => {
  return (
    <div className="relative flex flex-col justify-between h-screen">
        <Header/>
        <div  className="w-full h-full bg-cover bg-center brightness-50"
              style={{ backgroundImage: `url(${heroImage})` }}>
        </div>
        <div className='absolute -translate-y-1/2 top-1/2 left-8 cursor-default'>
          <h1 className=" text-primary-100 text-8xl font-semibold"> Darius & <br/> Dragons </h1>
          <p className="text-contrast-100 max-w-2xl text-xl mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="flex hover:text-contrast-0 hover:bg-contrast-100 transition-colors mt-8 gap-x-4 text-xl text-contrast-100 border border-white font-medium px-5 py-2 cursor-pointer"> Comece sua aventura <img src={arrow_right_white} /> </button>
        </div>
        <div className="absolute top-120">
          <img src={transition} />
          <img src={transition_2} />
        </div>
    </div>
  )
}

export default HeroPage