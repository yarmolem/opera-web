import clsx from 'clsx'
import dayjs from 'dayjs'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'

import { getAllPost } from '@/api/post'
import { getUserById } from '@/api/users'
import { postCategories } from '@/data/post-categories'

import type { Post } from '@/interface/post'
import type { User } from '@/interface/user'
import type { AxiosResponse } from 'axios'
import CARD_LOGO from '@/assets/images/news/card-logo.png'

type Posts = (Post & { user: User | null })[]

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [posts, setPosts] = useState<Posts>([])
  const [category, setCategory] = useState<{ id: number; title: string }>(
    () => {
      if (searchParams.has('categoryId')) {
        const categoryId = Number(searchParams.get('categoryId'))
        return postCategories.find((c) => c.id === categoryId)!
      }

      return postCategories[0]
    }
  )

  useEffect(() => {
    getAllPost({ params: { page: 1, per_page: 11, categories: category.id } })
      .then(async (res) => {
        const _post: Posts = []
        const usersId = new Set<number>()
        const users: Record<number, User | null> = {}
        const promises: Promise<AxiosResponse<User | null>>[] = []

        for (const post of res.data) {
          if (usersId.has(post.author)) continue

          promises.push(getUserById(post.author))
          usersId.add(post.author)
        }

        const usersRes = await Promise.allSettled(promises).then((res) =>
          res.flat()
        )

        for (const response of usersRes) {
          if (response.status === 'rejected') {
            console.log('[GET_USER_BY_ID]: ', response.reason)
            continue
          }

          if (!response.value.data?.id) continue
          users[response.value.data.id] = response.value.data
        }

        for (const post of res.data ?? []) {
          _post.push({ ...post, user: users[post.author] })
        }

        setPosts(_post)
      })
      .catch((err) => {
        console.log('[GET_ALL_POSTS]: ', err)
      })
  }, [category])

  return (
    <div className="flex flex-col">
      <Header color="pink" className="mb-[53px]" />

      <div className="w-full max-w-[1168px] mx-auto grid grid-cols-5 gap-x-[26px] mb-[50px]">
        {postCategories.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => {
              setCategory({ id, title })
              setSearchParams({ categoryId: id.toString() })
            }}
            className={clsx(
              'px-4 h-[38px] border border-[#121212] font-bold  cursor-pointer transition-colors duration-300 select-none',
              {
                'bg-black text-white': category.id === id,
                'bg-white text-black hover:bg-black hover:text-white':
                  category.id !== id
              }
            )}
          >
            {title}S
          </button>
        ))}
      </div>

      <div className="w-full max-w-[1272px] mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {posts.map((post, i) => {
            if (i === 0) {
              return (
                <div
                  key={post?.id}
                  className="col-span-2 flex flex-col mb-[60px]"
                >
                  <p className="uppercase text-2xl text-[#994878] font-bold mb-[53px]">
                    NOTICIA DE HOY
                  </p>

                  <div className="h-[464px] w-full relative flex flex-col justify-end items-start">
                    <div className="absolute inset-0 w-full h-full from-black to-transparent bg-gradient-to-t z-10" />
                    <img
                      alt={post.yoast_head_json.og_title}
                      src={post.yoast_head_json.og_image?.[0].url}
                      className="absolute w-full h-full inset-0 object-cover"
                    />

                    <div className="z-10 pl-6 pb-[105px]">
                      <div className="bg-[#64ADEC] p-1 text-white font-bold text-xs mb-4 w-max uppercase">
                        {category.title}
                      </div>

                      <div className="w-full max-w-md">
                        <Link
                          to={{ pathname: `/news/${post?.id}` }}
                          className="text-[32px] font-bold tracking-[5px] text-white uppercase leading-[38px] hover:underline"
                        >
                          {post.title.rendered}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            if (i === 1) {
              return (
                <div key={post?.id} className="flex flex-col mb-[60px]">
                  <p className="uppercase text-2xl text-[#994878] font-bold mb-[53px]">
                    popular
                  </p>

                  <div className="h-[464px] w-full relative flex flex-col justify-end items-start">
                    <div className="absolute inset-0 w-full h-full from-black to-transparent bg-gradient-to-t z-10" />
                    <img
                      alt={post.yoast_head_json.og_title}
                      src={post.yoast_head_json.og_image?.[0].url}
                      className="absolute w-full h-full inset-0 object-cover"
                    />

                    <div className="z-10 pl-6 pb-[105px]">
                      <div className="bg-[#64ADEC] p-1 text-white font-bold text-xs mb-4 w-max uppercase">
                        {category.title}
                      </div>

                      <div className="w-full max-w-md">
                        <Link
                          to={{ pathname: `/news/${post?.id}` }}
                          className="text-[16px] font-bold tracking-[5px] text-white uppercase leading-[19px] hover:underline"
                        >
                          {post.title.rendered}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={post?.id}
                className="w-full flex flex-col relative h-[496px]"
              >
                <img src={CARD_LOGO} alt="" className="absolute top-0 left-6" />

                <div className="relative w-full h-[260px]">
                  <img
                    alt={post?.yoast_head_json.og_title}
                    src={post?.yoast_head_json.og_image?.[0].url}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <hr className="w-full h-2 bg-[#994878]" />

                <div className="px-4 py-2 border border-[#994878] h-[234px] w-full flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-4 text-xs">
                    <p>{dayjs(post?.date).format('DD MMM YYYY')}</p>
                    <p className="text-[#0376B9]">|</p>
                    <p>{post?.user?.name}</p>
                  </div>

                  <span className="h-[26px] flex items-center px-4 bg-[#994878] w-max text-white font-bold text-sm uppercase">
                    {category.title ?? 'Sin categoria'}
                  </span>

                  <Link
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}
                    to={{ pathname: `/news/${post?.id}` }}
                    className="text-[#D986BA] tracking-[4px] text-xl uppercase leading-6 hover:underline overflow-hidden"
                  >
                    {post?.yoast_head_json.og_title}
                  </Link>

                  <p
                    className=" text-[#444] text-ellipsis overflow-hidden mt-auto"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {post?.yoast_head_json.og_description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="w-full bg-[#994878] h-[43px] mt-[124px]"></div>
      <Footer />
    </div>
  )
}

export default NewsPage
