import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
