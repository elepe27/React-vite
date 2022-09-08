
import { Route, Routes, Navigate } from 'react-router-dom';
import { IndexPage } from '../pages';


export const TurnosRouter = () => {
  return (
    <Routes>

      <Route path='/' element={ <IndexPage />} />
      <Route path='/*' element={ <Navigate to='/turnos/' />} />

    </Routes>
  )
}
