
import { useGetCountry } from "../hooks/useGetCountry"
import { CardCountryItem } from "./CardCountryItem"
import { Spinner } from "./Spinner";


export const CardCountry = ({ value ,onDeleteCountry}:any) => {

    const { data, loading }: any = useGetCountry(value);
    return (<>


            {
                loading && <Spinner/>
            }
       
            {



                
                

                data.map((contries: any) => (
                    <CardCountryItem
                        key={contries.name.common}
                        data={contries}
                        value = {value}
                        onDeleteCountry={ onDeleteCountry } />

                ))
            }


    </>
    )
}
