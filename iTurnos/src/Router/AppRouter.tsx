import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/Router/AuthRouter";
import { TurnosRouter } from '../Turnos/Router/TurnosRouter';

export const AppRouter = () => {
  return (
    
    <Routes>
        <Route path="/*" element={ <TurnosRouter/>} />
        <Route path="/auth/*" element={ <AuthRouter/>} />

    </Routes>
  )
}
