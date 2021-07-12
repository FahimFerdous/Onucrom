import React, { useState } from "react";
import { Formik } from "formik";
import { firebase } from "../../firebase";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Signin = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const LoginUserHandler = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((credential) => {
        history.push("/dashboard");
        setLoading(false);
      })
      .catch((err) => {
        confirmAlert({
          title: "Login Failed!",
          message: err.message,

          buttons: [
            {
              label: "Try Again",
            },
          ],
        });
      });
  };
  return (
    <div>
      <section
        className="inner-page-banner-section gradient-bg"
        style={{ paddingTop: "150px" }}>
        <div className="illustration-img">
          <img
            src="assets/images/elements/home4-banner-shape.png"
            alt="image-illustration"
          />
        </div>

        <div className="modal-dialog" role="document">
          <div className="modal-content bdr-radius">
            <div className="signin-wrapper">
              <div className="signin-wrapper-header text-center">
                <div className="logo">
                  <img src="assets/images/elements/logo-icon.png" alt="image" />
                </div>
                <h3 className="title">Login</h3>
                <p>Welcome back, please sign in below</p>
              </div>
              <Formik
                initialValues={{
                  email: "",

                  password: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Email Address Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  } else if (!values.password) {
                    errors.password = "Password is Required";
                  }
                  return errors;
                }}
                onSubmit={(values, actions) => {
                  LoginUserHandler(values.email.toLowerCase(), values.password);
                  actions.resetForm();
                }}>
                {({
                  handleChange,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  handleBlur,
                }) => (
                  <form className="signin-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="signinEmail">Email*</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter your Email"
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}>
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>
                    <div className="form-group">
                      <label for="signinPass">Password*</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}>
                        {errors.password && touched.password && errors.password}
                      </p>
                    </div>

                    <button type="submit" className="btn btn-primary btn-hover">
                      Log In
                    </button>
                  </form>
                )}
              </Formik>

              <div className="signin-wrapper-footer">
                <p className="bottom-text">
                  Don’t have an account? <a href="/signUp">Sign Up Now</a>
                </p>
                <div className="divider">
                  <span>or Use</span>
                </div>
                <ul className="social-list">
                  <li>
                    <a href="#0">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#0">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
