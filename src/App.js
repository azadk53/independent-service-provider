import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"

import './App.css';
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/services" element={
          <RequireAuth>
            <Services></Services>
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
