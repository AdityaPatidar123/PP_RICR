import React from 'react'
import Header from "./components/header"
import Home from "./pages/home"
const App = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Home/>

      </main>
    </>
  )
}

export default App