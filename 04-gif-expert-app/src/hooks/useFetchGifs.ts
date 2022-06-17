import { useState, useEffect } from 'react';
import { getGifs } from '../Helpers/getGifs';


export const useFetchGifs = ( category:any ) => {


    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState( true )


    const getImages = async () => {
        const newImages: any = await getGifs(category);
        setImages(newImages);
        setisLoading( false );
        
    }

    useEffect(() => {
        getImages();

    }, [])



    return {
        images,
        isLoading
    }


}
