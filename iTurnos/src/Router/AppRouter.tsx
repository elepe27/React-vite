import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/Router/AuthRouter";
import { TurnosRouter } from '../Turnos/Router/TurnosRouter';
import { InfoRouter } from '../InfoTurno/Router/InfoRouter';

export const AppRouter = () => {

  //TODO: Aquí validaremos la sesión del usuario.

  return (
    
    <Routes>
        <Route path="/turnos/*" element={ <TurnosRouter/>} />
        <Route path="/auth/*" element={ <AuthRouter/>} />
        <Route path="/*" element={ <InfoRouter/>} />

    </Routes>
  )
}
