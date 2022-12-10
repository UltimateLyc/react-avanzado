import { Route, Routes } from 'react-router-dom'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import Portafolio from '../pages/Portafolio'

import Error404 from '../pages/Error404'
import PortafolioDetalle from '../pages/PortafolioDetalle'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portafolio' element={<Portafolio />}>
        <Route path=':pid' element={<PortafolioDetalle />} />
      </Route>
      <Route path='/contacto' element={<Contacto />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex
