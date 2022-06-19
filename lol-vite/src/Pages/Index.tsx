import { InputAdd } from "./Components/InputAdd"
import { useState, useEffect } from 'react';


const init = () => {
    return JSON.parse(localStorage.getItem('paises')!) || [];
}

export const Index = () => {

    const [paises, setPaises] = useState(init);

    
   
    const onAddCountry = ( value:any )=>{

        localStorage.setItem('paises',JSON.stringify([value, ... paises]));

        setPaises([value, ...paises]);

    }

  return (
    <div className="container">
      
      <h1>Buscar información de Paises</h1>
      <hr/>

      

      <InputAdd onHandleAdd={onAddCountry}/>

      <ul>
        { paises.map((value:any) => <li key={value}>{value}</li>) }
      </ul>

    </div>
  )
} 
