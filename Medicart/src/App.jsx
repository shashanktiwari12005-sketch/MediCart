import Navbar from "./Component/UserComponents/Navbar.jsx";
import Category from"./Component/UserComponents/Category.jsx";
import Categories from "./Component/UserComponents/Categories.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"element={<Category />} />
      <Route path="/Categories"element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;