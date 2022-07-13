import { UserContext } from './UserContext';
import { useState } from 'react';


// const user = {
//     id:123,
//     name:'Esteban Lepe',
//     email:'Esteban@google.com'
// }

export const UserProvider = ( { children }:any ) => {

  const [user, setUser] = useState();

  return (
    

    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>


  )
}
