import React from "react";
import { Images } from "./component/Images"
import ImageCarousel from "./component/ImageCarousel";
import './App.css';

function App() {
  return (
    <div className="container">
      <ImageCarousel slides={Images} />
    </div>
  )
}

export default App;
