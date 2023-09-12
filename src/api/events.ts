import { axiosClient } from './client'

import type { Event } from '@/interface/event'

interface GetAllEventProps {
  params?: {
    page?: number
    per_page?: number
    search?: string
  }
}

export const getAllEvent = async ({ params }: GetAllEventProps = {}) => {
  return await axiosClient.get<Event[]>('/tribe_events_cat', { params })
}
