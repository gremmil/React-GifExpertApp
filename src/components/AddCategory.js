import React, { useState } from 'react';
import { PropTypes } from "prop-types";

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');
    

    const handleInputChange = ( e ) => {

        setInputValue( e.target.value );

    }
    const handleReset = ( e ) => {

        setInputValue( '' );

    }

    const handleSubmit = ( e ) => {

        e.preventDefault();

        if( inputValue.trim().length > 2 ) {
            setCategories( cats => {
                return [inputValue];
            })
        }
        
    }
    
    return (

        <form onSubmit= { handleSubmit }>

        <input 
            type="text"
            value= { inputValue }
            onChange={ handleInputChange }
            placeholder="Ingresa lo que quieras"
            />

        <button
            type="reset"
            className="btn-form"
            onClick= { handleReset }
        >Clear</button>

        </form>

    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}
