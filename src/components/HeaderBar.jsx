import React from 'react'
import { Carrito } from './Carrito'
import { SearchBar } from './SearchBar'
import { NavBar} from './NavBar'
import { NavLink } from 'react-router-dom'


export const HeaderBar = () => {
  return (
    <>
    <header>
        <NavLink to="/"><h1>Asterix</h1></NavLink>            
        <NavBar/>
        <SearchBar/>
        <Carrito/>
        
    </header>
    
    </>
  )
}
