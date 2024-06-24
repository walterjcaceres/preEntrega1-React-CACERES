import React, { useEffect , useState} from 'react'
import { Card } from './Card'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query ,where, addDoc} from 'firebase/firestore'
import { db } from "../firebase/config"


export const ItemListContainer = () => {

  let { categoryId } = useParams();

  let [productos, setProductos] = useState([]);

 

  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = categoryId?query(productosRef, where("category", "==" , categoryId.toUpperCase())):productosRef;

    
    getDocs(q)
      .then((res)=>{
        setProductos(res.docs.map((doc)=>{
          return {...doc.data(), id:doc.id}
        }))
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
