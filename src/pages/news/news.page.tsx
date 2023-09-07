import clsx from 'clsx'
import { useState } from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'

import IMAGE_1 from '@/assets/images/news/1.png'
import IMAGE_2 from '@/assets/images/news/2.png'
import IMAGE_3 from '@/assets/images/news/3.png'
import CARD_LOGO from '@/assets/images/news/card-logo.png'
import { Link } from 'react-router-dom'

const CATEGORIES = [
  'NOTICIAS',
  'CRÍTICAS',
  'ENTREVISTAS',
  'ENSAYOS',
  'RESEÑAS'
] as const

const NewsPage = () => {
  const [activeKey, setActiveKey] = useState('NOTICIAS')

  return (
    <div className="flex flex-col">
      <Header color="pink" />

      <div className="w-full max-w-[1168px] mx-auto grid grid-cols-5 gap-x-[26px] mb-[50px]">
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

      <div className="w-full max-w-[1272px] mx-auto">
        <div className="grid grid-cols-3 gap-x-5 mb-[60px]">
          <div className="col-span-2 flex flex-col">
            <p className="uppercase text-2xl text-[#994878] font-bold mb-[53px]">
              NOTICIA DE HOY
            </p>

            <div className="h-[464px] w-full relative bg-red-100">
              <img
                alt=""
                src={IMAGE_1}
                className="absolute w-full h-full inset-0"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="uppercase text-2xl text-[#994878] font-bold mb-[53px]">
              popular
            </p>

            <div className="h-[464px] w-full relative bg-red-100">
              <img
                alt=""
                src={IMAGE_2}
                className="absolute w-full h-full inset-0"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="w-full h-full flex flex-col relative">
                <img src={CARD_LOGO} alt="" className="absolute top-0 left-6" />

                <img src={IMAGE_3} alt="" className="w-full" />
                <hr className="w-full h-2 bg-[#994878]" />

                <div className="p-4 border border-[#994878] flex-1 w-full flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-4 text-xs">
                    <p>22 oct 2023</p>
                    <p className="text-[#0376B9]">|</p>
                    <p>JUAN CABAZOS</p>
                  </div>

                  <span className="py-2 px-4 bg-[#994878] w-max text-white font-bold text-sm">
                    ÓPERA
                  </span>

                  <Link to="/news/1">
                    <p className="text-[#D986BA] tracking-[4px] text-xl uppercase leading-6">
                      Musicaroo publica una Guía de teoría musical
                    </p>
                  </Link>

                  <p className="mt-auto text-[#444]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full bg-[#994878] h-[43px] mt-[124px]"></div>
      <Footer />
    </div>
  )
}

export default NewsPage
