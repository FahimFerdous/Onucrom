import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext";

import { firebase } from "../../firebase";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Header = () => {
  const [userName, setuserName] = useState("");
  const [level, setlevel] = useState("");
  const history = useHistory();
  const isAuth = useContext(AuthContext);
  const [validUser, setvalidUser] = useState(false);
  const checkuser = () => {
    console.log(isAuth.user);
    if (isAuth.user != null) {
      setvalidUser(true);
      const dbRef = firebase.database().ref();
      dbRef
        .child("Users")
        .child(isAuth.user)

        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            setuserName(
              snapshot.val().firstName + " " + snapshot.val().lastName
            );
            setlevel(snapshot.val().level);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setvalidUser(false);
    }
  };

  useEffect(() => {
    checkuser();
  }, [isAuth.user]);

  const UserLogoutHandler = () => {
    confirmAlert({
      title: "Confirm to Logout?",

      buttons: [
        {
          label: "Yes",
          onClick: () => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                history.replace("/login");
              });
          },
        },
        {
          label: "No",
        },
      ],
    });
    /*  */
  };

  const HoverSearchBar = () => {
    /* document.getElementById("navbar-ul").classList.remove("main-menu");
    document.getElementById("navbar-ul").classList.add("main-menustyle");
 */
    console.log("worked");
  };
  return (
    <div>
      {/* preloader start */}
      <div className="preloader">
        <div className="preloader-box">
          <div>O</div>
          <div>N</div>
          <div>U</div>
          <div>C</div>
          <div>R</div>
          <div>O</div>
          <div>M</div>
        </div>
      </div>
      {/* {/* preloader end */}
      {/*  header-section start  */}
      <header className="header-section transparent--header header--fixed">
        {/* {validUser && (
          <div className="header-top">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="header-top-left d-flex">
                    <div className="support-part">
                      <a href="tel:+88016558888454">
                        <i className="fa fa-user-circle"></i>Welcome!
                      </a>
                    </div>
                    <div className="email-part">
                      <a href="#"> {userName}</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="header-top-left d-flex">
                    <div className="support-part">
                      <a href="tel:+88016558888454">
                        <i className="fa fa-globe"></i>Level |
                      </a>
                    </div>
                    <div className="email-part">
                      <a href="#">{level}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

        <div className="header-bottom">
          <div className="container" style={{ maxWidth: "1300px" }}>
            <nav className="navbar navbar-expand-xl">
              <a
                className="site-logo site-title"
                href="home-one.html"
                style={{ fontSize: "28px", color: "white" }}>
                <img
                  src="assets/images/Site Logo 2021 V1 - web 200 x 80.png"
                  alt="site-logo"
                  style={{ paddingTop: "5px", height: "70px" }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="menu-toggle"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul id="navbar-ul" className="navbar-nav main-menu ml-auto">
                  <li className="active">
                    <a className="main-menustyle" href="#0">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="main-menustyle" href="about.html">
                      Cover
                    </a>
                  </li>
                  <li className="">
                    <a className="main-menustyle" href="/capFinder">
                      CapitalGate
                    </a>
                  </li>
                  <li className="menu_has_children">
                    <a className="main-menustyle" href="#0">
                      Services
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a className="main-menustyle" href="affiliate.html">
                          Specific Class Schema
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a className="main-menustyle" href="#0">
                      InfoBase
                    </a>
                  </li>
                  <li>
                    <a className="main-menustyle" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="search-box">
                  <input
                    class="search-txt"
                    type="text"
                    placeholder="Type to Search"
                  />
                  <a href="/login" className="header-SearchBar">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
                <div className="header-join-part">
                  {validUser ? (
                    <button
                      onClick={UserLogoutHandler}
                      className="btn btn-primary">
                      Logout
                    </button>
                  ) : (
                    <a href="/login" className="btn btn-primary">
                      join us
                    </a>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* header-bottom end */}
      </header>
      {/*  header-section end  */}
    </div>
  );
};

export default Header;
