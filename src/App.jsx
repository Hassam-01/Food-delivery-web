import "./App.css";
import DCParent from "./components/DCParent";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./shared/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Popular from "./shared/Popular";
import RestBanner from "./shared/RestBanner";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Shop />}>
          <Route
            index
            element={
              <>
                <RestBanner
                  text3={"Nothing yet"}
                  bgColor={"bg-black"}
                  time={null}
                />
                <Popular />
                <DCParent />
              </>
            }
          />
          <Route
            path=":id"
            element={
              <>
                <Popular />
                <RestBanner
                  text3={"Nothing yet"}
                  bgColor={"bg-black"}
                  time={null}
                  />
                  <Menu/>
              </>
            }
          />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
