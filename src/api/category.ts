import { axiosClient } from './client'

import type { Category } from '@/interface/category'

interface GetAllCategoriesProps {
  params?: {
    page?: number
    per_page?: number
    search?: string
  }
}

export const getAllCategories = async ({
  params
}: GetAllCategoriesProps = {}) => {
  return await axiosClient.get<Category[]>('/wp/v2/categories', { params })
}

export const getCategoryById = async (id: number) => {
  return await axiosClient.get<Category>(`/wp/v2/categories/${id}`)
}
