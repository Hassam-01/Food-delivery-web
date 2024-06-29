import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./shared/Footer";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/restaurants" element={<Shop/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
