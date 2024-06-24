import {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ carrito, setCarrito] = useState([]);

    

    const agregarAlCarrito = (producto) => {


        let productoExistente = carrito.findIndex((prod)=>{
            return prod.id===producto.id
        }
        )
        

        if(productoExistente>-1){
            
            carrito[productoExistente].amountInCart++;
        } else{
            
            producto.amountInCart=1;
            setCarrito([...carrito,producto]);
        }
        
    
    }

   const vaciarCarrito = () => {
    setCarrito([]);
   }

   const cantidadCarrito = () => {
    return carrito.length
    }

    const aumentar = (producto) => {
       
       let carritoNuevo = carrito.map((prod)=>{
        if(prod.id===producto.id){
            prod.amountInCart++;
        }
        return (prod)
        })
        
        
       setCarrito(carritoNuevo);
        
    }

    const disminuir = (producto) => {
        
        let carritoNuevo = carrito.map((prod)=>{
            if(prod.id===producto.id){
                prod.amountInCart>1&&prod.amountInCart--;
            }
            return (prod)
            })
            
            
           setCarrito(carritoNuevo);
        
    }
    
    const eliminar = (producto) => {

        let carritoNuevo=[...carrito]

        let index = carritoNuevo.findIndex((prod)=>{
            return prod.id===producto.id
        })
        
        carritoNuevo.splice(index,1)
        setCarrito(carritoNuevo);
    }

    






  return (
    <CartContext.Provider value={{carrito,setCarrito,agregarAlCarrito,vaciarCarrito,cantidadCarrito,disminuir,aumentar,eliminar}}>
        {children}
    </CartContext.Provider>
  )
}
