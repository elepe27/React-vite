import { Routes, Route, Navigate } from 'react-router-dom';
import { IndexPage, NosotrosPage, PricingPage } from '../Pages';


export const InfoRouter = () => {
  return (
    <Routes>

        <Route path='/' element={ <IndexPage /> } />
        <Route path='/us' element={ <NosotrosPage /> } />
        <Route path='/pricing' element={ <PricingPage /> } />
        <Route path='/*' element={ < Navigate to='/'/> } />
    </Routes>
  )
}
