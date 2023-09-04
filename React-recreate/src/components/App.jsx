import React from "react";
import Dict from "./dict";
import emojipedia from "../emojipedia";

function mapData(data) {
  return (<Dict key={data.id}
    name ={data.name}
    emoji ={data.emoji}
    meaning ={data.meaning}
  />);
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(mapData)}
      </dl>
    </div>
  );
}

export default App;
