// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );


    // // const [count, setCount] = useState(0);

    // //Este código así como está solo se ejucuta getGifs cuando el componente es renderizado por primera vez
    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ])


  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {category} </h3>

        { loading && <p className='animate__animated animate__flash'>Loading</p> }

      <div className="card-grid">

        {
            images.map((img) => (

                <GifGridItem 
                    key={img.id} 
                    {...img} 
                />

            ))
        }

      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}







