import "./App.css";
import Collection from "./Pages/Collection";
import Product from "./Pages/Product";
import Order from "./Pages/Order";
import Profile from "./Pages/Profile";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Count from "./Pages/Count";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Collection />}/>
      <Route path="/collections" element={<Collection />}/>
      <Route path="/products/:id" element={<Product />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/count" element={<Count />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
