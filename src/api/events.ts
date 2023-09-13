import { axiosClient } from './client'

import type { EventResponse } from '@/interface/event'

interface GetAllEventProps {
  params?: {
    page?: number
    per_page?: number
    search?: string
    start_date?: string
    end_date?: string
    status?: 'publish'
  }
}

export const getAllEvent = async ({ params }: GetAllEventProps = {}) => {
  return await axiosClient.get<EventResponse>('/tribe/events/v1/events', {
    params
  })
}

/**
 * https://proopera.org.mx/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2008-09-12%2000%3A00%3A00&end_date=2025-09-12%2023%3A59%3A59&status=publish
 */
