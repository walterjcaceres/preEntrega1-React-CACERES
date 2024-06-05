import React from 'react'

export const SearchBar = () => {
  return (
  <div className="search-container">
        <form action="/search" method="get">
            <input type="text" placeholder="Buscar..." name="q" className="search-box"/>
            <button type="submit" className="search-button">Buscar</button>
        </form>
    </div>
  )
}



