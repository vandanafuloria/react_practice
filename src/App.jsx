import { useState } from "react";

import "./App.css";

import Life from "./Life.jsx";
import Image from "./ImageSetter.jsx";

function App() {
  const person = {
    name: "vandana",
    phase: "learning",
  };
  const [mood, setMood] = useState("");

  return (
    <div>
      <h1>How is Life ? </h1>
      <button onClick={() => setMood("good")}>Good</button>
      <button onClick={() => setMood("boring")}>Boring</button>
      <button onClick={() => setMood("sad")}>sad</button>
      <div>
        <Life person={person} mood={mood} />
      </div>
      <h1 style={{ fontSize: 40 }}>Want to see image related to your mood ?</h1>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>

      <Image person={person} mood={mood} />
    </div>
  );
}

export default App;
