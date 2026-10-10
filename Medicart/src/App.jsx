import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/UserComponents/Navbar.jsx";
import Home from "./Component/UserComponents/Home.jsx";
import Medicines from "./Component/UserComponents/Medicines.jsx";
import Category from"./Component/UserComponents/Category.jsx";
import Categories from "./Component/UserComponents/Categories.jsx";
import Offers from "./Component/UserComponents/Offers.jsx";
import Healthtips from "./Component/UserComponents/Healthtips.jsx";
import Wishlist from "./Component/UserComponents/Wishlist.jsx";
import Cart from "./Component/UserComponents/Cart.jsx";




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/Medicines"element={<Medicines />} />
      <Route path="/Category"element={<Category />} />
      <Route path="/Categories"element={<Categories />} />
      <Route path="/Offers"element={<Offers/>}/>
      <Route path="/Healthtips"element={<Healthtips />} />
       <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/Cart"element={<Cart/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;