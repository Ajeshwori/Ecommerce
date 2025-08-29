import { Route, Routes } from "react-router-dom"
import Login from "./pages/Auth/Login"
import AuthLayout from "./components/Auth/Layout"
import Register from "./pages/Auth/Register"
import AdminLayout from './components/Admin/Layout'
import AdminDashoboard from './pages/Admin/Dashboard'
import AdminProduct from './pages/Admin/Product'
import AdminOrder from './pages/Admin/Order'
import AdminFeatures from './pages/Admin/Features'
import ShopLayout from './components/Shop/Layout'
import ShopHome from './pages/Shop/Home'
import ShopList from './pages/Shop/Listing'
import ShopAccount from './pages/Shop/Account'
import ShopCheckOut from './pages/Shop/Checkout'
import Unauthorized from './pages/NotFound/Unauthorized'
import NotFound from './pages/NotFound/index'



function App() {
  return (
  
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashoboard />} />
            <Route path="product" element={<AdminProduct />} />
            <Route path="order" element={<AdminOrder />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route path="/shop" element={<ShopLayout />}>
            <Route path="home" element={<ShopHome />} />
            <Route path="list" element={<ShopList />} />
            <Route path="account" element={<ShopAccount />} />
            <Route path="checkout" element={<ShopCheckOut />} />
          </Route>
          <Route path="unauth-page" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  
  );
}

export default App;
