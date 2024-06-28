import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../firebase/config"

export const ItemDetailContainer = () => {

    let {itemId} = useParams();

    let [producto,setProducto] = useState();

    const {agregarAlCarrito} = useContext(CartContext);


    useEffect(() =>{

      const docRef = doc(db, "productos" , itemId)
       getDoc(docRef)
       .then((res)=>{
        console.log(!res.exists())
        if (!res.exists()) {
          setProducto("inexistente")
          } else {
            setProducto({...res.data(), id: res.id});
          }
      
       })
        
    },[itemId])

  return (
    producto?producto!=="inexistente"?
    <div className='detailContainer'>
        <div className='imagenDetail'>{<img src={producto.mainImage} alt="" />}</div> 
        <div>
            <div className='tituloDetail'>{producto.title}</div>
            <div className='skuDetail'>{producto.sku}</div>
            <div className='stockDetail'>{producto.stock}</div>
            <div className='descripcionDetail'>{producto.descripcion}</div>
            <div className='precioDetail'>${(producto.price.finalPrice).toFixed(2)}</div>
            <button className='btnVerde' onClick={()=>agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
    </div>:<p className='error'>Producto no encontrado 😣</p>
    
    :<p>Cargando...</p>
  )
}
