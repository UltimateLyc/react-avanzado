import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

// 1 Creacion del contexto vacio
const SongContext = createContext()

// 2 Creacion del componente proveedor del contexto
function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // Loader
  const [selectedSong, setSelectedSong] = useState({}) // Info de la cancion seleccionada
  const [search, setSearch] = useState('') // Guardamos la palaba que se busca

  // simualar una llamada a un API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    // Siempre se llama value el prop del Provider con la data
    // Value es un obj que indica que datos son globales
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

// 3 Consumidor del contexto
// Esto va a brindar acceso a la data de los componentes

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// 4 Exportar las funciones del Provider y el Consumer
// Para que puedan ser invocados en nuestros componentes
export {
  SongProvider,
  useSongContext
}

// Uso de context
// Vamos a ir a nuestro componente superior (por exm Home)
// Envolver a los componentes que necesitaran  la informacion del contexto
