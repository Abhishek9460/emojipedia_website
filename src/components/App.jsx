import React from "react";
import Card from "./Card"
import emojipedia from "../emojipedia"
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(Createcard)}
      </div>
)}
function Createcard(x){
  return(
    <Card 
      emoji={x.emoji}
      name={x.name}
      meaning={x.meaning}
    />

  )
}

export default App;
