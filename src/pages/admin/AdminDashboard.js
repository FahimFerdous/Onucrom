import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext";
import { firebase } from "../../firebase";

import "../admin/AdminDesign.css";

//import ClipLoader from "react-spinners/ClipLoader";

const AdminDashboard = () => {
  const [OpenPricing, setOpenPricing] = useState(false);
  const [OpnePayment, setOpnePayment] = useState(false);
  const [OpenFileMan, setOpenFileMan] = useState(false);
  const [OpenClientMan, setOpenClientMan] = useState(false);
  const [OpenAccessMan, setOpenAccessMan] = useState(false);

  const userData = useContext(AuthContext);

  //const dbCon = firebase.database();
  /* useEffect(() => {
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
  } */

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
                  <div style={{ paddingLeft: "2%", paddingTop: "9%" }}>
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Fahim Ferdous
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
                      ADMIN
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
                    About
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
              <div className="main-area adminarea1">
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
                      href="#pageControls"
                      role="tab"
                      aria-controls="all"
                      aria-selected="true"
                    >
                      Page Controls
                    </a>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setOpenPricing(true);
                      }}
                      className="nav-link dashboard-span"
                      id="research-tab"
                      data-toggle="tab"
                      href="#pricingTab"
                      role="tab"
                      aria-controls="pricingTab"
                      aria-selected="false"
                    >
                      Pricing & Marketing
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setOpnePayment(true);
                      }}
                      className="nav-link dashboard-span"
                      id="investors-tab"
                      data-toggle="tab"
                      href="#paymentTab"
                      role="tab"
                      aria-controls="paymentTab"
                      aria-selected="false"
                    >
                      Payments & Receipts
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setOpenFileMan(true);
                      }}
                      className="nav-link dashboard-span"
                      id="investors-tab"
                      data-toggle="tab"
                      href="#fileManTab"
                      role="tab"
                      aria-controls="fileManTab"
                      aria-selected="false"
                    >
                      File Management
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setOpenClientMan(true);
                      }}
                      className="nav-link dashboard-span"
                      id="entrepreneurs-tab"
                      data-toggle="tab"
                      href="#clientManTab"
                      role="tab"
                      aria-controls="clientManTab"
                      aria-selected="false"
                    >
                      Client Management
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        setOpenAccessMan(true);
                      }}
                      className="nav-link dashboard-span"
                      id="entrepreneurs-tab"
                      data-toggle="tab"
                      href="#accessManTab"
                      role="tab"
                      aria-controls="accessManTab"
                      aria-selected="false"
                    >
                      Access Management
                    </span>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pageControls"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <h3>Page Controls</h3>
                  </div>

                  {OpenPricing && (
                    <div
                      className="tab-pane fade show active"
                      id="pricingTab"
                      role="tabpanel"
                      aria-labelledby="research-tab"
                    >
                      <h3>Pricing & Marketing</h3>
                    </div>
                  )}

                  {OpnePayment && (
                    <div
                      className="tab-pane fade show active"
                      id="paymentTab"
                      role="tabpanel"
                      aria-labelledby="investors-tab"
                    >
                      <h3>Payment and Receipts</h3>
                    </div>
                  )}

                  {OpenFileMan && (
                    <div
                      className="tab-pane fade show active"
                      id="fileManTab"
                      role="tabpanel"
                      aria-labelledby="investors-tab"
                    >
                      <h3>File Management</h3>
                    </div>
                  )}

                  {OpenClientMan && (
                    <div
                      className="tab-pane fade show active"
                      id="clientManTab"
                      role="tabpanel"
                      aria-labelledby="entrepreneurs-tab"
                    >
                      <h3>Client Management</h3>
                    </div>
                  )}

                  {OpenAccessMan && (
                    <div
                      className="tab-pane fade show active"
                      id="accessManTab"
                      role="tabpanel"
                      aria-labelledby="entrepreneurs-tab"
                    >
                      <h3>Access Management</h3>
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

export default AdminDashboard;
