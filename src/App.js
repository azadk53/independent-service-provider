import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"

import './App.css';
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

import Login from "./Components/Login/Login";
import About from "./About/About";
import Blog from "./Components/Blog/Blog"
import Checkout from "./Components/Checkout/Checkout";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/register" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
