import { createBrowserRouter } from 'react-router-dom'

import NewsPage from '@/pages/news/news.page'
import EventsPage from '@/pages/events/events.page'
import ContactPage from '@/pages/contact/contact.page'
import NewsByIdPage from '@/pages/news/news-by-id/news-by-id.page'
import EventByIdPage from '@/pages/events/event-by-id/event-by-id.page'
import MembershipsPage from '@/pages/memberships/memberships.page'
import FaqsPage from '@/pages/faqs/faqs.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <EventsPage />
  },
  {
    path: '/events/:id',
    element: <EventByIdPage />
  },
  {
    path: '/news',
    element: <NewsPage />
  },
  {
    path: '/news/:id',
    element: <NewsByIdPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/memberships',
    element: <MembershipsPage />
  },
  {
    path: '/faqs',
    element: <FaqsPage />
  }
])

export { router }
