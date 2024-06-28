import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


export const DetalleCompra = () => {

    const {carrito, vaciarCarrito,totalCarrito} = useContext(CartContext);

  return (
    
        <div className='recuadroDetalle'>
            <div>
            {carrito.map((producto)=>{
                return(
                
                    <p className='itemDetalle'>{producto.amountInCart}x {producto.title}</p>
                ) 
            })}
            </div>
          
            
            <div className='total'>
                <Link to='/'><button className='vaciarCarrito' onClick={()=>vaciarCarrito()}>Vaciar Carrito</button></Link>
                <h4>Total: ${totalCarrito()}</h4>
            </div>
        </div>
    
  
  )
}
