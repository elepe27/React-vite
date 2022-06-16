


export const getImagen = async() => {

    try {

        const apiKey = 'V7q9WrlXTHEe2jklQxz54MdgV0G8h13H';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

        

    } catch (error) {
        // manejo del error
        console.log(error);
        return 'No se encontro la imagen'
    }
    
    
    
}




