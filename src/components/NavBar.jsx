import React from 'react'
import { Carrito } from './Carrito'

export const NavBar = () => {
  return (
    <header>
        <h1>Asterix</h1>
        <nav>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Categorias</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
        <Carrito/>
    </header>
  )
}
