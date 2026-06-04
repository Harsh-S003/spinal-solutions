import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Prosthetics from "./pages/Prosthetics";
import OrderForms from "./pages/OrderForms";
import Contact from "./pages/Contact";
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/prosthetics" element={<Prosthetics />} />
        <Route path="/order-forms" element={<OrderForms />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App