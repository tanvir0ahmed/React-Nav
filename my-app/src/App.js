import React from "react";
import {
 BrowserRouter as Router,
 Route,
 Redirect,
 Switch
} from 'react-router-dom';

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Services";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";

const App = () =>  {
  return (
    <Router>
     <Navbar/>
      <main>
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/service" exact>
          <Service />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
