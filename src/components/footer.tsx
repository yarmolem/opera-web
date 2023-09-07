import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

import LOGO_WHITE from '@/assets/images/logo-white.png'
import clsx from 'clsx'

const Footer = (props: { className?: string }) => {
  return (
    <footer>
      <div
        className={clsx(
          'w-full h-[146px] pl-[48px] pr-[96px] flex justify-between items-center bg-black',
          props.className
        )}
      >
        <div className="flex items-center gap-x-4">
          <button className="bg-white rounded-full w-8 h-8 grid place-items-center">
            <Facebook size={18} fill="black" stroke="transparent" />
          </button>
          <button className="bg-white rounded-full w-8 h-8 grid place-items-center">
            <Twitter size={18} fill="black" stroke="transparent" />
          </button>
          <button className="bg-white rounded-full w-8 h-8 grid place-items-center">
            <Linkedin size={18} fill="black" stroke="transparent" />
          </button>
        </div>

        <img src={LOGO_WHITE} alt="Logo opera" />
      </div>

      <div className="h-[48px] w-full bg-[#DD2926] pl-[48px]">
        <ul className="flex items-center gap-x-[18px] h-full">
          <li className="uppercase text-white">
            <Link to="/">AVISO DE PRIVACIDAD</Link>
          </li>
          <li className="uppercase text-white">
            <Link to="/">TÉRMINOS Y CONDICIONES</Link>
          </li>
          <li className="uppercase text-white">
            <Link to="/faqs">faq´s</Link>
          </li>
          <li className="uppercase text-white">
            <Link to="/">CONTACTO</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
