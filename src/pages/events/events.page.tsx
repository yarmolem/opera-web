import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Facebook } from 'lucide-react'

import EVENT_ONE from '@/assets/images/events/1.png'
import EVENT_TWO from '@/assets/images/events/2.png'
import EVENT_THREE from '@/assets/images/events/3.png'
import EVENT_FOUR from '@/assets/images/events/4.png'
import EVENT_FIVE from '@/assets/images/events/5.png'
import EVENT_SEVEN from '@/assets/images/events/7.png'
import CASA_LOGO_OPERA from '@/assets/images/events/casa-logo-opera.png'
import EVENT_LOGO_OPERA from '@/assets/images/events/event-logo-opera.png'
import VIAJES_LOGO_OPERA from '@/assets/images/events/viajes-logo-opera.png'

import LOGO_BLACK from '@/assets/images/logo-black.png'
import LOGO_WHITE from '@/assets/images/logo-white.png'
import HEADER_LOGO from '@/assets/images/header-logo.png'

const DESCRIPTION = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
`

const CATEGORIES = [
  'TODOS',
  'ÓPERA',
  'CENAS / CATAS',
  'CONFERENCIAS',
  'ÓPERA EN CASA',
  'VIAJES'
] as const

const EVENTS = [
  {
    day: 15,
    month: 'JUN',
    category: 'EVENTOS',
    title: 'Voici L´opera',
    place: 'TEATRO METROPOLITANO',
    desc: DESCRIPTION,
    image: EVENT_ONE,
    logo: EVENT_LOGO_OPERA
  },
  {
    day: 16,
    month: 'JUN',
    category: 'ÓPERA EN CASA',
    title: 'Voici L´opera',
    place: 'TEATRO METROPOLITANO',
    desc: DESCRIPTION,
    image: EVENT_TWO,
    logo: CASA_LOGO_OPERA
  },
  {
    day: 18,
    month: 'JUN',
    category: 'EVENTOS',
    title: 'Voici L´opera',
    place: 'TEATRO METROPOLITANO',
    desc: DESCRIPTION,
    image: EVENT_THREE,
    logo: EVENT_LOGO_OPERA
  },
  {
    day: 30,
    month: 'JUN',
    category: 'VIAJES',
    title: 'VIAJE A FIORE',
    place: 'TEATRO METROPOLITANO',
    desc: DESCRIPTION,
    image: EVENT_FOUR,
    logo: VIAJES_LOGO_OPERA
  },
  {
    day: 16,
    month: 'JUN',
    category: 'ÓPERA EN CASA',
    title: 'Voici L´opera',
    place: 'TEATRO METROPOLITANO',
    desc: DESCRIPTION,
    image: EVENT_FIVE,
    logo: CASA_LOGO_OPERA
  },
  {
    day: 21,
    month: 'JUN',
    category: 'EVENTOS',
    title: 'Voici L´opera',
    place: 'TEATRO METROPOLITANO',
    desc: DESCRIPTION,
    image: EVENT_FIVE,
    logo: EVENT_LOGO_OPERA
  },
  {
    day: 30,
    month: 'JUN',
    category: 'VIAJES',
    title: 'VIAJE A ROMA',
    place: 'TEATRO METROPOLITANO',
    desc: DESCRIPTION,
    image: EVENT_SEVEN,
    logo: VIAJES_LOGO_OPERA
  }
]

const EventsPage = () => {
  const [activeKey, setActiveKey] = useState<string>('TODOS')

  return (
    <div className="flex flex-col">
      <header className="h-[90px] w-full bg-[#DD2926] flex items-center justify-between pl-[52px]">
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
            <img src={HEADER_LOGO} alt="Logo opera" />
          </div>
        </div>
      </header>

      <nav className="h-[43px] w-full bg-black mb-[55px]">
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
            <Link to="/">CONTENIDO</Link>
          </li>
          <li>
            <Link to="/">ALIADOS</Link>
          </li>
          <li>
            <Link to="/">CONTACTO</Link>
          </li>
        </ul>
      </nav>

      <div className="w-full max-w-[1168px] mx-auto grid grid-cols-6 gap-x-[26px] mb-[85px]">
        {CATEGORIES.map((key) => (
          <button
            key={key}
            onClick={() => setActiveKey(key)}
            className={clsx(
              'px-4 h-[38px] border border-[#121212] font-bold  cursor-pointer transition-colors duration-300 select-none',
              {
                'bg-black text-white': activeKey === key,
                'bg-white text-black hover:bg-black hover:text-white':
                  activeKey !== key
              }
            )}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="w-full max-w-[1109px] mx-auto mb-[154px]">
        <h2 className="ml-6 uppercase text-[36px] text-[#DD2926] font-medium leading-[34px] mb-[55px]">
          cartelera
        </h2>

        <div className="flex flex-col gap-y-6">
          {EVENTS.map((event, i) => (
            <div key={i} className="flex items-center h-[200px]">
              <div
                className={clsx(
                  'w-[138px] h-full flex flex-col justify-center items-center mr-2',
                  {
                    'bg-[#DD2926]': event.category === 'EVENTOS',
                    'bg-[#BCD8D5]': event.category === 'VIAJES',
                    'bg-[#64ADEC]': event.category === 'ÓPERA EN CASA'
                  }
                )}
              >
                <p className="text-[96px] leading-[102px]">{event.day}</p>
                <p className="text-[48px] leading-[31px] font-light">
                  {event.month}
                </p>
              </div>

              <div className="flex items-center mr-6">
                <img alt="" src={event.logo} className="w-[60px] h-full" />
                <img
                  alt=""
                  src={event.image}
                  className="w-[200px] aspect-square"
                />
              </div>

              <div className="h-full flex-1 flex flex-col gap-y-2">
                <p
                  className={clsx('text-[24px] font-bold leading-8 uppercase', {
                    'text-[#B9001D] ': event.category === 'EVENTOS',
                    'text-[#8AA09F] ': event.category === 'VIAJES',
                    'text-[#0376B9] ': event.category === 'ÓPERA EN CASA'
                  })}
                >
                  {event.title}
                </p>

                <span
                  className={clsx(
                    'p-1 bg-[#DD363399] text-xs leading-4 w-max',
                    {
                      'bg-[#DD363399]': event.category === 'EVENTOS',
                      'bg-[#BCD8D5]': event.category === 'VIAJES',
                      'bg-[#64ADEC]': event.category === 'ÓPERA EN CASA'
                    }
                  )}
                >
                  {event.category}
                </span>

                <p>{event.place}</p>
                <p className="text-[#6D6D6D]">{event.desc}</p>

                <Link to="/events/1">
                  <button className="w-[173px] h-[37px] grid place-items-center bg-black text-white font-bold">
                    VER DETALLES
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="w-full h-[146px] pl-[48px] pr-[96px] flex justify-between items-center bg-black">
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
              <Link to="/">faq´s</Link>
            </li>
            <li className="uppercase text-white">
              <Link to="/">CONTACTO</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default EventsPage
