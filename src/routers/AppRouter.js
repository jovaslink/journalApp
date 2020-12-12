import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/dashboard/JournalScreen";
import { login } from "../actions/auth";
import { loadNotesStart } from "../actions/notes";

export default function AppRouter() {
  const dispatch = useDispatch();
  //manejamos el loading general
  const [checking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //preguntar a firebase si el usuario esta logeado, si esta logeado enviar datos a state login
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(loadNotesStart(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking, setIsLoggedIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}
