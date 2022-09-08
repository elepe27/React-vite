import { Routes, Route, Navigate } from 'react-router-dom';
import { IndexPage } from '../Pages';


export const InfoRouter = () => {
  return (
    <Routes>

        <Route path='/' element={ <IndexPage /> } />
        <Route path='/*' element={ < Navigate to='/info'/> } />
    </Routes>
  )
}
