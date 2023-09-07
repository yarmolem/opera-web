import Header from '@/components/header'

import IMAGE_1 from '@/assets/images/events-by-id/1.png'
import IMAGE_2 from '@/assets/images/events-by-id/2.png'
import IMAGE_3 from '@/assets/images/events-by-id/3.png'
import IMAGE_4 from '@/assets/images/events-by-id/4.png'
import IMAGE_5 from '@/assets/images/events-by-id/5.png'
import IMAGE_6 from '@/assets/images/events-by-id/6.png'
import IMAGE_7 from '@/assets/images/events-by-id/7.png'

import VIAJES_LOGO_OPERA from '@/assets/images/events/viajes-logo-opera.png'
import Footer from '@/components/footer'

const EventByIdPage = () => {
  return (
    <div className="flex flex-col">
      <Header color="red" className="mb-[68px]" />

      <div className="w-full max-w-[1152px] mx-auto pb-[140px]">
        <h2 className="text-2xl text-[#8AA09F] mb-6">
          CARTELERA <span className="font-bold">/ VIAJES</span>
        </h2>

        <h3 className="text-[#8AA09F] text-4xl mb-6">VIAJE A ROMA</h3>

        <div className="grid grid-cols-[minmax(0px,_75px)_minmax(0px,_552px)_minmax(0px,_443px)] gap-x-3">
          <div className="w-full h-[200px] relative">
            <img
              src={VIAJES_LOGO_OPERA}
              alt="Logo opera"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div>
            <div className="grid grid-cols-3 grid-rows-[minmax(0px,_200px)_minmax(0px,_121px)] gap-3 mb-6">
              <div className="col-span-3 relative w-full h-full">
                <img
                  src={IMAGE_1}
                  alt="Image 1"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="relative w-full h-full">
                <img
                  src={IMAGE_2}
                  alt="Image 1"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="relative w-full h-full">
                <img
                  src={IMAGE_3}
                  alt="Image 1"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="relative w-full h-full">
                <img
                  src={IMAGE_4}
                  alt="Image 1"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
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
                <div className="relative w-full h-full">
                  <img
                    src={IMAGE_5}
                    alt="Image 1"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative w-full h-full">
                  <img
                    src={IMAGE_6}
                    alt="Image 1"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative w-full h-full">
                  <img
                    src={IMAGE_7}
                    alt="Image 1"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
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

          <div className="p-6 border border-[#BCD8D5] h-max">
            <p className="mb-8 text-2xl font-medium text-[#8AA09F]">
              CONTÁCTANOS
            </p>
            <div className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full py-3 px-4 border border-black"
              />
              <input
                type="text"
                placeholder="Teléfono"
                className="w-full py-3 px-4 border border-black"
              />
              <input
                type="text"
                placeholder="Correo electrónico"
                className="w-full py-3 px-4 border border-black"
              />
              <textarea
                placeholder="Mensaje"
                className="w-full py-3 px-4 border border-black h-[176px]"
              />

              <button className="w-full h-[42px] grid place-items-center bg-black text-white">
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EventByIdPage
