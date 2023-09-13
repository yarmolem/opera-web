import { axiosClient } from './client'

import type {
  PostCategoriesResponse,
  PostCategory
} from '@/interface/post-category'

interface GetAllPostCategoriesProps {
  params?: {
    page?: number
    per_page?: number
    search?: string
  }
}

export const getAllPostCategories = async ({
  params
}: GetAllPostCategoriesProps = {}) => {
  return await axiosClient.get<PostCategoriesResponse>(
    '/tribe/events/v1/categories',
    { params }
  )
}

export const getPostCategoryById = async (id: number) => {
  return await axiosClient.get<PostCategory>(
    `/tribe/events/v1/categories/${id}`
  )
}
