import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

import LOGO_BLACK from '@/assets/images/logo-black.png'
import LOGO_WHITE from '@/assets/images/logo-white.png'
import HEADER_LOGO from '@/assets/images/header-logo.png'
import VIAJES_LOGO_OPERA from '@/assets/images/events/viajes-logo-opera.png'

const EventByIdPage = () => {
  return (
    <div className="flex flex-col">
      <header className="h-[90px] w-full bg-[#DD2926] flex items-center justify-between pl-[52px] mb-[68px]">
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

      <div className="w-full max-w-[1152px] mx-auto pb-[140px]">
        <h2 className="text-2xl text-[#8AA09F] mb-6">
          CARTELERA <span className="font-bold">/ VIAJES</span>
        </h2>

        <h3 className="text-[#8AA09F] text-4xl mb-6">VIAJE A ROMA</h3>

        <div className="grid grid-cols-[minmax(0px,_75px)_minmax(0px,_552px)_minmax(0px,_443px)] gap-x-3">
          <img src={VIAJES_LOGO_OPERA} alt="Logo opera" />

          <div>
            <div className="grid grid-cols-3 grid-rows-[minmax(0px,_200px)_minmax(0px,_121px)] gap-3 mb-6">
              <div className="col-span-3 bg-blue-300"></div>
              <div className="bg-blue-300"></div>
              <div className="bg-blue-300"></div>
              <div className="bg-blue-300"></div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div>
                <p className="font-bold mb-3 tracking-[2px]">ORGANIZACIÓN</p>
                <p className="text-[#6D6D6D]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>

              <div>
                <p className="font-bold mb-3 tracking-[2px]">FECHA</p>
                <p className="text-2xl font-medium">01 -07 de julio</p>
                <p className="text-xl text-[#6D6D6D] font-bold">
                  6 noches / 5 noches
                </p>
                <p className="text-[#6D6D6D] font-medium">
                  Salida - 01 de julio - Aeropuerto de la CDMX
                </p>
                <p className="text-[#6D6D6D] font-medium">
                  Regreso - 07 de julio - Aeropuerto de la CDMX
                </p>
              </div>

              <div>
                <p className="font-bold mb-3 tracking-[2px]">HOSPEDAJE</p>
                <a
                  className="text-[#64ADEC] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tripadvisor.com.mx/Hotel_Review-g187791-d17506625-Reviews-NH_Collection_Roma_Fori_Imperiali-Rome_Lazio.html"
                >
                  NH Collection Roma Fori Imperiali
                </a>
              </div>

              <div className="grid grid-cols-[repeat(3,_minmax(0px,_160px))] auto-rows-[105px] justify-center gap-3">
                <div className="w-full h-full bg-blue-300"></div>
                <div className="w-full h-full bg-blue-300"></div>
                <div className="w-full h-full bg-blue-300"></div>
              </div>

              <div>
                <p className="font-bold mb-3 tracking-[2px]">COSTOS</p>

                <div className="flex gap-x-10">
                  <p className="text-2xl font-bold">$24,000</p>
                  <p className="text-2xl">12 pagos de $2,000</p>
                </div>
              </div>

              <div>
                <p className="font-bold mb-3 tracking-[2px]">
                  PROGRAMA DEL VIAJE
                </p>

                <ul className="flex flex-col gap-y-4">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <li key={index} className="flex gap-[10px]">
                        <div className="w-[42px] h-[42px] rounded-full border grid place-items-center">
                          <p>{index + 1}</p>
                        </div>

                        <p className="text-[#6D6D6D] flex-1">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud.
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="mb-8 text-2xl font-medium text-[#8AA09F]">
              CONTÁCTANOS
            </p>
            <div>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full py-3 px-4 border border-black"
              />
            </div>
          </div>
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

export default EventByIdPage
