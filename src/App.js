import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <div id="home">
            <Home />
          </div>
        </main>

        <Footer/>
      </div>
    </Router>
  );
};

export default App;