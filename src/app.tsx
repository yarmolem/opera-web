import { RouterProvider } from 'react-router-dom'

import { router } from '@/router/root-router'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
