import clsx from 'clsx'
import { useEffect, useState } from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'

import CARD_LOGO from '@/assets/images/news/card-logo.png'
import { Link } from 'react-router-dom'
import { Post } from '@/interface/post'
import { Category } from '@/interface/category'
import { getAllPost } from '@/api/post'
import { getCategoryById } from '@/api/category'
import dayjs from 'dayjs'
import { User } from '@/interface/user'
import { getUserById } from '@/api/users'

type Posts = (Post & { category: Category | null; user: User | null })[]

const CATEGORIES = [
  { id: 62, title: 'NOTICIA' },
  { id: 63, title: 'CRÍTICA' },
  { id: 66, title: 'ENTREVISTA' },
  { id: 65, title: 'ENSAYO' },
  { id: 64, title: 'RESEÑA' }
] as const

const NewsPage = () => {
  const [posts, setPosts] = useState<Posts>([])
  const [category, setCategory] = useState<{ id: number; title: string }>(
    CATEGORIES[0]
  )

  useEffect(() => {
    getAllPost({ params: { page: 1, per_page: 11, categories: category.id } })
      .then(async (res) => {
        const _post: Posts = []

        for (const post of res.data ?? []) {
          if (post.categories.length === 0) continue

          try {
            const userId = post.author
            const categoryId = post.categories[0]
            const user = await getUserById(userId).then(
              (res) => res.data ?? null
            )
            const category = await getCategoryById(categoryId).then(
              (res) => res.data ?? null
            )

            _post.push({ ...post, category, user })
          } catch (error) {
            console.log('[GET_CATEGORY_BY_ID]: ', error)
          }
        }

        setPosts(_post)
      })
      .catch((err) => {
        console.log('[GET_ALL_POSTS]: ', err)
      })
  }, [category])

  const hasMoreThanThreePosts = posts.length >= 3
  const [firstPost, secondPost, ...rest] = hasMoreThanThreePosts
    ? posts
    : [null, null, null]

  return (
    <div className="flex flex-col">
      <Header color="pink" className="mb-[53px]" />

      <div className="w-full max-w-[1168px] mx-auto grid grid-cols-5 gap-x-[26px] mb-[50px]">
        {CATEGORIES.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => setCategory({ id, title })}
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
        <div className="grid grid-cols-3 gap-x-5 mb-[60px]">
          <div className="col-span-2 flex flex-col">
            <p className="uppercase text-2xl text-[#994878] font-bold mb-[53px]">
              NOTICIA DE HOY
            </p>

            <div className="h-[464px] w-full relative bg-red-100 flex flex-col justify-end items-start">
              <div className="absolute inset-0 w-full h-full from-black to-transparent bg-gradient-to-t z-10" />
              <img
                alt={firstPost?.yoast_head_json.og_title}
                src={firstPost?.yoast_head_json.og_image?.[0].url}
                className="absolute w-full h-full inset-0 object-cover"
              />

              <div className="z-10 pl-6 pb-[105px]">
                <div className="bg-[#64ADEC] p-1 text-white font-bold text-xs mb-4 w-max uppercase">
                  {firstPost?.category?.name}
                </div>

                <div className="w-full max-w-md">
                  <p className="text-[32px] font-bold tracking-[5px] text-white uppercase leading-[38px]">
                    {firstPost?.title.rendered}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="uppercase text-2xl text-[#994878] font-bold mb-[53px]">
              popular
            </p>

            <div className="h-[464px] w-full relative bg-red-100 flex flex-col justify-end items-start">
              <div className="absolute inset-0 w-full h-full from-black to-transparent bg-gradient-to-t z-10" />
              <img
                alt={secondPost?.yoast_head_json.og_title}
                src={secondPost?.yoast_head_json.og_image?.[0].url}
                className="absolute w-full h-full inset-0 object-cover"
              />

              <div className="z-10 pl-6 pb-[105px]">
                <div className="bg-[#64ADEC] p-1 text-white font-bold text-xs mb-4 w-max uppercase">
                  {firstPost?.category?.name}
                </div>

                <div className="w-full max-w-md">
                  <p className="text-[16px] font-bold tracking-[5px] text-white uppercase leading-[19px]">
                    {firstPost?.title.rendered}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {rest.map((post) => (
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
                  {post?.category?.name ?? 'Sin categoria'}
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
          ))}
        </div>
      </div>

      <div className="w-full bg-[#994878] h-[43px] mt-[124px]"></div>
      <Footer />
    </div>
  )
}

export default NewsPage
