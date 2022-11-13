import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro"

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro />
      </main>
      <Footer />
    </div>
  );
};

export default App;
