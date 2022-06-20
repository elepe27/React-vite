
import { useGetCountry } from "../hooks/useGetCountry"
import { CardCountryItem } from "./CardCountryItem"


export const CardCountry = ({ value ,onDeleteCountry}:any) => {


    const { data, loading }: any = useGetCountry(value);


    return (<>


            {
                loading && 'Cargando...'
            }
       
            {



                
                

                data.map((contries: any) => (
                    <CardCountryItem
                        key={contries.name.common}
                        data={contries}
                        onDeleteCountry={ onDeleteCountry } />

                ))
            }


    </>
    )
}
