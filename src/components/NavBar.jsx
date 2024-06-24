import React, { useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase/config" 

export const NavBar = () => {

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
   categorias.map((categoria)=>{
    return(
      <NavLink to={`/category/${categoria.id}`} activeclassname="active" className="linksCategorias">{categoria.description} </NavLink>
    )
   })
  )
}
