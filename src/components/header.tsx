import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

import LOGO_BLACK from '@/assets/images/logo-black.png'
import HEADER_LOGO_RED from '@/assets/images/header-logo.png'
import HEADER_LOGO_PINK from '@/assets/images/header-logo-pink.png'

type Props = {
  className?: string
  color?: 'red' | 'pink'
}

const Header = (props: Props) => {
  return (
    <div className={props.className}>
      <header
        className={clsx(
          'h-[90px] w-full flex items-center justify-between pl-[52px]',
          {
            'bg-[#DD2926]': props.color === 'red',
            'bg-[#D986BA]': props.color === 'pink'
          }
        )}
      >
        <img src={LOGO_BLACK} alt="Logo opera" className="w-[178px] h-[52px]" />

        <div className="h-full flex items-center">
          <div className="flex items-center gap-x-4 pr-[48px] border-r-2 h-[95%] border-r-white">
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

          <div className="bg-[#a00604]">
            <img
              src={props.color === 'red' ? HEADER_LOGO_RED : HEADER_LOGO_PINK}
              alt="Logo opera"
            />
          </div>
        </div>
      </header>
      <nav className="h-[43px] w-full bg-black mb-[68px]">
        <ul className="flex items-center h-full justify-center gap-x-[18px] text-white">
          <li>
            <Link to="/">EVENTOS</Link>
          </li>
          <li>
            <Link to="/">MEMBRESÍAS</Link>
          </li>
          <li>
            <Link to="/">NOSOTROS</Link>
          </li>
          <li>
            <Link to="/news">CONTENIDO</Link>
          </li>
          <li>
            <Link to="/">ALIADOS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACTO</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
