import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'

import IMAGE_1 from '@/assets/images/home/1.png'
import IMAGE_2 from '@/assets/images/home/2.png'
import IMAGE_12 from '@/assets/images/home/12.jpeg'
import LOGO_BLACK from '@/assets/images/logo-black.png'
import LOGO_RED from '@/assets/images/home/logo-red.png'
import LOGO_BLEND_RED from '@/assets/images/home/logo-blend-red.png'

import { cn, serializeParams } from '@/lib/utils'
import { getAllPost } from '@/api/post'
import { getAllEvent } from '@/api/events'
import { getCategoryById } from '@/api/category'
import { postCategories } from '@/data/post-categories'

import type { Post } from '@/interface/post'
import type { Event } from '@/interface/event'
import type { Category } from '@/interface/category'

const PostSection = () => {
  const [posts, setPosts] = useState<(Post & { category: Category | null })[]>(
    []
  )

  useEffect(() => {
    getAllPost({ params: { page: 1, per_page: 3 } })
      .then(async (res) => {
        const _post: (Post & { category: Category })[] = []

        for (const post of res.data ?? []) {
          if (post.categories.length === 0) continue

          try {
            const categoryId = post.categories[0]
            const res = await getCategoryById(categoryId)
            const category = res.data ?? null

            _post.push({ ...post, category })
          } catch (error) {
            console.log('[GET_CATEGORY_BY_ID]: ', error)
          }
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
          <div className="absolute inset-0 w-full h-full from-black to-transparent bg-gradient-to-t z-10" />

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

const EventSection = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    getAllEvent({
      params: {
        page: 1,
        per_page: 4,
        status: 'publish',
        end_date: dayjs('12-09-2025').format('YYYY-MM-DD'),
        start_date: dayjs('12-09-2008').format('YYYY-MM-DD')
      }
    })
      .then(async (res) => {
        setEvents(res.data.events ?? [])
      })
      .catch((err) => {
        console.log('[GET_ALL_EVENTS]: ', err)
      })
  }, [])

  return (
    <div className="grid grid-cols-3 gap-x-[22px] gap-y-5 auto-rows-[minmax(0px,_442px)]">
      {events.map((event, i) => {
        const isBig = i === 0 || i === 3

        return (
          <div
            key={event.id}
            className={cn(
              'w-full h-full relative flex flex-col justify-end',
              isBig ? 'col-span-2' : ''
            )}
          >
            <img
              alt=""
              src={event.image.url}
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
                <p className="text-white font-medium text-xl tracking-[6px] text-ellipsis overflow-hidden whitespace-nowrap">
                  {event.title}
                </p>
              </div>
              <div className="bg-black p-4 text-white text-xl uppercase">
                <p className="font-bold">
                  {dayjs(event.start_date).format('[El] DD [de] MMMM')}
                </p>
                <p>{event.venue.address}</p>
                <p className="font-bold">{event.cost}</p>
              </div>
            </div>
          </div>
        )
      })}
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

        <EventSection />
      </div>

      <div className="w-full max-w-[1270px] mx-auto mb-[94px]">
        <h3 className="mb-[61px] text-4xl font-medium text-[#DD2926] tracking-[10.6px] text-center">
          CONTENIDO
        </h3>

        <div className="grid grid-cols-3 gap-x-5 gap-y-10 mb-[73px]">
          <div className="w-full h-[490px] flex flex-col bg-green-50 gap-y-3">
            <div className="flex gap-x-1 h-[128px]">
              <div className="w-full max-w-[335px] bg-[#D986BA] flex items-center justify-center">
                <svg
                  width="198"
                  height="74"
                  viewBox="0 0 198 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.9597 28.7195C45.0097 28.7195 51.5497 33.7695 51.5497 43.8095C51.5497 53.8495 45.0097 59.9895 32.9597 59.9895C20.9097 59.9895 14.4297 54.1395 14.4297 43.8095C14.4297 33.4795 20.8597 28.7195 32.9597 28.7195ZM45.7497 16.2695L34.4497 25.2195H26.4797L32.1597 16.2695H45.7597H45.7497ZM32.9597 51.3795C35.7697 51.3795 36.1697 48.1695 36.1697 43.8095C36.1697 40.2495 35.7697 37.3295 32.9597 37.3295C30.1497 37.3295 29.7997 40.2595 29.7997 43.8095C29.7997 48.1695 30.1397 51.3795 32.9597 51.3795Z"
                    fill="white"
                  />
                  <path
                    d="M54.2207 29.4097H67.6507V34.8597H67.7607C69.7707 30.3797 72.6907 28.7197 77.4007 28.7197C86.9807 28.7197 90.5407 36.1797 90.5407 44.8397C90.5407 52.9297 86.8107 59.9897 77.8007 59.9897C73.9607 59.9897 71.0307 58.6697 68.7907 55.4597H68.6807V73.0597H54.2207V29.4097ZM71.9507 51.0397C74.9907 51.0397 75.5107 47.9997 75.5107 44.8397C75.5107 41.6797 74.9907 38.3597 71.8407 38.3597C68.6907 38.3597 68.2807 41.6897 68.2807 44.4997C68.2807 47.9997 68.7407 51.0397 71.9507 51.0397Z"
                    fill="white"
                  />
                  <path
                    d="M107.21 47.8305C107.44 51.5605 110.94 52.4205 115.18 52.4205C119.14 52.4205 122.7 51.7305 124.99 50.5305V58.2805C121.15 59.4805 116.56 60.0005 111.51 60.0005C99.4005 60.0005 92.9805 54.1505 92.9805 43.8205C92.9805 33.4905 99.4105 28.7305 111.51 28.7305C123.61 28.7305 127.17 35.9605 127.17 46.0605V47.8405H107.2L107.21 47.8305ZM114.67 41.5205C114.67 39.2305 114.33 35.6105 111.06 35.6105C107.79 35.6105 106.99 39.1705 107.16 41.5205H114.68H114.67Z"
                    fill="white"
                  />
                  <path
                    d="M143.88 29.4097V36.1797H143.99C145.71 31.9297 148.58 28.7197 153.11 28.7197C153.97 28.7197 154.89 28.8297 155.46 29.0097V40.9997C154.77 40.7097 153.51 40.5397 152.19 40.5397C148.17 40.5397 144.79 44.0397 144.79 48.4597V59.2997H130.33V29.4097H143.87H143.88Z"
                    fill="white"
                  />
                  <path
                    d="M159.95 30.4397C164.25 29.2397 166.84 28.7197 172.46 28.7197C180.72 28.7197 190.76 30.2097 190.76 41.1097V59.2997H177.33V54.9997H177.22C175.21 58.3797 171.54 59.9897 167.47 59.9897C161.9 59.9897 156.51 57.4697 156.51 51.2097C156.51 42.0297 164.77 40.1897 171.94 40.1897C173.95 40.1897 176.24 40.4797 177.56 40.5897C177.5 36.7497 173.54 36.2897 169.93 36.2897C166.32 36.2897 162.82 37.3797 159.95 38.8097V30.4297V30.4397ZM177.56 46.1597H176.13C173.15 46.1597 169.7 46.4497 169.7 49.5497C169.7 51.6197 170.85 52.4197 173.08 52.4197C176.06 52.4197 177.56 49.6697 177.56 47.0797V46.1597Z"
                    fill="white"
                  />
                  <path
                    d="M0.760548 59.3302V55.4002H2.36055V55.3702C1.05055 54.7802 0.560547 53.9302 0.560547 52.5502C0.560547 49.7502 2.74055 48.7002 5.28055 48.7002C7.65055 48.7002 9.71055 49.7902 9.71055 52.4302C9.71055 53.5602 9.32055 54.4102 8.38055 55.0702V55.1002H13.0305V59.3302H0.750547H0.760548ZM7.09055 54.1402C7.09055 53.2502 6.20055 53.1002 5.28055 53.1002C4.36055 53.1002 3.38055 53.2502 3.38055 54.1702C3.38055 55.0902 4.35055 55.2102 5.18055 55.2102C6.20055 55.2102 7.09055 55.0802 7.09055 54.1402Z"
                    fill="white"
                  />
                  <path
                    d="M0.760548 43.7904H2.74055V43.7604C1.50055 43.2604 0.560547 42.4204 0.560547 41.0904C0.560547 40.8404 0.590547 40.5704 0.640547 40.4004H4.15055C4.07055 40.6004 4.02055 40.9704 4.02055 41.3604C4.02055 42.5404 5.04055 43.5304 6.34055 43.5304H9.51055V47.7604H0.760548V43.8004V43.7904Z"
                    fill="white"
                  />
                  <path
                    d="M0.550781 34.2505C0.550781 30.7205 2.03078 28.8105 4.97078 28.8105C7.91078 28.8105 9.71078 30.7205 9.71078 34.2505C9.71078 37.7805 8.00078 39.6705 4.97078 39.6705C1.94078 39.6705 0.550781 37.7905 0.550781 34.2505ZM7.18078 34.2505C7.18078 33.4305 6.24078 33.3105 4.96078 33.3105C3.92078 33.3105 3.06078 33.4305 3.06078 34.2505C3.06078 35.0705 3.92078 35.1705 4.96078 35.1705C6.24078 35.1705 7.18078 35.0705 7.18078 34.2505Z"
                    fill="white"
                  />
                  <path
                    d="M65.1484 16.9814C65.2559 16.9814 65.3311 17.0137 65.3848 17.0889L66.0615 18.0879C66.083 18.1201 66.0938 18.1523 66.0938 18.2061C66.0938 18.3242 66.0293 18.4424 65.9111 18.5391C65.2773 19.0869 64.5146 19.5059 63.6445 19.8174C62.7744 20.1182 61.915 20.2686 61.0557 20.2686C59.5625 20.2686 58.1875 19.9141 56.9307 19.1943C55.6846 18.4746 54.6963 17.4863 53.9658 16.251C53.2354 15.0156 52.8701 13.6514 52.8701 12.1797C52.8701 10.6973 53.2354 9.33301 53.9658 8.09766C54.6963 6.8623 55.6846 5.87402 56.9307 5.1543C58.1875 4.43457 59.5625 4.06934 61.0557 4.06934C61.8828 4.06934 62.7207 4.23047 63.5908 4.54199C64.4609 4.85352 65.2451 5.27246 65.9434 5.79883C66.0723 5.90625 66.1367 6.01367 66.1367 6.13184C66.1367 6.18555 66.126 6.22852 66.0938 6.27148L65.3955 7.24902C65.3418 7.31348 65.2773 7.3457 65.1807 7.3457C65.084 7.3457 64.9873 7.31348 64.8906 7.23828C63.6875 6.34668 62.3125 5.83105 61.0557 5.83105C59.8955 5.83105 58.832 6.11035 57.8545 6.67969C56.877 7.24902 56.1143 8.01172 55.5449 8.98926C54.9756 9.95605 54.6963 11.0195 54.6963 12.1797C54.6963 13.3291 54.9756 14.3818 55.5449 15.3486C56.1143 16.3154 56.8877 17.0781 57.8652 17.6475C58.8428 18.2168 59.9062 18.4961 61.0557 18.4961C62.334 18.4961 63.7197 17.9805 64.8691 17.0889C64.9443 17.0137 65.041 16.9814 65.1484 16.9814ZM76.6095 4.08008C78.1027 4.08008 79.4562 4.44531 80.6915 5.16504C81.9269 5.88477 82.9044 6.8623 83.6241 8.09766C84.3439 9.33301 84.7091 10.6973 84.7091 12.1904C84.7091 13.6729 84.3439 15.0264 83.6241 16.2617C82.9044 17.4971 81.9269 18.4639 80.6915 19.1836C79.4562 19.9033 78.1027 20.2578 76.6095 20.2578C75.1271 20.2578 73.7628 19.9033 72.5275 19.1836C71.2921 18.4639 70.3038 17.4971 69.5841 16.2617C68.8644 15.0264 68.5099 13.6729 68.5099 12.1904C68.5099 10.6973 68.8644 9.33301 69.5841 8.09766C70.3038 6.8623 71.2921 5.88477 72.5275 5.16504C73.7628 4.44531 75.1271 4.08008 76.6095 4.08008ZM76.6095 18.4531C77.7589 18.4531 78.8224 18.1738 79.7784 17.626C80.7452 17.0674 81.5079 16.3154 82.0558 15.3594C82.6144 14.4033 82.8937 13.3398 82.8937 12.1904C82.8937 11.0303 82.6144 9.9668 82.0558 9.01074C81.5079 8.05469 80.7452 7.29199 79.7784 6.7334C78.8224 6.1748 77.7589 5.89551 76.6095 5.89551C75.4601 5.89551 74.3966 6.1748 73.4405 6.7334C72.4845 7.29199 71.7218 8.05469 71.1632 9.02148C70.6154 9.97754 70.3361 11.041 70.3361 12.1904C70.3361 13.3398 70.6154 14.4033 71.1632 15.3594C71.7218 16.3154 72.4845 17.0674 73.4405 17.626C74.3966 18.1738 75.4601 18.4531 76.6095 18.4531ZM101.552 4.55273V19.7529C101.552 19.9355 101.466 20.0215 101.283 20.0215H100.07C99.8655 20.0215 99.7043 19.9355 99.5862 19.7529L90.2297 6.96973V19.7529C90.2297 19.9355 90.1438 20.0215 89.9612 20.0215H88.6828C88.5002 20.0215 88.4143 19.9355 88.4143 19.7529V4.55273C88.4143 4.37012 88.5002 4.28418 88.6828 4.28418H90.0041C90.1868 4.28418 90.3479 4.3916 90.4875 4.5957L99.7473 17.0996V4.55273C99.7473 4.37012 99.8332 4.28418 100.005 4.28418H101.283C101.466 4.28418 101.552 4.37012 101.552 4.55273ZM104.849 5.74512V4.62793C104.849 4.42383 104.978 4.30566 105.182 4.30566H115.344C115.548 4.30566 115.677 4.42383 115.677 4.62793V5.73438C115.677 5.93848 115.548 6.07812 115.344 6.07812H111.187V19.7422C111.187 19.9678 111.069 20.0752 110.843 20.0752H109.694C109.49 20.0752 109.371 19.957 109.371 19.7422V6.07812H105.182C104.978 6.07812 104.849 5.94922 104.849 5.74512ZM118.963 19.6562V4.63867C118.963 4.41309 119.082 4.30566 119.307 4.30566H129.147C129.373 4.30566 129.512 4.42383 129.512 4.62793V5.65918C129.512 5.86328 129.373 5.99219 129.147 5.99219H120.779V11.1699H127.546C127.804 11.1699 127.955 11.2988 127.955 11.5137V12.5342C127.955 12.7383 127.804 12.8672 127.546 12.8672H120.779V18.3027H129.276C129.566 18.3027 129.738 18.4424 129.738 18.7002V19.667C129.738 19.8818 129.587 20 129.362 20H119.307C119.082 20 118.963 19.8818 118.963 19.6562ZM146.602 4.55273V19.7529C146.602 19.9355 146.516 20.0215 146.334 20.0215H145.12C144.916 20.0215 144.754 19.9355 144.636 19.7529L135.28 6.96973V19.7529C135.28 19.9355 135.194 20.0215 135.011 20.0215H133.733C133.55 20.0215 133.464 19.9355 133.464 19.7529V4.55273C133.464 4.37012 133.55 4.28418 133.733 4.28418H135.054C135.237 4.28418 135.398 4.3916 135.538 4.5957L144.797 17.0996V4.55273C144.797 4.37012 144.883 4.28418 145.055 4.28418H146.334C146.516 4.28418 146.602 4.37012 146.602 4.55273ZM153.176 4.56348V19.7422C153.176 19.9248 153.079 20.0107 152.896 20.0107H151.629C151.446 20.0107 151.36 19.9248 151.36 19.7422V4.56348C151.36 4.38086 151.446 4.29492 151.629 4.29492H152.896C153.079 4.29492 153.176 4.38086 153.176 4.56348ZM157.933 19.6562V4.63867C157.933 4.43457 158.062 4.30566 158.266 4.30566H162.445C163.96 4.30566 165.335 4.64941 166.57 5.33691C167.806 6.01367 168.783 6.95898 169.481 8.16211C170.18 9.35449 170.534 10.6973 170.534 12.1689C170.534 13.6406 170.18 14.9727 169.471 16.165C168.772 17.3574 167.795 18.292 166.559 18.9795C165.324 19.6562 163.96 20 162.445 20H158.277C158.062 20 157.933 19.8711 157.933 19.6562ZM159.749 18.2598H162.434C165.915 18.3242 168.772 15.499 168.708 12.1689C168.708 11.0303 168.429 9.98828 167.881 9.05371C167.333 8.1084 166.57 7.36719 165.614 6.83008C164.658 6.28223 163.605 6.01367 162.434 6.01367L159.749 6.02441V18.2598ZM181.275 4.08008C182.769 4.08008 184.122 4.44531 185.357 5.16504C186.593 5.88477 187.57 6.8623 188.29 8.09766C189.01 9.33301 189.375 10.6973 189.375 12.1904C189.375 13.6729 189.01 15.0264 188.29 16.2617C187.57 17.4971 186.593 18.4639 185.357 19.1836C184.122 19.9033 182.769 20.2578 181.275 20.2578C179.793 20.2578 178.429 19.9033 177.193 19.1836C175.958 18.4639 174.97 17.4971 174.25 16.2617C173.53 15.0264 173.176 13.6729 173.176 12.1904C173.176 10.6973 173.53 9.33301 174.25 8.09766C174.97 6.8623 175.958 5.88477 177.193 5.16504C178.429 4.44531 179.793 4.08008 181.275 4.08008ZM181.275 18.4531C182.425 18.4531 183.488 18.1738 184.444 17.626C185.411 17.0674 186.174 16.3154 186.722 15.3594C187.28 14.4033 187.56 13.3398 187.56 12.1904C187.56 11.0303 187.28 9.9668 186.722 9.01074C186.174 8.05469 185.411 7.29199 184.444 6.7334C183.488 6.1748 182.425 5.89551 181.275 5.89551C180.126 5.89551 179.062 6.1748 178.106 6.7334C177.15 7.29199 176.388 8.05469 175.829 9.02148C175.281 9.97754 175.002 11.041 175.002 12.1904C175.002 13.3398 175.281 14.4033 175.829 15.3594C176.388 16.3154 177.15 17.0674 178.106 17.626C179.062 18.1738 180.126 18.4531 181.275 18.4531Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1 bg-[#994878]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="128"
                  viewBox="0 0 70 128"
                  fill="none"
                >
                  <g clipPath="url(#clip0_880_1525)">
                    <path
                      d="M70.0001 0H0.312988V128H70.0001V0Z"
                      fill="#994878"
                    />
                    <path
                      d="M42.9027 40.18C73.0727 40.18 89.4527 52.82 89.4527 77.97C89.4527 103.12 73.0727 118.49 42.9027 118.49C12.7327 118.49 -3.50732 103.83 -3.50732 77.97C-3.50732 52.11 12.5827 40.18 42.9027 40.18ZM74.9427 9L46.6327 31.42H26.6627L40.8827 9H74.9427ZM42.9027 96.94C49.9427 96.94 50.9427 88.89 50.9427 77.97C50.9427 69.06 49.9327 61.73 42.9027 61.73C35.8727 61.73 35.0027 69.06 35.0027 77.97C35.0027 88.89 35.8627 96.94 42.9027 96.94Z"
                      fill="#D986BA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_880_1525">
                      <rect
                        width="69.6871"
                        height="128"
                        fill="white"
                        transform="translate(0.312988)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex-1 w-full bg-[#994878] grid place-items-center">
              <div className="w-full max-w-[348px] text-white">
                <p className="text-4xl font-medium leading-[42px] tracking-[10px] uppercase">
                  DISFRUTA NUESTRO CONTENIDO
                </p>
                <p className="leading-[18px] tracking-[2px]">
                  Pro Ópera, desde que se constituyó en asociación civil el 19
                  de octubre de 1985, tiene la misión de apoyar, promover y
                  difundir la ópera en México, a través de nuestro equipo
                  formado por periodistas especializados y colaboradores
                  diversos que publicamos en nuestra plataforma digital
                  multimedia y en redes sociales. Nuestro contenido consta de:-
                </p>
              </div>
            </div>
          </div>

          {postCategories.map(({ id, image, title, description }) => (
            <div key={id} className="w-full h-full flex flex-col">
              <div className="relative w-full h-[254px]">
                <img
                  alt=""
                  src={image}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h4 className="text-xl font-medium tracking-[6px] text-white bg-[#994878] py-[5px] px-6">
                {title}
              </h4>
              <div className="w-full flex-1 bg-black flex flex-col">
                <div className="p-4">
                  <p className="text-white text-sm leading-4">{description}</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="w-[171px] h-[43px] bg-[#64ADEC]" />

                  <div className="flex justify-end items-end pb-4 pr-4">
                    <Link
                      to={`/news?${serializeParams({
                        categoryId: id.toString()
                      })}`}
                      className="w-[108px] h-[26px] bg-[#BCD8D5] flex items-center justify-center text-sm font-bold"
                    >
                      VER MÁS
                    </Link>
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

        <PostSection />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
