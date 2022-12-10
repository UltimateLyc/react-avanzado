import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForms = () => {
  // Paso 1: Creamos los estados donde vamos a guardar la informacion
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso 4: Manejar lo que va a suceder cuando se envie el formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }

  // Paso 2: creanis ek formulario con base jsx
  return (
    <div className='login'>
      <div className='login-container'>
        <img
          src={logo}
          alt='logo'
          className='logo'
          width='200px'
          height='200px'
        />
        <form>
          {/* Paso 3: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='correo@correo.com'
            id='email'
            onChange={(event) => { setEmail(event.target.value) }}
          />
          <label htmlFor='password' />
          <input
            type='password'
            name='password'
            placeholder='password'
            id='password'
            onChange={(event) => { setPassword(event.target.value) }}
          />
          <button
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForms
