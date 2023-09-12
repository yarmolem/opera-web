import Footer from '@/components/footer'
import Header from '@/components/header'

import IMAGE_1 from '@/assets/images/home/1.png'
import IMAGE_2 from '@/assets/images/home/2.png'
import IMAGE_3 from '@/assets/images/home/3.jpeg'
import IMAGE_4 from '@/assets/images/home/4.jpeg'
import IMAGE_5 from '@/assets/images/home/5.jpeg'
import IMAGE_6 from '@/assets/images/home/6.jpeg'
import IMAGE_7 from '@/assets/images/home/7.jpeg'
import IMAGE_12 from '@/assets/images/home/12.jpeg'
import LOGO_RED from '@/assets/images/home/logo-red.png'
import LOGO_BLACK from '@/assets/images/logo-black.png'
import LOGO_BLEND_RED from '@/assets/images/home/logo-blend-red.png'
import { useEffect, useState } from 'react'
import { Post } from '@/interface/post'
import { getAllPost } from '@/api/post'
import { cn } from '@/lib/utils'
import { Category } from '@/interface/category'
import { getCategoryById } from '@/api/category'

const Events = () => {
  const [posts, setPosts] = useState<(Post & { category: Category | null })[]>(
    []
  )

  useEffect(() => {
    getAllPost({ params: { page: 1, per_page: 3 } })
      .then(async (res) => {
        const _post: (Post & { category: Category })[] = []

        for (const post of res.data ?? []) {
          if (post.categories.length === 0) continue

          const categoryId = post.categories[0]
          const res = await getCategoryById(categoryId)
          const category = res.data ?? null

          _post.push({ ...post, category })
        }

        setPosts(_post)
      })
      .catch((err) => {
        console.log('[GET_ALL_POSTS]: ', err)
      })
  }, [])

  return (
    <div className="grid grid-cols-[minmax(0px,_729px)_minmax(0px,_357px)] grid-rows-2 h-[729px] gap-[29px]">
      {posts.map((post, i) => (
        <div
          key={post.id}
          className={cn(
            'relative w-full h-full flex flex-col justify-end items-start',
            i === 0 ? 'row-span-2' : ''
          )}
        >
          <img
            loading="lazy"
            alt={post.yoast_head_json.og_title}
            src={post.yoast_head_json.og_image[0].url}
            className={cn('absolute inset-0 w-full h-full object-cover z-0')}
          />

          <div className="z-10 pl-6 pb-12">
            <div className="bg-[#DD3633] p-1 text-white font-bold text-xs mb-4 w-max uppercase">
              {post.category?.name}
            </div>

            {i === 0 && (
              <div className="w-full max-w-md">
                <p className="text-[32px] font-bold tracking-[5px] text-white uppercase mb-4 leading-[38px]">
                  {post.yoast_head_json.og_title}
                </p>
                <p className="text-white">
                  {post.yoast_head_json.og_description}
                </p>
              </div>
            )}

            {i !== 0 && (
              <div className="w-full max-w-md">
                <p className="text-[16px] font-bold tracking-[5px] text-white uppercase leading-[19px]">
                  {post.title.rendered}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
      <Header color="red" />

      <div className="bg-black mb-[53px]">
        <div className="h-[563px] w-full max-w-[1366px] mx-auto relative grid grid-cols-[minmax(0px,_256px)_minmax(0px,_1fr)]">
          <div className="w-[540px] h-[357px] bg-black absolute bottom-0 left-0 z-10 pt-[65px] pl-[90px] pr-[99px]">
            <h2 className="hidden">UN VIAJE APASIONANTE</h2>
            <span className="mb-4 w-[249px] h-[42px] bg-[#BA91D4] grid place-items-center text-4xl font-bold tracking-[8px]">
              UN VIAJE
            </span>
            <span className="mb-4 w-[345px] h-[42px] bg-[#BA91D4] grid place-items-center text-4xl font-bold tracking-[6px]">
              APASIONANTE
            </span>

            <h1 className="mb-11 text-white text-xl">
              Explora con nosotros por el mundo de la ópera y el arte lírico en
              México.
            </h1>

            <button className="w-[251px] h-[38px] bg-[#DD3633] tracking-[1.6px] text-[#121212] font-bold">
              CONTÁCTANOS AQUÍ
            </button>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="255"
              height="206"
              viewBox="0 0 255 206"
              fill="none"
            >
              <g clipPath="url(#clip0_330_19226)">
                <rect x="-1" width="256" height="206" fill="#DD3633" />
                <path
                  d="M102.804 78.9383C187.847 78.9383 234 116.658 234 191.659C234 266.66 187.836 312.517 102.804 312.517C17.7712 312.517 -28 268.807 -28 191.659C-28 114.511 17.357 78.9383 102.804 78.9383ZM193.114 -14.0684L113.328 52.7953H57.043L97.1326 -14.0684H193.114ZM102.804 248.227C122.641 248.227 125.477 224.22 125.477 191.648C125.477 165.078 122.641 143.217 102.804 143.217C82.9658 143.217 80.5339 165.078 80.5339 191.648C80.5339 224.22 82.9658 248.227 102.804 248.227Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_330_19226">
                  <rect
                    width="256"
                    height="206"
                    fill="white"
                    transform="translate(-1)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="relative w-full h-full">
            <img
              alt=""
              src={IMAGE_1}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1107px] mx-auto mb-[91px]">
        <div className="grid grid-cols-[minmax(0px,_48px)_minmax(0px,_250px)_minmax(0px,_1fr)] grid-rows-[minmax(0px,_103px)_minmax(0px,_293px)_minmax(0px,_60px)]">
          <img src={LOGO_BLEND_RED} alt="" />
          <div className="bg-[#64ADEC] w-full h-full pl-[10px] pt-[14px]">
            <img src={LOGO_BLACK} alt="" />
          </div>
          <div className="bg-green-500 w-full h-full row-span-3">
            <img src={IMAGE_2} alt="" />
          </div>
          <div className=" w-full h-full col-span-2 relative">
            <div className="absolute top-0 left-0 bottom-0 p-6 text-white w-[499px] bg-black text-xl leading-6 flex flex-col">
              <p>
                Desde su fundación en 1985, Pro Ópera es un actor indispensable
                en la escena lírica de nuestro país gracias a nuestras
                actividades, publicaciones y patrocinios a diversos proyectos
                operísticos, al mismo tiempo ofrecemos beneficios a nuestros
                socios, honrando así nuestra misión original:
              </p>

              <p className="font-bold">
                APOYAR, PROMOVER Y DIFUNDIR LA ÓPERA EN MÉXICO.
              </p>

              <button className="w-[173px] h-[37px] grid place-items-center bg-[#DD3633] font-bold mt-auto">
                IR A NOSOTROS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1240px] mx-auto mb-[94px]">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[#DD2926] text-4xl font-medium tracking-[10px]">
            EVENTOS
          </h3>

          <button className="w-[173px] h-[37px] grid place-items-center border border-black font-bold">
            VER TODOS
          </button>
        </div>

        <div className="grid grid-cols-3 gap-x-[22px] gap-y-5 auto-rows-[minmax(0px,_442px)]">
          <div className="w-full h-full col-span-2 relative flex flex-col justify-end">
            <img
              alt=""
              src={IMAGE_3}
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />

            <div className="w-full max-w-[505px] grid grid-cols-[minmax(0px,_99px)_minmax(0px,_1fr)] grid-rows-[minmax(0px,_38px)_minmax(0px,_139px)] gap-1">
              <div className="bg-[#A00603] text-[#DD2926] row-span-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="99"
                  height="172"
                  viewBox="0 0 99 172"
                  fill="none"
                >
                  <g clipPath="url(#clip0_851_7869)">
                    <path
                      d="M66.4019 42.6009C115.425 42.6009 142.03 63.1594 142.03 104.037C142.03 144.916 115.419 169.909 66.4019 169.909C17.3849 169.909 -9 146.086 -9 104.037C-9 61.9894 17.1461 42.6009 66.4019 42.6009ZM118.461 -8.09082L72.4686 28.3521H40.0232L63.1329 -8.09082H118.461ZM66.4019 134.869C77.8374 134.869 79.4719 121.784 79.4719 104.031C79.4719 89.5498 77.8374 77.6349 66.4019 77.6349C54.9664 77.6349 53.5645 89.5498 53.5645 104.031C53.5645 121.784 54.9664 134.869 66.4019 134.869Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_851_7869">
                      <rect
                        width="178"
                        height="178"
                        fill="white"
                        transform="translate(-22)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-[#CD1815] flex items-center pl-2">
                <p className="text-white font-medium text-xl tracking-[6px]">
                  DANZA CONTEMPORÁNEA
                </p>
              </div>
              <div className="bg-black p-4 text-white text-xl uppercase">
                <p className="font-bold">Los miércoles 23 y 24 de junio</p>
                <p>TEATRO CD MX</p>
                <p className="font-bold">$2,500</p>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative flex flex-col justify-end">
            <img
              alt=""
              src={IMAGE_4}
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />

            <div className="w-full max-w-[505px] grid grid-cols-[minmax(0px,_99px)_minmax(0px,_1fr)] grid-rows-[minmax(0px,_38px)_minmax(0px,_139px)] gap-1">
              <div className="bg-[#BCD8D5] text-[#8AA09F] row-span-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="99"
                  height="172"
                  viewBox="0 0 99 172"
                  fill="none"
                >
                  <g clipPath="url(#clip0_851_7869)">
                    <path
                      d="M66.4019 42.6009C115.425 42.6009 142.03 63.1594 142.03 104.037C142.03 144.916 115.419 169.909 66.4019 169.909C17.3849 169.909 -9 146.086 -9 104.037C-9 61.9894 17.1461 42.6009 66.4019 42.6009ZM118.461 -8.09082L72.4686 28.3521H40.0232L63.1329 -8.09082H118.461ZM66.4019 134.869C77.8374 134.869 79.4719 121.784 79.4719 104.031C79.4719 89.5498 77.8374 77.6349 66.4019 77.6349C54.9664 77.6349 53.5645 89.5498 53.5645 104.031C53.5645 121.784 54.9664 134.869 66.4019 134.869Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_851_7869">
                      <rect
                        width="178"
                        height="178"
                        fill="white"
                        transform="translate(-22)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-[#BCD8D5] flex items-center justify-center">
                <p className="font-medium text-xl tracking-[6px]">
                  VIAJE A ROMA
                </p>
              </div>
              <div className="bg-black p-4 text-white text-xl uppercase">
                <p className="font-bold">Los miércoles 23 y 24 de junio</p>
                <p>TEATRO CD MX</p>
                <p className="font-bold">$2,500</p>
              </div>
            </div>
          </div>

          <div className=" w-full h-full relative flex flex-col justify-end">
            <img
              alt=""
              src={IMAGE_5}
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />

            <div className="w-full max-w-[505px] grid grid-cols-[minmax(0px,_99px)_minmax(0px,_1fr)] grid-rows-[minmax(0px,_38px)_minmax(0px,_139px)] gap-1">
              <div className="bg-[#DD3633] text-[#B9001D] row-span-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="99"
                  height="172"
                  viewBox="0 0 99 172"
                  fill="none"
                >
                  <g clipPath="url(#clip0_851_7869)">
                    <path
                      d="M66.4019 42.6009C115.425 42.6009 142.03 63.1594 142.03 104.037C142.03 144.916 115.419 169.909 66.4019 169.909C17.3849 169.909 -9 146.086 -9 104.037C-9 61.9894 17.1461 42.6009 66.4019 42.6009ZM118.461 -8.09082L72.4686 28.3521H40.0232L63.1329 -8.09082H118.461ZM66.4019 134.869C77.8374 134.869 79.4719 121.784 79.4719 104.031C79.4719 89.5498 77.8374 77.6349 66.4019 77.6349C54.9664 77.6349 53.5645 89.5498 53.5645 104.031C53.5645 121.784 54.9664 134.869 66.4019 134.869Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_851_7869">
                      <rect
                        width="178"
                        height="178"
                        fill="white"
                        transform="translate(-22)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-[#DD3633] flex items-center justify-center">
                <p className="text-white font-medium text-xl tracking-[6px]">
                  DANZA DE MOSCÚ
                </p>
              </div>
              <div className="bg-black p-4 text-white text-xl uppercase">
                <p className="font-bold">Los miércoles 23 y 24 de junio</p>
                <p>TEATRO CD MX</p>
                <p className="font-bold">$2,500</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-full col-span-2 relative flex flex-col justify-end">
            <img
              alt=""
              src={IMAGE_6}
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />

            <div className="w-full max-w-[505px] grid grid-cols-[minmax(0px,_99px)_minmax(0px,_1fr)] grid-rows-[minmax(0px,_38px)_minmax(0px,_139px)] gap-1">
              <div className="bg-[#0376B9] text-[#64ADEC] row-span-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="99"
                  height="172"
                  viewBox="0 0 99 172"
                  fill="none"
                >
                  <g clipPath="url(#clip0_851_7869)">
                    <path
                      d="M66.4019 42.6009C115.425 42.6009 142.03 63.1594 142.03 104.037C142.03 144.916 115.419 169.909 66.4019 169.909C17.3849 169.909 -9 146.086 -9 104.037C-9 61.9894 17.1461 42.6009 66.4019 42.6009ZM118.461 -8.09082L72.4686 28.3521H40.0232L63.1329 -8.09082H118.461ZM66.4019 134.869C77.8374 134.869 79.4719 121.784 79.4719 104.031C79.4719 89.5498 77.8374 77.6349 66.4019 77.6349C54.9664 77.6349 53.5645 89.5498 53.5645 104.031C53.5645 121.784 54.9664 134.869 66.4019 134.869Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_851_7869">
                      <rect
                        width="178"
                        height="178"
                        fill="white"
                        transform="translate(-22)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-[#64ADEC] flex items-center pl-2">
                <p className="text-white font-medium text-xl tracking-[6px]">
                  ÓPERA EN CASA
                </p>
              </div>
              <div className="bg-black p-4 text-white text-xl uppercase">
                <p className="font-bold">Los miércoles 23 y 24 de junio</p>
                <p>TEATRO CD MX</p>
                <p className="font-bold">$2,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1115px] mx-auto mb-[94px]">
        <h3 className="mb-[61px] text-4xl font-medium text-[#DD2926] tracking-[10.6px] text-center">
          CONTENIDO
        </h3>

        <div className="grid grid-cols-3 gap-x-[27px] gap-y-10 mb-[73px]">
          <div className="bg-[#994878] w-full h-[490px]"></div>

          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="w-full h-full flex flex-col">
                <div className="relative w-full h-[254px]">
                  <img
                    alt=""
                    src={IMAGE_7}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <h4 className="text-xl font-medium tracking-[6px] text-white bg-[#994878] py-[5px] px-6">
                  NOTICIAS
                </h4>
                <div className="w-full flex-1 bg-black flex flex-col">
                  <div className="p-4">
                    <p className="text-white text-sm leading-4">
                      Aquí compartimos noticias e información, nacional e
                      internacional, así como imágenes, audios, videos y
                      podcasts, carteles, efemérides, y comentarios sobre
                      diversos temas operísticos: próximos estrenos, conciertos,
                      clases magistrales y cursos, audiciones, así como todo
                      tipo de eventos de la comunidad operística.
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="w-[171px] h-[43px] bg-[#64ADEC]" />

                    <div className="flex justify-end items-end pb-4 pr-4">
                      <button className="w-[108px] h-[26px] bg-[#BCD8D5] flex items-center justify-center text-sm font-bold">
                        VER MÁS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="grid grid-cols-[minmax(0px,_442px)_minmax(0px,_1fr)] h-[380px] mb-[47px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#BA91D4] w-full h-[104px] py-6 pl-9 relative overflow-hidden">
              <img src={LOGO_BLACK} alt="" />

              <img alt="" src={LOGO_RED} className="absolute top-0 right-0" />
            </div>
            <div className="bg-[#DD3633] w-full h-[229px] py-6 px-12 flex-1 flex flex-col">
              <div className="mb-2 px-4 bg-[#64ADEC] w-max">
                <span className="text-2xl font-bold tracking-[5px]">
                  ADQUIERE NUESTRA
                </span>
              </div>
              <div className="mb-4 px-4 bg-[#64ADEC] w-max">
                <span className="text-2xl font-bold tracking-[5px]">
                  MEMEBRESÍA
                </span>
              </div>

              <p className="leading-[19px] text-white">
                Conviértete en miembro de Pro Ópera y accede antes que nadie a
                los diferentes eventos, viajes, cortesías y mucho más.
              </p>

              <button className="w-[304px] h-[37px] bg-black text-white mt-auto">
                CONOCE NUESTRAS MEMBRESÍAS
              </button>
            </div>
          </div>

          <div className="relative w-full h-full">
            <img
              alt=""
              src={IMAGE_12}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-[33px]">
          <h3 className="text-4xl font-medium tracking-[10px] text-[#DD2926] uppercase">
            articulos recientes
          </h3>

          <button className="w-[173px] h-[37px] grid place-items-center border border-black font-bold">
            VER TODOS
          </button>
        </div>

        <Events />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
