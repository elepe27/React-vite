
export const fileUpload = async ( file:any  )=> {

    if(!file ) throw new Error('No tenemos ningún archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dp0jzqolh/image/upload';
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file);

    try {
        

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        
        if (!resp.ok ) throw new Error( 'No se pudo subir imagen');

        const cloudResp = await resp.json();
        console.log(cloudResp);
        return cloudResp.secure_url;

    } catch (error:any) {
        console.log(error);
        throw new Error( error.message );
    }

}