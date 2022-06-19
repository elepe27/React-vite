import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Index } from "./Pages/Index";
import { Navbar } from "./Shared/Navbar";

export const AppRoutes = () => {
  return (
    
    
    <Router>
      <div>
        <Navbar />

        <div className='container'>
          <Routes >
            <Route path="/" element={<Index />} />
            
            
            



          </Routes>
        </div>



      </div>
    </Router>
    
  )
}
