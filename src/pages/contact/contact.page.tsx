import Footer from '@/components/footer'
import Header from '@/components/header'

import LOGO_BLACK from '@/assets/images/logo-black.png'
import CONTACT_LOGO_HEADER from '@/assets/images/contact/contact-logo-header.png'

const ContactPage = () => {
  return (
    <div>
      <Header color="red" className="mb-[100px]" />

      <div className="w-full max-w-[1055px] mx-auto">
        <div className="grid grid-cols-[minmax(0px,_625px)_minmax(0px,_410px)] auto-rows-[514px] gap-x-5">
          <div className="flex flex-col">
            <div className="flex h-[106px] w-full">
              <img alt="" src={CONTACT_LOGO_HEADER} />
              <div className="h-full flex-1 bg-[#64ADEC] grid place-items-center">
                <img alt="" src={LOGO_BLACK} />
              </div>
            </div>

            <div className="pl-12 pt-7 h-[138px] w-full bg-[#DD3633] space-y-2">
              <p className="py-2 px-4 bg-[#64ADEC] w-max text-2xl font-bold leading-6 tracking-[10px]">
                QUEREMOS
              </p>
              <p className="py-2 px-4 bg-[#64ADEC] w-max text-2xl font-bold leading-6 tracking-[10px]">
                SABER DE TÍ
              </p>
            </div>

            <div className="bg-black py-4 pl-12 pr-[26px] text-white flex-1">
              <p className="mb-[26px]">
                Ya sea que desees convertirte en un promotor de la ópera,
                ampliar tus conocimientos y aprendizaje sobre ella, convertirte
                en un aliado o descubrir el maravilloso mundo de la ópera junto
                a nosotros, acércate y emprendamos juntos este viaje fascinante.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-x-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="#BA91D4"
                    />
                    <mask
                      id="mask0_823_10197"
                      style={{ maskType: 'luminance' }}
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_823_10197)">
                      <rect width="24" height="24" fill="#BCD8D5" />
                    </g>
                  </svg>

                  <p className="font-bold">Ciudad de México</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 3H4C2.34806 3 1.01 4.34735 1.01 6L1 17.9992C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6C23 4.34772 21.6523 3 20 3ZM5.48406 9.00015C5.01101 8.71512 4.85859 8.10058 5.14361 7.62753C5.42864 7.15447 6.04318 7.00205 6.51623 7.28708L11.9707 10.5735L17.6632 7.14361C18.1363 6.85859 18.7517 7.01239 19.0367 7.48544C19.3211 7.95742 19.1709 8.57188 18.6998 8.85777L12.01 12.918L12.0037 12.9284L5.48406 9.00015Z"
                      fill="#979797"
                    />
                    <mask
                      id="mask0_823_10209"
                      style={{ maskType: 'luminance' }}
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="3"
                      width="22"
                      height="18"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 3H4C2.34806 3 1.01 4.34735 1.01 6L1 17.9992C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6C23 4.34772 21.6523 3 20 3ZM5.48406 9.00015C5.01101 8.71512 4.85859 8.10058 5.14361 7.62753C5.42864 7.15447 6.04318 7.00205 6.51623 7.28708L11.9707 10.5735L17.6632 7.14361C18.1363 6.85859 18.7517 7.01239 19.0367 7.48544C19.3211 7.95742 19.1709 8.57188 18.6998 8.85777L12.01 12.918L12.0037 12.9284L5.48406 9.00015Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_823_10209)">
                      <rect width="24" height="24" fill="#BCD8D5" />
                    </g>
                  </svg>

                  <p className="font-bold">info@proopera.org.mx</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 border border-[#000] h-max">
            <p className="mb-8 text-2xl font-medium text-[#DD3633]">
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

      <Footer className="mt-[124px]" />
    </div>
  )
}

export default ContactPage
