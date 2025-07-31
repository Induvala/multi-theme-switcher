import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import './main-content.css';

export const MainContent = () => {
    const {theme} = useContext(ThemeContext)!;
    const [products, setProducts] = useState<any[]>([]);

    useEffect(()=>{
        getData();
    },[])
   async function getData(){
     const result = await fetch('https://fakestoreapi.com/products');
     const response = await result.json();
     setProducts(response);
   }
  return (
    <div className={`main-content ${theme.toLowerCase()}`}>
        <h1>Sample content title</h1>
        <p>This is dummy paragrapgh describing the content</p>
        <button>Clicki Me</button>
        <div className='cards-grid'>
            {products.map((item,index)=>(
                <div key={index} className='card'>
                    <img src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                 </div>   
            ))}

        </div>
    </div>
  )
}
