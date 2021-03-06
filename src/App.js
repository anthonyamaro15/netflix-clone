import React from "react";
import MainApp from "./components/MainApp";
import Home from "./components/homePage/Home";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Home />
      <PrivateRoute  path="/acc/:browse" component={MainApp} />
      <Footer />
    </div>
  );
}

export default App;
