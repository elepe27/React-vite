import { InputAdd } from "./Components/InputAdd"
import { useState, useEffect } from 'react';
import { CardCountry } from "./Components/CardCountry";
import { ICountryName } from "./Interfaces/ICountryName";


const init = () => {
  return JSON.parse(localStorage.getItem('paises')!) || [];
}

export const Index = () => {

  const [paises, setPaises] = useState(init);



  const onAddCountry = (value: any) => {

  

    setPaises([value, ...paises]);

  }

  const onDeleteCountry = (values:any) => {


    setPaises(
      paises.filter(pais => pais !== values)
    )

  }

  useEffect(()=>{
    localStorage.setItem('paises', JSON.stringify(paises));
  },[paises])



  return (
    <div className="container">

      <h1>Buscar información de Paises</h1>
      <hr />



      <InputAdd onHandleAdd={onAddCountry} />
      <br />




      <div className="columns is-mobile">
        {paises.map((value: any) => (
          //  <li key={value}>{value}</li>
          <CardCountry key={value} value={value} onDeleteCountry={ onDeleteCountry } />
        ))}

      </div>
    </div>
  )
} 
