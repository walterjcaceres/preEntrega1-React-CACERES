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
        setProducto({...res.data(), id: res.id});
      
       })
        
    },[itemId])

  return (
    producto?
    <div className='detailContainer'>
        <div className='imagenDetail'>{<img src={producto.mainImage} alt="" />}</div> 
        <div>
            <div className='tituloDetail'>{producto.title}</div>
            <div className='skuDetail'>{producto.sku}</div>
            <div className='stockDetail'>{producto.stock}</div>
            <div className='precioDetail'>${(producto.price.finalPrice).toFixed(2)}</div>
            <button onClick={()=>agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
    </div>:"Cargando..."
  )
}
