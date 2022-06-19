import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }: any) => {


    const { images, isLoading } = useFetchGifs(category);

    return (

        <>

            {
                isLoading
                    ?
                    <p>Loading </p>

                    :
                    <>

                        <h3> {category} </h3>
                        <div className='card-grid'>
                            {images.map((img: any) => <GifGridItem {...img} key={img.id} />)}
                        </div>

                    </>
            }

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.any.isRequired
}