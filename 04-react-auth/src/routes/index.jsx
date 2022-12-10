import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Secret, Singup, Dashboard } from '../pages'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/singup' element={<Singup />} />
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login' replace />} />
    </Routes>
  )
}

export default RoutesIndex
