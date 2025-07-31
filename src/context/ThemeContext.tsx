import {  createContext,ReactNode, useEffect, useState } from "react";

export type ThemeType = 'Theme1' | 'Theme2' | 'Theme3';
 
interface ThemeContextProps {
    theme: ThemeType;
    setTheme : (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export const ThemeProvider: React.FC<{ children:ReactNode }> = ({children}) => {
   const [theme, setTheme] = useState<ThemeType>('Theme1');

   useEffect(()=>{
     const storedTheme = localStorage.getItem('appTheme') as ThemeType;
     if(storedTheme){
        setTheme(storedTheme);
     }
   },[])

   const changetheme = (newTheme: ThemeType) =>{
    setTheme(newTheme);
   }

   return(
    <ThemeContext.Provider value={{theme, setTheme: changetheme}}>
        {children}
    </ThemeContext.Provider>
   )

}