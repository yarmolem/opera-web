import { axiosClient } from './client'

import type { Post } from '@/interface/post'

interface GetAllPostProps {
  params?: {
    page?: number
    per_page?: number
    search?: string
    categories?: number
  }
}

export const getAllPost = async ({ params }: GetAllPostProps = {}) => {
  return await axiosClient.get<Post[]>('/wp/v2/posts', { params })
}

export const getPostById = async (id: number) => {
  return await axiosClient.get<Post>(`/wp/v2/posts/${id}`)
}
