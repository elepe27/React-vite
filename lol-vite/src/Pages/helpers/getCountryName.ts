

export const getCountryName = async(name:string) => {
 
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const resp = await data.json();
    
    
    return resp;
    

}
