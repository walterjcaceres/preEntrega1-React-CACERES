import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';



export const PaginaCarrito = () => {

const {carrito, vaciarCarrito,disminuir,aumentar,eliminar} = useContext(CartContext);
console.log(carrito);


  return (
    <div>
        {carrito.map((producto)=> {
            return(
                <div>
                    <div className='itemCarrito'>
                        <div className="imagen">
                        <Link to={`/item/${producto.id}`}><img src={producto.mainImage} alt="imagen" /></Link> 
                        </div>
                        <p className='serial'>{producto.sku}</p>
                        <Link to={`/item/${producto.id}`}><p className='titulo'>{producto.title}</p></Link>
                        <div className='cantidad'>
                            <button className='disminuir'onClick={()=>disminuir(producto)}>-</button>
                            <h3 className='numeroCantidad'>{producto.amountInCart}</h3>
                            <button className='aumentar'onClick={()=>aumentar(producto)}>+</button>
                        </div> 
                        <p className="precio">${(producto.price.finalPrice*producto.amountInCart).toFixed(2)}</p>
                        <button className='eliminar'onClick={()=>eliminar(producto)}>❌</button>
                    </div>   
                </div>
            )
        })}
        {carrito.length>0?
            <button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        :
        <h2>Carrito Vacio</h2>}
        
        
    </div>
    )
}
