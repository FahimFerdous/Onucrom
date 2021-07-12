import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import react, { useState, useEffect } from "react";

import { firebase } from "./firebase";

import Header from "./pages/homepage/Header.js";
import Main from "./pages/homepage/Main";
import Footer from "./pages/homepage/Footer";
import Signin from "./pages/authentication/Signin";
import Signup from "./pages/authentication/Signup";
import AuthContext from "./AuthContext";
import Dashboard from "./pages/user/Dashboard";
import CapFinder from "./pages/user/CapFinder";
import ProtectedRoute from "./pages/authentication/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthorized, setisAuthorized] = useState(false);

  var authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
      } else {
        setUser(null);
      }
    });
  };
  //console.log(isAuthorized);

  useEffect(() => {
    authListener();
    if (user != null) {
      setisAuthorized(true);
    } else {
      setisAuthorized(false);
    }
    console.log(isAuthorized);
  }, [user, isAuthorized]);
  console.log(isAuthorized);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/login">
              <Signin />
            </Route>
            <Route path="/signUp">
              <Signup />
            </Route>
            {/*  <ProtectedRoute
              path="/dashboard"
              component={Dashboard}
              isAuth={isAuthorized}
            /> */}
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/capFinder">
              <CapFinder />
            </Route>
            <Route path="/admin">
              <AdminDashboard />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
