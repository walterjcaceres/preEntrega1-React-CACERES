import { ContactBar } from "./components/ContactBar";
import { ItemListContainer } from "./components/ItemListContainer"
import { HeaderBar } from "./components/HeaderBar"
import "./css/main.css"
import { Carrousel } from "./components/Carrousel";
//import { ListaCategorias } from "./components/ListaCategorias";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { PaginaCarrito } from "./components/PaginaCarrito";


function App(){
  return (
    <CartProvider>
      <BrowserRouter>
        <ContactBar/>
        <HeaderBar />
        {/* <ListaCategorias/> */}
        <Carrousel/>
        <Routes>
          <Route path="/" element={<ItemListContainer/> }/>
          <Route path="/category/:categoryId" element={<ItemListContainer/> }/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<PaginaCarrito/>}/>
          <Route path="/*" element={<NotFound/> }/>
        </Routes>
        
        
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;