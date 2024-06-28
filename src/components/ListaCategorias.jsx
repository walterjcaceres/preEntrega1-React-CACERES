import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useState , useEffect} from 'react';
import { collection , getDocs} from 'firebase/firestore';
import { db } from '../firebase/config';
import { CartContext } from '../context/CartContext';


export const ListaCategorias = () => {

    let {claseListaCategoria} = useContext(CartContext);

    let {noMostrar} = useContext(CartContext);

    let [categorias , setCategorias] = useState([]);


    useEffect(()=>{
    
      const categoriasRef = collection (db, "categorias");
    
      getDocs (categoriasRef)
        .then((res)=>{
          setCategorias(res.docs.map((doc) => {
            return {...doc.data()}
          }));
        })
    },[])

  return (
    
        <div onMouseLeave={noMostrar} className={claseListaCategoria}>
            {categorias.map((categoria)=>{
            return<div className="itemCategoria">
                <NavLink to={`/category/${categoria.id}`} onClick={noMostrar} activeclassname="active" className="linksCategorias">{categoria.description} </NavLink>
            </div>
            })}
            
            
        </div>
  )
}
