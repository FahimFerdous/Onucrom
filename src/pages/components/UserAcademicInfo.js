import React, { useState, useContext } from "react";

import AuthContext from "../../AuthContext";
import { firebase } from "../../firebase";

import { Formik, FieldArray } from "formik";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const UserAcademicInfo = (props) => {
  const [isAcademicsUpdate, setisAcademicsUpdate] = useState(false);
  const userData = useContext(AuthContext);

  const profileUpdated = () => {
    confirmAlert({
      title: "Information Updated",

      buttons: [
        {
          label: "ok",
          onClick: () => {
            setisAcademicsUpdate(false);
          },
        },
      ],
    });
  };

  const AcademicInfoHandler = (
    highestDegree,
    major,
    academicInfo,
    membership,
    awards
  ) => {
    const postData = {
      highestDegree: highestDegree,
      major: major,
      academicInfo: academicInfo,
      membership: membership,
      awards: awards,
    };

    const updates = {};

    updates["/Academic/" + userData.user] = postData;
    firebase
      .database()
      .ref()
      .update(updates)
      .then((val) => {
        profileUpdated();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* Academic Heading Start */}
      <div className="row mb-none-30">
        <div className="col-md-12 ">
          <div className="blog-item mb-30" style={{ marginTop: "1%" }}>
            <div
              className="content promoBg "
              style={{ display: "flex", padding: "2% 2%" }}
            >
              <p className="col-md-11 promoText">Academic</p>
              <span
                className="promoselectionButton"
                href="#0"
                onClick={() => setisAcademicsUpdate(true)}
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

      {/* Academic Heading End */}

      {/* Academics Info Start */}
      {isAcademicsUpdate ? (
        <div className="row mb-none-30">
          <div className="col-md-12">
            <div className="blog-item  mb-30">
              <div className="content" style={{ padding: "2%" }}>
                <Formik
                  initialValues={{
                    highestDegree: props.highestDegree,
                    major: props.major,
                    records: props.academicInfo,
                    activeMembership: props.membership,
                    awards: props.awards,
                  }}
                  onSubmit={(values, actions) => {
                    AcademicInfoHandler(
                      values.highestDegree,
                      values.major,
                      values.records,
                      values.activeMembership,
                      values.awards
                    );
                    actions.resetForm();
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
                        <label
                          className="professionFormLebel"
                          htmlFor="highestDegree"
                        >
                          Highest Degree
                        </label>
                        <input
                          type="text"
                          name="highestDegree"
                          className="form-control"
                          placeholder="Your Highest Degree"
                          onBlur={handleBlur}
                          value={values.highestDegree}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="professionFormLebel" htmlFor="major">
                          Major Area
                        </label>
                        <input
                          type="text"
                          name="major"
                          className="form-control"
                          placeholder="Specialization"
                          onBlur={handleBlur}
                          value={values.major}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <FieldArray name="records">
                          {(fieldArrayProps) => (
                            <>
                              <div>
                                <div>
                                  <label
                                    className="professionFormLebel col-md-11"
                                    style={{ padding: "0px" }}
                                  >
                                    Academic Records
                                  </label>

                                  <span
                                    onClick={() => {
                                      fieldArrayProps.push({
                                        institute: "",
                                        session: "",
                                        degree: "",
                                        country: "",
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

                                {values.records.map((value, index) => (
                                  <>
                                    <div className="row">
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="institute">
                                          Institution
                                        </label>
                                        <input
                                          type="text"
                                          name={`records.${index}.institute`}
                                          className="form-control"
                                          placeholder="Educational Institution"
                                          onBlur={handleBlur}
                                          value={value.institute}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="degree">Degree</label>
                                        <input
                                          type="text"
                                          name={`records.${index}.degree`}
                                          className="form-control"
                                          placeholder="Degree Earned"
                                          onBlur={handleBlur}
                                          value={value.degree}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="session">
                                          Session{" "}
                                        </label>
                                        <input
                                          type="text"
                                          name={`records.${index}.session`}
                                          className="form-control"
                                          placeholder="Session Starts"
                                          value={value.session}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="country">Country</label>
                                        <input
                                          type="text"
                                          name={`records.${index}.country`}
                                          className="form-control"
                                          placeholder="Country"
                                          value={value.country}
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
                className="content"
                style={{ display: "flex", padding: "20px 30px" }}
              >
                <p className="profilelabel">
                  Highest Academic Achievement{" "}
                  <span style={{ margin: "0px 10px" }}>:</span>
                  <span className="profiledata">{props.highestDegree}</span>
                </p>
              </div>
              <div
                className="content"
                style={{ display: "flex", padding: "0px 30px" }}
              >
                <p className="profilelabel">
                  Major <span style={{ margin: "0px 10px" }}>:</span>
                  <span className="profiledata">{props.major}</span>
                </p>
              </div>
              <div className="content" style={{ padding: "5px 30px" }}>
                <p className="profilelabel">
                  Academic Credential{" "}
                  <span style={{ margin: "15px", padding: "0px" }}></span>
                </p>
              </div>
              {props.academicInfo.map((value, index) => (
                <div
                  key={index}
                  className="content"
                  style={{ padding: "0px 0px 0px 35px", display: "flex" }}
                >
                  <div className="col-md-6">
                    <p className="professionLabel">
                      Institute <span>:</span>
                      <span className="profiledata">{value.institute}</span>
                    </p>
                    <p className="professionLabel">
                      Degree <span>:</span>{" "}
                      <span className="profiledata">{value.degree}</span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="professionLabel">
                      Country <span>:</span>{" "}
                      <span className="profiledata">{value.country}</span>
                    </p>
                    <p className="professionLabel">
                      Session
                      <span>:</span>{" "}
                      <span className="profiledata">{value.session}</span>
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
                  key={index}
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
                  key={index}
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
      {/* Academics Info End */}
    </div>
  );
};

export default UserAcademicInfo;
