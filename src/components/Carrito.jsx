import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export const Carrito = () => {

  const {cantidadCarrito} = useContext(CartContext);


  return (
    <div className="carrito">
    <Link to={"/carrito"}>🛒</Link> 
    <h4>{cantidadCarrito()}</h4>
    </div>
  )
}
