import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Prosthetics from "./pages/Prosthetics";
import OrderForms from "./pages/OrderForms";
import Contact from "./pages/Contact";
import SubmitOrderForm from "./pages/SubmitOrderForm";
import ScanningApp from "./pages/ScanningApp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarbonFiber from "./pages/CarbonFiber";
import SpinalProducts from "./pages/SpinalProducts";
import PrintedProducts from "./pages/PrintedProducts";
import DistributedProducts from "./pages/DistributedProducts";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster richColors position="top-right" />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/prosthetics" element={<Prosthetics />} />
          <Route path="/order-forms" element={<OrderForms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/customers/submit-order-form"
            element={<SubmitOrderForm />}
          />
          <Route path="/customers/o-p-scanning-app" element={<ScanningApp />} />
          <Route path="/carbon-fiber" element={<CarbonFiber />} />
          <Route path="/products/spinal" element={<SpinalProducts />} />
          <Route path="/products/3d-printed" element={<PrintedProducts />} />
          <Route path="/products/distributed" element={<DistributedProducts />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
