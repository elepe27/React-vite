import React from 'react'
import { useEffect, useState } from 'react';

type props =  {
  className?: string
}

export const Message:React.FC<props> = () => {

  const [coords, setCoords] = useState({x: 0, y: 0});
  useEffect(() => {

    
    const onMouseMove = ({x, y }:any)=> setCoords({ x, y});
   
    window.addEventListener( 'mousemove', onMouseMove);

    const [input] = document.querySelectorAll('input');
    input.style.borderColor = 'red';
    input.style.boxShadow = '5px 5px 2px';
  
    return () => {
      console.log('message unmounted');
      input.style.borderColor = '';
      input.style.boxShadow = '';
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])
  
  
  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords )}
    </>
  )
}
