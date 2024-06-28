import React, { useContext} from 'react'
import { ListaCategorias } from './ListaCategorias'
import { CartContext } from '../context/CartContext';

export const NavBar = () => {

  let {mostrar} = useContext(CartContext);
  

  return (
   <>
    <button className='btnCategorias' onClick={mostrar}>Categorias</button>
    <ListaCategorias/>
  </>
  )
}
