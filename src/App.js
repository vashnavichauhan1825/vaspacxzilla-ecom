import "./App.css";
import {Home,Cart,Wishlist,Catalog} from "./pages";
import {Route,Routes} from 'react-router-dom'
import Signin from "pages/login/Signin";
import Signup from "pages/login/Signup";

function App() {
  return (
  
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/catalog" element={<Catalog/>}/>
     <Route path="/wishlist" element={<Wishlist/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/signup" element={<Signup/>}/>
   </Routes>
  
  );
}

export default App;
