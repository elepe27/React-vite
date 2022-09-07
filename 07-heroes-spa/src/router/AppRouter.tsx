import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { RootState } from '../../../08-journal-app/src/store/store';


export const AppRouter = () => {
    


    return (
        <>

            
                <Routes>

                    <Route path='login' element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    } />


                    <Route path="/*" element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    } />
                    {/* // <Route path="/*" element={<HeroesRoutes />} /> */}
                    {/* // <Route path="login" element={<LoginPage />} /> */}

                </Routes>
            



        </>
    )
}
