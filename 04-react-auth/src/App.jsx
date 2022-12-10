import './App.css'
import { Header } from '@/components/header'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RoutesIndex />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
