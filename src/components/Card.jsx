import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({producto}) => {
  
  return (
    <div className='card'>  
        <div className="imagen">
        <Link to={`/item/${producto.id}`}><img src={producto.mainImage} alt="imagen" /></Link> 
        </div>
        <p className='serial'>{producto.sku}</p>
        <p className='estado'>{producto.stock}</p>
        <Link to={`/item/${producto.id}`}><p className='titulo'>{producto.title}</p></Link>  
        <p className="precioAnterior">${(producto.price.finalPrice*2).toFixed(2)}</p>
        <p className="precio">${(producto.price.finalPrice).toFixed(2)}</p>
    </div>

  )
}
