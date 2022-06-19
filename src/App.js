import "./App.css";
import {Home,Cart,Wishlist,Catalog} from "./pages";
import {Route,Routes} from 'react-router-dom'
import Signin from "pages/login/Signin";

function App() {
  return (
  
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/catalog" element={<Catalog/>}/>
     <Route path="/wishlist" element={<Wishlist/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/signin" element={<Signin/>}/>
   </Routes>
  
  );
}

export default App;
