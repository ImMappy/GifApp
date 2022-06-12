import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components/index';

const GifApp = () => {
  /**
   * @useState init with empty string.
   * @setCategories will permit to replace @categories by the name insert in AddCategory in the input.
   */
    const [categories, setCategories] = useState([""]);
   
  return (
    <>
    <header>
      <h1>GifApp</h1>
      <AddCategory setCategories = {setCategories}/>
      <hr/>
        
    </header>
      <ul>
          {categories.map((category)=>  (
              <GifGrid key={category} category= {category}/>
          )
          )}
      </ul>
    </>
  )
}

export default GifApp;
