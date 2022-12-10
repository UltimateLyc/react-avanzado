// Reglas para crear un Hook
// Custom Hook es una funcion que utiliza otros hooks de react
// 1. Siempre debemos usar la palabra 'use' antes del archivo
// 2. Siempre deben de ser funciones ( a oartir de react v16 empezaron los hooks)
// 3. Siempre debe de usar al menos un hook de react (useState, useEffect, useRef, etc ...)
// 4. Deben de ser reutilizables, no son para casos especificos

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos de mi form en un obj
  const [input, setInput] = useState(defaults)

  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion q se ejecuta cuando se envia el form
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input) // esta es la funcion q se recibe por parametro
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
