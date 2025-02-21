import React from "react";
import "./App.css";
import Header from "./components/header"
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/home"
import Experience from "./pages/expericence"
import Qualification  from "./pages/qualification";
import Hobbies from "./pages/hobbies"
import Contact from "./pages/contact"
import  Projects  from "./pages/projects";

function App(){
  return(
    <>
    <Router>
      <header>
      <Header/>
      </header>
      <main className="flex">
      <Sidebar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/exp" element={<Experience/>}/>
         <Route path="/pro" element={<Projects/>}/>
         <Route path="/qual" element={<Qualification/>}/>
         <Route path="/hob" element={<Hobbies/>}/>
         <Route path="/con" element={<Contact/>}/>
       
       
      </Routes>
      </main>
    </Router>
    
   
    
    </>


  )


}


export default App;