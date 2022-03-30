import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

export const RecipeContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <RecipeContext.Provider value={theme}>
     <section>
      <div className='recipe-app'>
        <h4>Recipe App with Context</h4>
        <div className='recipe-theme-controls'>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} type='button'>Change Theme</button>
          <code>{theme}</code>
        </div>
        <Recipe/>
      </div>
     </section>
    </RecipeContext.Provider>
  );
}

export default App;
