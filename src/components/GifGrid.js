import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
 
export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (

        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p>Loading</p> }
            
            { images.length === 0 && <p>No hay resultados disponibles</p> }

            { <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

            }
            
        </>
    )
}
