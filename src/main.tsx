import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import dayjs from 'dayjs'

import './index.css'
import 'dayjs/locale/es'

dayjs.locale('es')

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
