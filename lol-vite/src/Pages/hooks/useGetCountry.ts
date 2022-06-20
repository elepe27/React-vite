
import React, { useEffect, useState } from 'react'
import { getCountryName } from '../helpers/getCountryName';


export const useGetCountry =  ( Name:string ) => {
 

    const [country, setCountry] = useState({
        data: [],
        loading:true
    });

    useEffect(()=>{

        getCountryName(Name).then(country =>{
            setTimeout(() => {
                setCountry({
                    data: country,
                    loading:false
                })
            }, 3000);
            
        })

    },[Name])

    return country
}
