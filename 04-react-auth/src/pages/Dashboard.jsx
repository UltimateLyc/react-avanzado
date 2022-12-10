import { getSingleUser } from '../services/userServices'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('ocurrio un error en dashboard' + error.message)
      }
    }
    fetchUserData()
  }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      {
        user?.role === 'ADMIN'
          ? <h3>Hola Admin</h3>
          : <h3>Hola Customer</h3>
      }
      {
        user?.role === 'CUSTOMER' && <h4>Bienvenido sea el cliente</h4>
      }
      {
        user?.role === 'ADMIN' && <h4>Bienvenido sea el Admin</h4>
      }
      {
        userData?.first_name && <p className='first_name'>First name: {userData.first_name}</p>
      }
      {
        userData?.last_name && <p className='last_name'>Last name: {userData.last_name}</p>
      }
      {
        userData?.gender && <p className='gender'>Gender: {userData.gender}</p>
      }
      {
        userData?.email && <p className='email'>Email: {userData.email}</p>
      }

    </div>
  )
}

export default Dashboard
