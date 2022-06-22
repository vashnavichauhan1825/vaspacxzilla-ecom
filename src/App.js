import "./App.css";
import { Home, Cart, Wishlist, Catalog } from "./pages";
import { Route, Routes } from "react-router-dom";
import Signin from "pages/login/Signin";
import Signup from "pages/login/Signup";
import Profile from "pages/login/Profile";
import RestrictAuth from "components/RequireAuth/RestrictAuth";
import RequireAuth from "components/RequireAuth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route element={<RequireAuth/>}>
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<RestrictAuth/>}>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      </Route>
     
    </Routes>
  );
}

export default App;
