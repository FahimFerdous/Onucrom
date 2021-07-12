import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext";
import { firebase } from "../../firebase";

import ClipLoader from "react-spinners/ClipLoader";

import UserActivity from "../components/UserActivity";
import UserProfile from "../components/UserProfile";
import UserAccount from "../components/UserAccount";
import UserContribution from "../components/UserContribution";
import UserProfessionalInfo from "../components/UserProfessionalInfo";
import UserAcademicInfo from "../components/UserAcademicInfo";

const Dashboard = () => {
  const [OpenContribution, setOpenContribution] = useState(false);
  const [openServices, setopenServices] = useState(false);
  const [openActivity, setopenActivity] = useState(false);
  const [usrData, setusrData] = useState(null);
  const [profData, setprofData] = useState(null);
  const [academicData, setacademicData] = useState(null);
  const userData = useContext(AuthContext);

  const dbCon = firebase.database();
  useEffect(() => {
    dbCon.ref("Users/" + userData.user).on("value", (snapshot) => {
      setusrData(snapshot.val());
    });

    dbCon.ref("Professional/" + userData.user).on("value", (snapshot) => {
      setprofData(snapshot.val());
    });

    dbCon.ref("Academic/" + userData.user).on("value", (snapshot) => {
      setacademicData(snapshot.val());
    });
  }, [userData.user]);

  if (!usrData || !profData || !academicData) {
    return (
      <div className="fp-container">
        <div className="fp-loader">
          <ClipLoader size={100} />
          <p style={{ fontWeight: "600", fontSize: "18px" }}>Loading...</p>
        </div>
      </div>
    );
  }

  //Update user Profile start

  //Update user profile end

  return (
    <div>
      <section
        className="inner-page-banner-section gradient-bg"
        style={{ paddingTop: "165px", paddingBottom: "100px" }}
      >
        <div className="illustration-img">
          {/* <img
            src="assets/images/inner-page-banner-illustrations/promotion.resized.png"
            alt="image-illustration"
          /> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-page-content-area">
                <div style={{ display: "flex" }}>
                  <div className="userStyle1">
                    <img
                      src="assets/images/team/image-placeholder.png"
                      alt="Person Image"
                      className="dashboardImage"
                    />
                  </div>
                  <div style={{ paddingLeft: "2%", paddingTop: "9%" }}>
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {usrData.firstName + " " + usrData.lastName}
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#1dfbfb",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        lineHeight: "7px",
                      }}
                    >
                      {usrData.level}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="inner-page-content-area">
                <div style={{ paddingLeft: "2%", paddingTop: "9%" }}>
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    {usrData.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-area">
                <p className="DashboarsdIntroText">
                  Welcome to your dashboard. Here you can manage your
                  preferences, check activities, track your contributions and
                  much more
                </p>
                <ul
                  className="nav nav-tabs justify-content-between"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="all-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="all"
                      aria-selected="true"
                    >
                      My Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setopenServices(true);
                      }}
                      className="nav-link dashboard-span"
                      id="research-tab"
                      data-toggle="tab"
                      href="#services"
                      role="tab"
                      aria-controls="services"
                      aria-selected="false"
                    >
                      My Onu Account
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setopenActivity(true);
                      }}
                      className="nav-link dashboard-span"
                      id="investors-tab"
                      data-toggle="tab"
                      href="#activity"
                      role="tab"
                      aria-controls="activity"
                      aria-selected="false"
                    >
                      My Activity
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setOpenContribution(true);
                      }}
                      className="nav-link dashboard-span"
                      id="entrepreneurs-tab"
                      data-toggle="tab"
                      href="#contribution"
                      role="tab"
                      aria-controls="contributions"
                      aria-selected="false"
                    >
                      My Contributions
                    </span>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <UserProfile
                      fname={usrData.firstName}
                      lName={usrData.lastName}
                      phone={usrData.phone}
                      altPhone={usrData.altPhone}
                      altEmail={usrData.altEmail}
                      email={usrData.email}
                      address={usrData.address}
                      about={usrData.about}
                      gender={usrData.gender}
                      mStatus={usrData.mStatus}
                      dob={usrData.dob}
                      level={usrData.level}
                      memberID={usrData.memberID}
                      accountCreated={usrData.accountCreated}
                      subscriptionDate={usrData.subscriptionDate}
                    />
                    <UserProfessionalInfo
                      pClass={profData.pClass}
                      membership={profData.membership}
                      experience={profData.exp}
                      awards={profData.awards}
                    />
                    <UserAcademicInfo
                      highestDegree={academicData.highestDegree}
                      major={academicData.major}
                      academicInfo={academicData.academicInfo}
                      membership={academicData.membership}
                      awards={academicData.awards}
                    />
                  </div>

                  {openServices && (
                    <div
                      className="tab-pane fade show active"
                      id="services"
                      role="tabpanel"
                      aria-labelledby="investors-tab"
                    >
                      <UserAccount
                        memberID={usrData.memberID}
                        accountCreated={usrData.accountCreated}
                        subscriptionDate={usrData.subscriptionDate}
                        accountType={usrData.level}
                        uid={userData.user}
                      />
                    </div>
                  )}

                  {openActivity && (
                    <div
                      className="tab-pane fade show active"
                      id="activity"
                      role="tabpanel"
                      aria-labelledby="investors-tab"
                    >
                      <UserActivity />
                    </div>
                  )}

                  {OpenContribution && (
                    <div
                      className="tab-pane fade show active"
                      id="contribution"
                      role="tabpanel"
                      aria-labelledby="entrepreneurs-tab"
                    >
                      <UserContribution />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
