import React, {useContext} from 'react'
import { RecipeContext } from './App';

function Recipe() {
  const theme = useContext(RecipeContext);
  console.log('theme', theme);
  
  return (
    <div className={`themed ${theme}`}>
        <h2>Recipe Menu</h2>
        <input placeholder='Enter a recipe name' name='menu-name' id='menu-name' type={'text'}/>
        <button type='submit'>Get Menu</button>
    </div>
  )
}

export default Recipe