import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import SingInAndUp from "./pages/SingInAndUp";
import Checkout from "./pages/Checkout";
import { auth, createUserProfileDocument } from "./firebase/firebase";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });

          console.log(currentUser);
        });
      } else {
        setCurrentUser({ currentUser: userAuth });
      }
    });
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SingInAndUp} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

export default App;
