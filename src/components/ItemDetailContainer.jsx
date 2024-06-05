import React, { useEffect, useState } from 'react'
import data from "../data/productos.json"
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    let {itemId} = useParams();

    let [producto,setProducto] = useState();


    useEffect(() =>{
        setProducto(data.find((prod)=>prod.id===parseInt(itemId)))
        
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
        </div>
    </div>:"Cargando..."
  )
}
