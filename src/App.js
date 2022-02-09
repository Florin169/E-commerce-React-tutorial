import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
