import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"

import './App.css';
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Home></Home>}></Route>
        <Route path="/login" element={<Home></Home>}></Route>
        <Route path="/register" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
