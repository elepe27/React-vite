
import { Gifs } from "../Interface/gifs/IGifs";

export const getGifs = async ( category:any )=> {


    const url: string = `https://api.giphy.com/v1/gifs/search?api_key=V7q9WrlXTHEe2jklQxz54MdgV0G8h13H&q=${ category }&limit=10`;
    const resp = await fetch ( url );
    const { data } : Gifs  = await resp.json();

    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    ));


    return gifs;

    

}