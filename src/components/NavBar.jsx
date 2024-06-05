import React from 'react'
import { NavLink } from 'react-router-dom'
import categorias from "../data/categorias.json"

export const NavBar = () => {
  return (
   categorias.map((categoria)=>{
    return(
      <NavLink to={`/category/${categoria.id}`} activeclassname="active" className="linksCategorias">{categoria.description} </NavLink>
    )
   })
  )
}
