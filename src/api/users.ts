import { axiosClient } from './client'

import type { User } from '@/interface/user'

interface GetAllUserProps {
  params?: {
    page?: number
    per_page?: number
    search?: string
  }
}

export const getAllUsers = async ({ params }: GetAllUserProps = {}) => {
  return await axiosClient.get<User[]>('/wp/v2/users', { params })
}

export const getUserById = async (id: number) => {
  return await axiosClient.get<User | null>(`/wp/v2/users/${id}`)
}
