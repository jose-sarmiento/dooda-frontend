import React from "react"
import {Routes, Route} from "react-router-dom"
import {Header, Footer} from "./components";
import Homepage from "./pages/Homepage"
import Places from "./pages/Places"

function App() {
  return (
    <>
      <div className="main">
        <Header />

        <Routes>  
          <Route path="/" element={<Homepage/>} />
          <Route path="places" element={<Places/>} />
        </Routes>
        

      
        </div>
      <Footer/>
    </>
  );
}

export default App;
