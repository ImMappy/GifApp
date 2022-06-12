import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  /**
   * @useFetchGifs is a hook receiving API Giphy elements.
   * @gifData receives the data received inside useFetchGifs and we map in it to show each element on the ReactDOM render.
   */

    const {data:gifData,loading} = useFetchGifs(category);
    
    
  return (
      <main>
        <h2>{category == "" ?"":"Results for " + category}</h2>
        {loading && (<h3>Loading...</h3>)}
        <div className="gif__grid animate__animated animate__pulse ">
              {gifData.map(gif => 
                  <GifGridItem 
                  key={gif.id}
                  {...gif} 
                  /> 
              )}
        </div> 
    </main>
    
  )
}
