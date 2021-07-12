import React, { useState, useContext } from "react";

import AuthContext from "../../AuthContext";
import { firebase } from "../../firebase";

import { Formik, FieldArray } from "formik";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const UserProfessionalInfo = (props) => {
  const [isProfessionUpdate, setisProfessionUpdate] = useState(false);
  const userData = useContext(AuthContext);

  const profileUpdated = () => {
    confirmAlert({
      title: "Information Updated",

      buttons: [
        {
          label: "ok",
          onClick: () => {
            setisProfessionUpdate(false);
          },
        },
      ],
    });
  };

  const ProfessionalDataHandler = (pClass, membership, exp, awards) => {
    //console.log(pClass, membership, exp, awards);
    const postData = {
      pClass: pClass,
      membership: membership,
      exp: exp,
      awards: awards,
    };

    const updates = {};

    updates["/Professional/" + userData.user] = postData;
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
      {/* Professional Heading Start */}
      <div className="row mb-none-30">
        <div className="col-md-12 ">
          <div className="blog-item mb-30" style={{ marginTop: "1%" }}>
            <div
              className="content promoBg "
              style={{ display: "flex", padding: "2% 2%" }}
            >
              <p className="col-md-11 promoText">Professional</p>
              <span
                className="promoselectionButton"
                href="#0"
                onClick={() => setisProfessionUpdate(true)}
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

      {/* Professional Heading End */}
      {/* Professional Info Start*/}

      {isProfessionUpdate ? (
        <div className="row mb-none-30">
          <div className="col-md-12">
            <div className="blog-item  mb-30">
              <div className="content" style={{ padding: "2%" }}>
                <Formik
                  initialValues={{
                    pClass: props.pClass,
                    experience: props.experience,
                    activeMembership: props.membership,
                    awards: props.awards,
                  }}
                  onSubmit={(values, actions) => {
                    ProfessionalDataHandler(
                      values.pClass,
                      values.activeMembership,
                      values.experience,
                      values.awards
                    );
                    actions.resetForm();
                    profileUpdated();
                  }}
                >
                  {({
                    handleChange,
                    handleSubmit,
                    values,

                    handleBlur,
                  }) => (
                    <form className="signin-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="professionFormLebel" htmlFor="pClass">
                          Profession Class
                        </label>
                        <input
                          type="text"
                          name="pClass"
                          className="form-control"
                          placeholder="Your Profession"
                          onBlur={handleBlur}
                          value={values.pClass}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <FieldArray name="experience">
                          {(fieldArrayProps) => (
                            <>
                              <div>
                                <div>
                                  <label
                                    className="professionFormLebel col-md-11"
                                    style={{ padding: "0px" }}
                                  >
                                    Experience
                                  </label>

                                  <span
                                    onClick={() => {
                                      fieldArrayProps.push({
                                        org: "",
                                        industry: "",
                                        role: "",
                                        country: "",
                                        from: "",
                                        to: "",
                                      });
                                    }}
                                    className="updateprofilebutton"
                                    href="#0"
                                    style={{
                                      fontSize: "24px",
                                      margin: "0% 0% 0% 4%",
                                      padding: "0px 15px",
                                    }}
                                  >
                                    +
                                  </span>
                                </div>

                                {values.experience.map((value, index) => (
                                  <>
                                    <div className="row">
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="org">
                                          Organization
                                        </label>
                                        <input
                                          type="text"
                                          name={`experience.${index}.org`}
                                          className="form-control"
                                          placeholder="Organization"
                                          onBlur={handleBlur}
                                          value={value.org}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="industry">
                                          Industry
                                        </label>
                                        <input
                                          type="text"
                                          name={`experience.${index}.industry`}
                                          className="form-control"
                                          placeholder="Type of industry"
                                          onBlur={handleBlur}
                                          value={value.industry}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="role">Role </label>
                                        <input
                                          type="text"
                                          name={`experience.${index}.role`}
                                          className="form-control"
                                          placeholder="Designation"
                                          value={value.role}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="country">
                                          Country{" "}
                                        </label>
                                        <input
                                          type="text"
                                          name={`experience.${index}.country`}
                                          className="form-control"
                                          placeholder="Country"
                                          value={value.country}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="from">From</label>
                                        <input
                                          type="text"
                                          name={`experience.${index}.from`}
                                          className="form-control"
                                          placeholder="Start date"
                                          value={value.from}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="to">To</label>
                                        <input
                                          type="text"
                                          name={`experience.${index}.to`}
                                          className="form-control"
                                          placeholder="End Date"
                                          value={value.to}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                    <hr style={{ color: "black" }} />
                                  </>
                                ))}
                              </div>
                            </>
                          )}
                        </FieldArray>
                      </div>
                      <div>
                        <FieldArray name="activeMembership">
                          {(fieldArrayProps) => (
                            <>
                              <div>
                                <label
                                  className="professionFormLebel col-md-11"
                                  style={{ padding: "0px" }}
                                >
                                  Active Membership
                                </label>
                                <span
                                  onClick={() => {
                                    fieldArrayProps.push({
                                      name: "",
                                      position: "",
                                      from: "",
                                    });
                                  }}
                                  className="updateprofilebutton"
                                  href="#0"
                                  style={{
                                    fontSize: "24px",
                                    margin: "0% 0% 0% 4%",
                                    padding: "0px 15px",
                                  }}
                                >
                                  +
                                </span>
                              </div>
                              {values.activeMembership.map((value, index) => (
                                <>
                                  <div className="row" key={index}>
                                    <div className="col-md-4 form-group">
                                      <label htmlFor="name">Name</label>
                                      <input
                                        type="text"
                                        name={`activeMembership.${index}.name`}
                                        className="form-control"
                                        placeholder="Membership title"
                                        onBlur={handleBlur}
                                        value={value.name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="col-md-4 form-group">
                                      <label htmlFor="position">Position</label>
                                      <input
                                        type="text"
                                        name={`activeMembership.${index}.position`}
                                        className="form-control"
                                        placeholder="Position"
                                        onBlur={handleBlur}
                                        value={value.position}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="col-md-3 form-group">
                                      <label htmlFor="from">From </label>
                                      <input
                                        type="text"
                                        name={`activeMembership.${index}.from`}
                                        className="form-control"
                                        placeholder="Join Date"
                                        value={value.from}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </>
                              ))}
                            </>
                          )}
                        </FieldArray>
                      </div>

                      <div>
                        <FieldArray name="awards">
                          {(fieldArrayProps) => (
                            <>
                              <div>
                                <label
                                  className="professionFormLebel col-md-11"
                                  style={{ padding: "0px" }}
                                >
                                  Awards & Achievements
                                </label>
                                <span
                                  onClick={() => {
                                    fieldArrayProps.push({
                                      name: "",
                                      body: "",
                                      from: "",
                                    });
                                  }}
                                  className="updateprofilebutton"
                                  href="#0"
                                  style={{
                                    fontSize: "24px",
                                    margin: "0% 0% 0% 4%",
                                    padding: "0px 15px",
                                  }}
                                >
                                  +
                                </span>
                              </div>
                              {values.awards.map((value, index) => (
                                <>
                                  <div className="row" key={index}>
                                    <div className="col-md-4 form-group">
                                      <label htmlFor="name">Name</label>
                                      <input
                                        type="text"
                                        name={`awards.${index}.name`}
                                        className="form-control"
                                        placeholder="Award Title"
                                        onBlur={handleBlur}
                                        value={value.name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="col-md-4 form-group">
                                      <label htmlFor="body">
                                        Awarding Body
                                      </label>
                                      <input
                                        type="text"
                                        name={`awards.${index}.body`}
                                        className="form-control"
                                        placeholder="Organization"
                                        onBlur={handleBlur}
                                        value={value.body}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="col-md-3 form-group">
                                      <label htmlFor="from">From </label>

                                      <input
                                        type="text"
                                        name={`awards.${index}.from`}
                                        className="form-control"
                                        placeholder="Issue Date"
                                        value={value.from}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </>
                              ))}
                            </>
                          )}
                        </FieldArray>
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
            <div className="blog-item  mb-30" style={{ paddingBottom: "2%" }}>
              <div
                className=" content"
                style={{ display: "flex", padding: "20px 30px" }}
              >
                <p className="profilelabel">
                  Profession Class <span style={{ margin: "0px 10px" }}>:</span>
                  <span className="profiledata">{props.pClass}</span>
                </p>
              </div>
              <div className="content" style={{ padding: "5px 30px" }}>
                <p className="profilelabel">
                  Experience{" "}
                  <span style={{ margin: "15px", padding: "0px" }}></span>
                </p>
              </div>

              {props.experience.map((value, index) => (
                <div
                  key={index}
                  className="content"
                  style={{ padding: "0px 0px 0px 35px", display: "flex" }}
                >
                  <div className="col-md-6">
                    <p className="professionLabel">
                      Organization <span>:</span>
                      <span className="profiledata">{value.org}</span>
                    </p>
                    <p className="professionLabel">
                      Industry <span>:</span>{" "}
                      <span className="profiledata">{value.industry}</span>
                    </p>
                    <p className="professionLabel">
                      From
                      <span>:</span>{" "}
                      <span className="profiledata">{value.from}</span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="professionLabel">
                      Country <span>:</span>{" "}
                      <span className="profiledata">{value.country}</span>
                    </p>
                    <p className="professionLabel">
                      Role <span>:</span>
                      <span className="profiledata">{value.role}</span>
                    </p>

                    <p className="professionLabel">
                      To
                      <span>:</span>{" "}
                      <span className="profiledata">{value.to}</span>
                    </p>
                  </div>
                </div>
              ))}
              <div className="content" style={{ padding: "5px 30px" }}>
                <p className="profilelabel">
                  Active Membership{" "}
                  <span style={{ margin: "15px", padding: "0px" }}></span>
                </p>
              </div>
              {props.membership.map((value, index) => (
                <div
                  className="content"
                  style={{ padding: "0px 0px 0px 35px" }}
                >
                  <div style={{ display: "flex" }}>
                    <p className="professionLabel">
                      Name <span>:</span>
                      <span className="profiledata"> {value.name}</span>
                    </p>
                    <p className="professionLabel">
                      Position <span>:</span>{" "}
                      <span className="profiledata"> {value.position}</span>
                    </p>
                    <p className="professionLabel">
                      From
                      <span>:</span>{" "}
                      <span className="profiledata">{value.from}</span>
                    </p>
                  </div>
                </div>
              ))}
              <div className="content" style={{ padding: "5px 30px" }}>
                <p className="profilelabel">
                  Awards & Achievements{" "}
                  <span style={{ margin: "15px", padding: "0px" }}></span>
                </p>
              </div>
              {props.awards.map((value, index) => (
                <div
                  className="content"
                  style={{ padding: "0px 0px 0px 35px" }}
                >
                  <div style={{ display: "flex" }}>
                    <p className="professionLabel">
                      Name <span>:</span>
                      <span className="profiledata">{value.name}</span>
                    </p>
                    <p className="professionLabel">
                      Time <span>:</span>{" "}
                      <span className="profiledata">{value.from}</span>
                    </p>
                    <p className="professionLabel">
                      Awarding Body
                      <span>:</span>{" "}
                      <span className="profiledata">{value.body}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Professional Info End */}
    </div>
  );
};

export default UserProfessionalInfo;
