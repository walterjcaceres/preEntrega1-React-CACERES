import { ContactBar } from "./components/ContactBar";
import { ItemListContainer } from "./components/ItemListContainer"
import { HeaderBar } from "./components/HeaderBar"
import "./css/main.css"
import { Carrousel } from "./components/Carrousel";
//import { ListaCategorias } from "./components/ListaCategorias";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer";


function App(){
  return (
    <BrowserRouter>
      <ContactBar/>
      <HeaderBar />
      {/* <ListaCategorias/> */}
      <Carrousel/>
      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        <Route path="/category/:categoryId" element={<ItemListContainer/> }/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/*" element={<NotFound/> }/>
      </Routes>
      
    </BrowserRouter>

  )
}

export default App;