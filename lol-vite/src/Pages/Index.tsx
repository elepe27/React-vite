import { InputAdd } from "./Components/InputAdd"
import { useState, useEffect } from 'react';
import { CardCountry } from "./Components/CardCountry";

const init = () => {
  return JSON.parse(localStorage.getItem('paises')!) || [];
}

interface combo {
  codigo: string,
  glosa: string
}

export const Index = () => {

  const [paises, setPaises] = useState(init);


  const onAddCountry = (value: any) => {
    if (paises.includes(value)) return;
    setPaises([value, ...paises]);

  }

  const onDeleteCountry = (values: any) => {

    setPaises(
      paises.filter((pais: any) => pais !== values)
    );

  }

  useEffect(() => {
    localStorage.setItem('paises', JSON.stringify(paises));
  }, [paises])


  useEffect(() => {



    const Login = async () => {

      const body = {
        "userName": "e_melena",
        "password": "melena"
      }

      // const resp: Response = await fetch(`https://localhost:44312/Login`, {
        
      //   headers:{
      //     "Content-Type": "application/json",
      //   },
      //   method:'POST',
      //   'body': JSON.stringify(body),

      // })



      // const user =await  resp.json();

      const bearer = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJFX01FTEVOQSIsIm5iZiI6MTY1NTkyMjM2MCwiZXhwIjoxNjU1OTUxMTYwLCJpYXQiOjE2NTU5MjIzNjB9.iO7O63rqOyx4yzKYefvdL9EfYaryQyWSAuEBFihDmrQ'
      const resp :Response = await fetch(`https://localhost:44312/api/Examen/SvcExmBoxCodMaq`,{
        method: 'GET',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        }
        
      })

      const combo: combo[] = await resp.json();
      
      
      
    }

    Login();



  }, [])


  return (
    <div className="container">

      <h1>Buscar información de Paises</h1>
      <hr />

      <InputAdd onHandleAdd={onAddCountry} style="margin-bottom:2%" />


      <div className="columns is-mobile">
        {paises.map((value: any) => (
          //  <li key={value}>{value}</li>
          <CardCountry key={value} value={value} onDeleteCountry={onDeleteCountry} />
        ))}

      </div>
    </div>
  )
} 
