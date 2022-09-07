
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage';


export const TurnosRouter = () => {
  return (
    <Routes>

      <Route path='/' element={ <IndexPage />} />

    </Routes>
  )
}
