import React from 'react'

interface CardProps {
    image: string;
    title: string;
    price: number;
}
const CardComponent:React.FC<CardProps> = ( {image, title, price}) => {
  return (
    <div style={{
        backgroundColor:'#fff',
        borderRadius:'8px',
        padding: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'transform 0.2s',
    }}>
        <img src={image} alt={title} style={{width:'100%'}}/>
          <h3 style={{ fontSize: '1.1rem', margin: '0 0 10px' }}>{title}</h3>
          <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>${price.toFixed(2)}</p>
    </div>
  )
}

export default CardComponent