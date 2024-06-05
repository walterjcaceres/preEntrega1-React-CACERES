import React, { useEffect , useState} from 'react'
import data from "../data/productos.json"
import { Card } from './Card'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {

  let { categoryId } = useParams();

  let [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
      setTimeout (() =>{
        resolve(data);
      
      }, 1000)
    }
    )
  }

  useEffect(() => {

    pedirProductos()
    .then((res)=>{
      if (categoryId) {
        console.log(categoryId)
        setProductos(res.filter((prod) => prod.categoryId === parseInt(categoryId)))
        console.log(res)
        console.log("entro en el filtro")
      } else {
        setProductos(res) 
        console.log(" NO entro en el filtro")
      }
      
    })

  }, [categoryId]);



  
  return (
    <div className='itemListConteiner'>
      {
        productos.length > 0? productos.map(producto=>{
          return <Card key={producto.id} producto={producto} />
        })
        : <p>Cargando...</p>

      }   
    </div>
  )
}
