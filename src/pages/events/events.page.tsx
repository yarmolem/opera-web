import { useEffect, useState } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import Header from '@/components/header'
import Footer from '@/components/footer'

import { cn } from '@/lib/utils'
import { getAllPostCategories } from '@/api/post-category'
import { GetAllEventProps, getAllEvent } from '@/api/events'

import type { Event } from '@/interface/event'
import type { PostCategory } from '@/interface/post-category'

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [postCategories, setPostCategories] = useState<PostCategory[]>([])
  const [categorySelected, setCategorySelected] = useState<string | null>(null)

  useEffect(() => {
    const params: GetAllEventProps['params'] = {
      page: 1,
      per_page: 7,
      status: 'publish',
      end_date: dayjs('12-09-2025').format('YYYY-MM-DD'),
      start_date: dayjs('12-09-2008').format('YYYY-MM-DD')
    }

    if (categorySelected !== null) {
      params.categories = categorySelected
    }

    getAllEvent({ params })
      .then((res) => {
        setEvents(res.data.events)
      })
      .catch((err) => {
        console.log('[GET_ALL_EVENTS]: ', err)
      })

    return () => {}
  }, [categorySelected])

  useEffect(() => {
    getAllPostCategories({
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then((res) => {
        setPostCategories(res.data.categories)
      })
      .catch((err) => {
        console.log('[GET_ALL_POST_CATEGORIES]: ', err)
      })

    return () => {}
  }, [])

  return (
    <div className="flex flex-col">
      <Header color="red" className="mb-[55px]" />

      <div className="w-full max-w-[1168px] mx-auto grid grid-cols-6 gap-x-[26px] mb-[85px]">
        <button
          onClick={() => setCategorySelected(null)}
          className={clsx(
            'px-4 h-[38px] border border-[#121212] font-bold  cursor-pointer transition-colors duration-300 select-none',
            {
              'bg-black text-white': categorySelected === null,
              'bg-white text-black hover:bg-black hover:text-white':
                categorySelected !== null
            }
          )}
        >
          TODOS
        </button>

        {postCategories.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => setCategorySelected(name)}
            className={clsx(
              'px-4 h-[38px] border border-[#121212] font-bold  cursor-pointer transition-colors duration-300 select-none',
              {
                'bg-black text-white': categorySelected === name,
                'bg-white text-black hover:bg-black hover:text-white':
                  categorySelected !== name
              }
            )}
          >
            {name === 'Conferencia Pro Ópera' ? 'Pro Ópera' : name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-[1109px] mx-auto mb-[154px]">
        <h2 className="ml-6 uppercase text-[36px] text-[#DD2926] font-medium leading-[34px] mb-[55px]">
          cartelera
        </h2>

        <div className="flex flex-col gap-y-6">
          {events.map((event, i) => (
            <div key={i} className="flex items-center h-[200px]">
              <div
                className={clsx(
                  'w-[138px] h-full flex flex-col justify-center items-center mr-2',
                  {
                    'bg-[#DD3633]': event.categories[0].name !== 'Ópera',
                    'bg-[#64ADEC]': event.categories[0].name === 'Ópera'
                  }
                )}
              >
                <p className="text-[96px] leading-[102px]">
                  {dayjs(event.start_date).format('DD')}
                </p>
                <p className="text-[48px] leading-[31px] font-light uppercase">
                  {dayjs(event.start_date).format('MMM')}
                </p>
              </div>

              <div className="flex items-center mr-6">
                <div
                  className={cn('w-[60px] h-[200px] bg-red-200', {
                    'bg-[#a00604] text-[#DD2926]':
                      event.categories[0].name !== 'Ópera',
                    'bg-[#0876b9] text-[#64ADEC]':
                      event.categories[0].name === 'Ópera'
                  })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="200"
                    viewBox="0 0 60 200"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_880_22465)">
                      <path
                        d="M49.0658 49.302C105.801 49.302 136.591 73.0944 136.591 120.403C136.591 167.711 105.793 196.636 49.0658 196.636C-7.66175 196.636 -38.197 169.065 -38.197 120.403C-38.197 71.7403 -7.93805 49.302 49.0658 49.302ZM109.315 -9.36377L56.0868 32.8117H18.5377L45.2826 -9.36377H109.315ZM49.0658 156.084C62.3002 156.084 64.1918 140.941 64.1918 120.396C64.1918 103.636 62.3002 89.8469 49.0658 89.8469C35.8315 89.8469 34.2091 103.636 34.2091 120.396C34.2091 140.941 35.8315 156.084 49.0658 156.084Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_880_22465">
                        <rect
                          width="206"
                          height="206"
                          fill="white"
                          transform="translate(-46)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <img
                  alt={event.title}
                  src={event.image.url}
                  className="w-[200px] aspect-square"
                />
              </div>

              <div className="h-full flex-1 flex flex-col gap-y-2">
                <p
                  className={clsx(
                    'text-[24px] font-bold leading-8 uppercase text-ellipsis overflow-hidden flex-1',
                    {
                      'text-[#B9001D] ': event.categories[0].name !== 'Ópera',
                      'text-[#0376B9] ': event.categories[0].name === 'Ópera'
                    }
                  )}
                >
                  {event.title}
                </p>

                <span
                  className={clsx('p-1 text-xs leading-4 w-max', {
                    'bg-[#DD363399]': event.categories[0].name !== 'Ópera',
                    'bg-[#64ADEC]': event.categories[0].name === 'Ópera'
                  })}
                >
                  {event.categories[0].name}
                </span>

                <p>{event.venue.address}</p>
                <p
                  className="text-[#6D6D6D] text-ellipsis overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe nulla dolor similique odio excepturi perferendis
                  veritatis deleniti ducimus sint, officia molestias sequi, ea
                  culpa modi tempore magni facilis obcaecati velit?
                </p>

                <Link
                  to={`/events/${event.id}`}
                  className="w-[173px] h-[37px] grid place-items-center bg-black text-white font-bold"
                >
                  VER DETALLES
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EventsPage
