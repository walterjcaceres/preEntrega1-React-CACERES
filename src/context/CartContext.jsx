import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext();

let carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [ carrito, setCarrito] = useState(carritoInicial);

    const [ claseListaCategoria, SetClaseListaCategoria] = useState("listaCategorias show")

    

    const agregarAlCarrito = (producto) => {


        let productoExistente = carrito.findIndex((prod)=>{
            return prod.id===producto.id
        }
        )
        

        if(productoExistente>-1){
            
            carrito[productoExistente].amountInCart++;
            setCarrito([...carrito]);
            
        } else{
            
            producto.amountInCart=1;
            setCarrito([...carrito,producto]);
        }
    
    }

   const totalCarrito = () => {
    let total=0;
    carrito.map((prod)=>{
        total=total+prod.amountInCart*prod.price.finalPrice;
    })
    return total.toFixed(2);
   }

   const vaciarCarrito = () => {
    setCarrito([]);
   }

   const cantidadCarrito = () => {
    let acumulador = 0;
     carrito.map((prod)=>{
        acumulador=acumulador+prod.amountInCart;
    })
    return acumulador;
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

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    const mostrar = () => {
        SetClaseListaCategoria("listaCategorias");
    }

    const noMostrar = () => {
        SetClaseListaCategoria("listaCategorias show");
    }
    
    






  return (
    <CartContext.Provider value={{carrito,setCarrito,agregarAlCarrito,vaciarCarrito,cantidadCarrito,disminuir,aumentar,eliminar,totalCarrito,mostrar,noMostrar,claseListaCategoria}}>
        {children}
    </CartContext.Provider>
  )
}
