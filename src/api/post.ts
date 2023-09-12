import { axiosClient } from './client'

import type { Post } from '@/interface/post'

interface GetAllPostProps {
  params?: {
    page?: number
    per_page?: number
    search?: string
  }
}

export const getAllPost = async ({ params }: GetAllPostProps = {}) => {
  return await axiosClient.get<Post[]>('/posts', { params })
}
