import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import ClipLoader from "react-spinners/ClipLoader";

import { useHistory } from "react-router-dom";

import { firebase } from "../../firebase";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.number(),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

const Signup = () => {
  const history = useHistory();
  const [isloading, setisloading] = useState(false);

  const dbCon = firebase.database();
  const CreateUserHandler = (firstName, lastName, email, phone, password) => {
    setisloading(true);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var signUpDate = new Date();
    var subscriptionDate =
      months[signUpDate.getMonth() + 6] + " " + signUpDate.getFullYear();
    var modifiedDate =
      signUpDate.getDate() +
      "/" +
      (signUpDate.getMonth() + 1) +
      "/" +
      signUpDate.getFullYear();

    const memberID =
      firstName.substring(0, 1).toUpperCase() +
      lastName.substring(0, 1).toUpperCase() +
      signUpDate.getFullYear().toString().substr(-2) +
      lastName.substr(-2).toUpperCase() +
      (Math.floor(Math.random() * 100) + 1);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        dbCon
          .ref("Users")
          .child(credential.user.uid)
          .set(
            {
              firstName,
              lastName,
              email,
              phone,
              level: "Free",
              altPhone: "",
              altEmail: "",
              dob: "",
              gender: "",
              mStatus: "",
              address: "",
              about: "",
              memberID: memberID,
              accountCreated: modifiedDate,
              subscriptionDate: subscriptionDate,
            },
            (error) => {
              if (error) {
                console.log(error);
              } else {
                dbCon
                  .ref("Professional")
                  .child(credential.user.uid)
                  .set({
                    pClass: "",
                    exp: [
                      {
                        org: "",
                        country: "",
                        industry: "",
                        role: "",
                        from: "",
                        to: "",
                      },
                    ],
                    membership: [{ name: "", position: "", from: "" }],
                    awards: [{ name: "", time: "", bywhom: "" }],
                  });

                dbCon
                  .ref("Academic")
                  .child(credential.user.uid)
                  .set(
                    {
                      highestDegree: "",
                      major: "",

                      academicInfo: [
                        {
                          institute: "",
                          country: "",
                          degree: "",
                          session: "",
                        },
                      ],
                      membership: [{ name: "", position: "" }],
                      awards: [{ name: "", time: "", bywhom: "" }],
                    },
                    (error) => {
                      if (error) {
                        console.log(error);
                      } else {
                        setisloading(false);
                        confirmAlert({
                          title: "Account Created!",

                          buttons: [
                            {
                              label: "Go to Dashboard",
                              onClick: () => {
                                history.replace("/dashboard");
                              },
                            },
                          ],
                        });
                      }
                    }
                  );
              }
            }
          );
      })
      .catch((error) => {
        confirmAlert({
          title: "Error!",
          message: error.message,
          buttons: [
            {
              label: "Back",
            },
          ],
        });
      });
    /* firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        firebase
          .database()
          .ref("Users/" + credential.user.uid)
          .push()
          .set(
            {
              firstName,
              lastName,
              email,
              phone,
            },
            (error) => {
              if (error) {
                console.log(error);
              } else {
                confirmAlert({
                  title: "Account Created!",

                  buttons: [
                    {
                      label: "Login Now",
                      onClick: () => {
                        history.replace("/login");
                      },
                    },
                  ],
                });
              }
            }
          );
      })
      .catch((err) => {
        confirmAlert({
          title: "Error!",
          message: err.message,
          buttons: [
            {
              label: "Back",
            },
          ],
        });
      }); */
  };

  if (isloading) {
    return (
      <div className="fp-container">
        <div className="fp-loader">
          <ClipLoader size={100} />
          <p style={{ fontWeight: "600", fontSize: "18px" }}>Almost There...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section
        className="inner-page-banner-section gradient-bg"
        style={{ paddingTop: "150px" }}
      >
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
                <h3 className="title">Join Now</h3>
              </div>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
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
                  } else if (!values.firstName) {
                    errors.firstName = "First Name is Required";
                  } else if (!values.lastName) {
                    errors.lastName = "Last Name is Required";
                  } else if (!values.password) {
                    errors.password = "Password is Required";
                  }
                  return errors;
                }}
                onSubmit={(values, actions) => {
                  CreateUserHandler(
                    values.firstName,
                    values.lastName,
                    values.email.toLowerCase(),
                    values.phone,
                    values.password
                  );
                  actions.resetForm();
                }}
                validationSchema={validationSchema}
              >
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
                      <label for="firstName">First Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        onBlur={handleBlur}
                        value={values.firstName}
                        onChange={handleChange}
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </p>
                    </div>
                    <div className="form-group">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        onBlur={handleBlur}
                        value={values.lastName}
                        onChange={handleChange}
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {errors.lastName && touched.lastName && errors.lastName}
                      </p>
                    </div>
                    <div className="form-group">
                      <label for="signinEmail">Email*</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>

                    <div className="form-group">
                      <label for="Phone">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number (Optional)"
                        value={values.phone}
                        onChange={handleChange}
                      />
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
                        }}
                      >
                        {errors.password && touched.password && errors.password}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-hover"
                      disabled={isSubmitting}
                    >
                      Sign Up
                    </button>
                  </form>
                )}
              </Formik>

              <div className="signin-wrapper-footer">
                <p className="bottom-text">
                  Already have an account? <a href="/login">Login Now</a>
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

export default Signup;
