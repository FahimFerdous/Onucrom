import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../AuthContext";
import { firebase } from "../../firebase";

import { Formik, FieldArray } from "formik";
import * as Yup from "yup";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
});

const UserProfile = (props) => {
  const [isProfileUpdate, setisProfileUpdate] = useState(false);

  const userData = useContext(AuthContext);
  /* console.log(userData.user); */

  const profileUpdated = () => {
    confirmAlert({
      title: "Information Updated",

      buttons: [
        {
          label: "ok",
          onClick: () => {
            setisProfileUpdate(false);
          },
        },
      ],
    });
  };

  const UserProfileHandler = (
    firstName,
    lastName,
    phone,
    altPhone,
    altEmail,
    dob,
    gender,
    mStatus,
    address,
    about
  ) => {
    const postData = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: props.email,
      level: props.level,
      altPhone: altPhone,
      altEmail: altEmail,
      dob: dob,
      gender: gender,
      mStatus: mStatus,
      address: address,
      about: about,
      memberID: props.memberID,
      accountCreated: props.accountCreated,
      subscriptionDate: props.subscriptionDate,
    };

    const updates = {};

    updates["/Users/" + userData.user] = postData;
    firebase
      .database()
      .ref()
      .update(updates)
      .then((val) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* Personal Heading Start */}
      <div className="row mb-none-30">
        <div className="col-md-12 ">
          <div className="blog-item mb-30" style={{ marginTop: "1%" }}>
            <div
              className="content promoBg "
              style={{ display: "flex", padding: "2% 2%" }}
            >
              <p className="col-md-11 promoText">Personal</p>
              <span
                className="promoselectionButton"
                href="#0"
                onClick={() => {
                  setisProfileUpdate(true);
                }}
              >
                <i
                  className="fa fa-pencil-square-o promoText"
                  aria-hidden="true"
                  style={{ paddingTop: "1%", fontSize: "28px" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Heading End */}

      {isProfileUpdate ? (
        <div className="row mb-none-30">
          <div className="col-md-12">
            <div className="blog-item  mb-30">
              <div className="content" style={{ padding: "2%" }}>
                <Formik
                  initialValues={{
                    firstName: props.fname,
                    lastName: props.lName,
                    phone: props.phone,
                    altPhone: props.altPhone,
                    altEmail: props.altEmail,
                    dob: props.dob,
                    gender: props.gender,
                    mStatus: props.mStatus,
                    address: props.address,
                    about: props.about,
                  }}
                  onSubmit={(values, actions) => {
                    UserProfileHandler(
                      values.firstName,
                      values.lastName,
                      values.phone,
                      values.altPhone,
                      values.altEmail,
                      values.dob,
                      values.gender,
                      values.mStatus,
                      values.address,
                      values.about
                    );
                    actions.resetForm();
                    profileUpdated();
                  }}
                >
                  {({ handleChange, handleSubmit, values, handleBlur }) => (
                    <form className="signin-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="firstName">First Name*</label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            onBlur={handleBlur}
                            value={values.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            onBlur={handleBlur}
                            value={values.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="Phone">Primary Phone </label>
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number"
                            value={values.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="altPhone">Alternate Phone </label>
                          <input
                            type="text"
                            name="altPhone"
                            className="form-control"
                            placeholder="Phone Number"
                            value={values.altPhone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="altEmail">Alternate Email</label>
                          <input
                            type="email"
                            name="altEmail"
                            className="form-control"
                            placeholder="Alternative Email"
                            value={values.altEmail}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="dob">Birth Date</label>
                          <input
                            type="text"
                            name="dob"
                            className="form-control"
                            placeholder="Your Date of Birth"
                            value={values.dob}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="gender">Gender</label>
                          <select
                            name="gender"
                            className="form-control"
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ display: "block" }}
                          >
                            <option value="" label="Select" />
                            <option value="Male" label="Male" />
                            <option value="Female" label="Female" />
                            <option value="Other" label="Other" />
                          </select>
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="mStatus">Marital Status</label>
                          <select
                            name="mStatus"
                            className="form-control"
                            value={values.mStatus}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" label="Select" />
                            <option value="Married" label="Married" />
                            <option value="Unmarried" label="Unmarried" />
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                          name="address"
                          className="form-control"
                          placeholder="Your Address"
                          value={values.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="about">Bio</label>
                        <textarea
                          name="about"
                          className="form-control"
                          placeholder="About Yourself"
                          value={values.about}
                          onChange={handleChange}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-hover"
                      >
                        Update
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mb-none-30">
          <div className="col-md-12">
            <div className="blog-item  mb-30">
              <div className="content" style={{ display: "flex" }}>
                <div className="col-md-6">
                  <p className="profilelabel">
                    First Name <span style={{ margin: "10px" }}>:</span>
                    <span className="profiledata">{props.fname}</span>
                  </p>
                  <p className="profilelabel">
                    Primary Phone <span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.phone}</span>
                  </p>
                  <p className="profilelabel">
                    Primary Email
                    <span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.email}</span>
                  </p>
                  <p className="profilelabel">
                    Gender
                    <span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.gender}</span>
                  </p>
                  <p className="profilelabel">
                    Marital Status
                    <span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.mStatus}</span>
                  </p>
                </div>

                <div className="col-md-6">
                  <p className="profilelabel">
                    Last Name
                    <span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.lName}</span>
                  </p>
                  <p className="profilelabel">
                    Phone (Other)<span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.altPhone}</span>
                  </p>
                  <p className="profilelabel">
                    Email (Other)<span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.altEmail}</span>
                  </p>
                  <p className="profilelabel">
                    Birthday<span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.dob}</span>
                  </p>
                  <p className="profilelabel">
                    Address<span style={{ margin: "10px" }}>:</span>{" "}
                    <span className="profiledata">{props.address}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
