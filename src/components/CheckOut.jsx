import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Link } from 'react-router-dom'
import { DetalleCompra } from './DetalleCompra';



export const CheckOut = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } =useForm(); 

    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalCarrito(),
            estado: "generada"
        }
        
        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc)=>{
                setDocId(doc.id)
                vaciarCarrito();
            })
            
    }


    if(docId){
        return(
            <>
               <h4>Muchas gracias por su compra</h4>
               <p>Su codigo de referencia para el seguimiento de envío es: {docId}</p>
               <Link to='/'><p className='titulo'>Ir a inicio</p></Link> 
            </>
        )  
    }

  return (
    <div className='fraccionDetalle'>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder='Ingrese su nombre' {...register("nombre")} />
            <input type="email" placeholder='Ingrese su e-mail' {...register("email")} />
            <input type="tel" id="telefono" placeholder='Ingrese su número de teléfono' {...register("telefono")} />
            <button className='btnVerde' type="submit">Comprar</button>
        </form>
        <DetalleCompra/>
    </div>
  )
}
