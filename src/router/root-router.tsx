import { createBrowserRouter } from 'react-router-dom'

import EventsPage from '@/pages/events/events.page'
import EventByIdPage from '@/pages/events/event-by-id/event-by-id.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <EventsPage />
  },
  {
    path: '/events/:id',
    element: <EventByIdPage />
  }
])

export { router }
