import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"

import Home from "./pages/Home";
import New from "./pages/new";
import Men from "./pages/men";
import Women from "./pages/Women";
import Sale from "./pages/Sale";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
       
      </Routes>
    </Router>
  );
}