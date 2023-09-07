import Footer from '@/components/footer'
import Header from '@/components/header'

import MEMBERSHIP_TABLE from '@/assets/images/memberships/membership-table.png'
import MEMBERSHIP_PRO_SOCIO from '@/assets/images/memberships/memberships-pro-socio.png'

const MembershipsPage = () => {
  return (
    <div className="relative">
      <img
        alt=""
        src={MEMBERSHIP_PRO_SOCIO}
        className="absolute top-[46px] left-0 z-[-1]"
      />

      <Header color="red" className="z-10" />

      <div className="w-full max-w-[1109px] mx-auto min-h-screen pt-[101px] pb-[51px] flex flex-col">
        <h2 className="text-right text-4xl tracking-[10px] mb-[85px] text-[#B9001D]">
          NUESTRAS MEMBRESÍAS
        </h2>

        <img src={MEMBERSHIP_TABLE} alt="" className="mb-[51px]" />

        <div className="mx-auto w-full max-w-[410px] h-[606px] p-6 border border-black flex flex-col">
          <p className="text-center text-2xl font-medium text-[#DD3633] tracking-[6px] mb-8">
            ADQUIERE TU MEMEBRESÍA
          </p>

          <div className="flex flex-col gap-y-2 flex-1">
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

            <select
              placeholder="Tipo de membresía"
              className="w-full py-3 px-4 border border-black"
            >
              <option value="Palco">Palco</option>
              <option value="Orquesta">Orquesta</option>
              <option value="Luneta">Luneta</option>
              <option value="Anfiteatro">Anfiteatro</option>
              <option value="Galería">Galería</option>
              <option value="Butaca">Butaca</option>
            </select>

            <button className="w-full h-[42px] grid place-items-center bg-black text-white mt-auto">
              ENVIAR
            </button>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-[296px] left-0 z-[-1]"
        width="432"
        height="542"
        viewBox="0 0 432 542"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_558_35821)">
          <path
            d="M35.2748 90.1726C111.964 47.7908 210.069 55.4279 279.746 116.431C368.673 194.292 377.618 329.607 299.714 418.66C279.994 441.205 256.595 458.628 231.202 470.807"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M-16.0483 183.342C3.30114 151.486 32.5994 125.28 69.6688 109.944C162.23 71.6639 268.212 115.68 306.381 208.256C344.556 300.836 300.461 406.92 207.9 445.2C157.189 466.17 102.449 462.45 57.039 439.566"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M29.6373 192.148C47.7255 168.246 73.6201 149.982 104.804 141.657C179.138 121.826 255.399 166.029 275.144 240.375C288.013 288.836 273.702 338.147 241.584 372.106"
            stroke="black"
            strokeWidth="0.85"
            strokeMiterlimit="10"
          />
          <path
            d="M205.307 173.267C250.294 201.936 273.056 257.785 257.522 311.711C247.52 346.431 223.651 373.397 193.669 388.307"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M20.6429 314.031C13.7945 291.833 13.1194 267.447 20.0327 243.442C32.4642 200.285 66.3326 169.107 106.719 158.173"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M71.9326 334.323C53.452 312.605 45.8638 282.318 54.3543 252.831C67.8158 206.096 116.585 179.09 163.28 192.513C209.976 205.937 236.92 254.707 223.459 301.442C213.866 334.75 186.342 358.033 154.412 363.81"
            stroke="black"
            strokeWidth="0.83"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_558_35821">
            <rect
              width="396"
              height="398"
              fill="white"
              transform="translate(431.678 199) rotate(120)"
            />
          </clipPath>
        </defs>
      </svg>

      <svg
        className="absolute bottom-[167px] right-0 z-[-1]"
        width="370"
        height="398"
        fill="none"
        viewBox="0 0 370 398"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_558_35814)">
          <path
            d="M103.955 397.708C28.9064 352.485 -13.5326 263.704 4.45892 172.861C27.4252 56.9179 140.139 -18.4871 256.213 4.45347C285.598 10.2596 312.387 21.8121 335.63 37.7135"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M210.302 395.572C173.04 394.742 135.696 382.472 103.879 358.037C24.4476 297.017 9.57559 183.226 70.6644 103.883C131.753 24.5323 245.672 9.67702 325.104 70.6974C368.62 104.129 392.768 153.396 395.656 204.164"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M195.086 351.603C165.343 347.889 136.579 334.596 113.777 311.752C59.4358 257.293 59.5854 169.147 114.099 114.875C149.633 79.4999 199.493 67.2375 244.961 78.0726"
            stroke="black"
            strokeWidth="0.85"
            strokeMiterlimit="10"
          />
          <path
            d="M90.9004 208.908C93.2344 155.615 130.22 107.977 184.688 94.4672C219.758 85.7692 255.046 92.9578 282.949 111.467"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M305.137 298.451C289.337 315.481 268.555 328.259 244.31 334.274C200.719 345.087 156.784 331.345 127.122 301.836"
            stroke="black"
            strokeWidth="0.92"
            strokeMiterlimit="10"
          />
          <path
            d="M297.066 243.887C287.498 270.751 265.063 292.466 235.281 299.856C188.077 311.565 140.304 282.834 128.582 235.682C116.859 188.531 145.623 140.812 192.827 129.102C226.469 120.755 260.395 132.95 281.364 157.714"
            stroke="black"
            strokeWidth="0.83"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_558_35814">
            <rect width="396" height="398" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Footer />
    </div>
  )
}

export default MembershipsPage
