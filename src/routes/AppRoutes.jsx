import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home/Home"
import Clients from "../pages/Clients/Clients"
import Products from "../pages/Products/Products"
import Sales from "../pages/Sales/Sales"
import Reports from "../pages/Reports/Reports"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes