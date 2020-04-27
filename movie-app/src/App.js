import React from "react";
import MainApp from "./components/MainApp";
import Home from "./components/homePage/Home";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Home />
      <PrivateRoute component={MainApp} />
    </div>
  );
}

export default App;
