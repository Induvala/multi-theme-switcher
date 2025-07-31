import React, { useContext } from 'react'
import { ThemeContext, ThemeType } from '../context/ThemeContext'

export const Header = () => {
   const themeContext = useContext(ThemeContext);
   if(!themeContext) return null;
   const { theme, setTheme} = themeContext;

   const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
     setTheme(e.target.value as ThemeType)
   }

  return (
    <header style={{ position:'fixed', top:0, width:'100', padding:'10px', backgroundColor:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center' }}>
      <div style={{ fontWeight:'bold' }}>
        App Logo
      </div>
      <select value={theme} onChange={handleChange}>
        <option value='Theme1'>Theme1</option>
        <option value='Theme2'>Theme2</option>
        <option value='Theme3'>Theme3</option>
      </select>
    </header>
  )
}
