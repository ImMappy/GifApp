import React from 'react'



export const GifGridItem = (gif) => {
  
  return (
          <div className="gif__card">
            <img src={gif.url} alt={gif.title}/>
            <h3>{gif.title}</h3>
          </div>
        
  )
}
