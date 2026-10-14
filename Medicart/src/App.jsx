import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/UserComponents/Navbar.jsx";
import Home from "./Component/UserComponents/Home.jsx";
import Hero from "./Component/UserComponents/Hero.jsx";
import Category from"./Component/UserComponents/Category.jsx";
import Featured from"./Component/UserComponents/Featured.jsx";
import Prescription from"./Component/UserComponents/Prescription.jsx";
import Medicines from "./Component/UserComponents/Medicines.jsx";
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
      <Route path="/Hero"element={<Hero />} />
      <Route path="/Category"element={<Category />} />
      <Route path="/Featured"element={<Featured />} />
      <Route path="/Prescription"element={<Prescription />} />
      <Route path="/Medicines"element={<Medicines />} />
      <Route path="/Categories"element={<Categories />} />
      <Route path="/Offers"element={<Offers/>}/>
      <Route path="/Healthtips"element={<Healthtips />} />
       <Route path="/Wishlist"element={<Wishlist />} />
      <Route path="/Cart"element={<Cart/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;