import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import React from 'react';
function App() {
  return (
   <>
    <div className="w-screen h-screen">
      <Home />
      <Content/>
      <Footer/>
    </div>
   </>
  );
}

export default App;
