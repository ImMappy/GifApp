import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    /**
     * @useState init with empty string.
     * @handleInputChange send input value to search in the api by @setCategories from GifApp
     * @handleSubmit send the form by pressing Enter and check if the input value is higher than 2
     */

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
       setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue]);
            setInputValue('');
        }
        
    } 
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="One Punch Man, HunterXHunter..."/> 
        </form>         
    </>
)
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired 
}

