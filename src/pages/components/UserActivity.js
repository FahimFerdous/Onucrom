import React from "react";

const UserActivity = () => {
  return (
    <div>
      {/* SUbscription Details */}
      <div className="row mb-none-30">
        <div className="col-md-12">
          <div className="blog-item  mb-30">
            <div style={{ padding: "15px 15px" }}>
              <p
                className="servicesHeadingText"
                style={{
                  paddingTop: "0px",
                  paddingBottom: "10px",
                  textDecoration: "underline",
                }}
              >
                Subscription History
              </p>
              <div className="col-md-6">
                <p className="profilelabel">
                  Active Subscription Status{" "}
                  <span style={{ margin: "10px" }}>:</span>
                  <span className="profiledata" style={{ paddingTop: "10px" }}>
                    Basic Account
                  </span>
                </p>
                <p className="profilelabel">
                  Last Subscription <span style={{ margin: "10px" }}>:</span>{" "}
                  <span className="profiledata" style={{ paddingTop: "10px" }}>
                    21/03/2020
                  </span>
                </p>
                <p className="profilelabel">
                  Subscription Active till
                  <span style={{ margin: "10px" }}>:</span>{" "}
                  <span className="profiledata" style={{ paddingTop: "10px" }}>
                    July 2021
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Downloads */}
      <div className="row mb-none-30" style={{ paddingTop: "2%" }}>
        <div className="col-md-12">
          <div
            className="blog-item blog-list mb-30 useractivityTitle"
            style={{ padding: "10px 5px 10px 15px" }}
          >
            <h3
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Downloads from InfoBase: (last 12 months)
            </h3>
          </div>
        </div>
        {/* blog-item end */}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="invest-table-area wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>File Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Related Page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  <div className="btn-area mt-50 text-center">
            <a href="#0" className="btn btn-primary btn-hover text-small">
              browse more
            </a>
          </div> */}
        </div>
      </div>

      <div style={{ margin: "20px" }}></div>
      {/* All transaction History */}
      <div className="row mb-none-30">
        <div className="col-md-12">
          <div
            className="blog-item blog-list mb-30 useractivityTitle2"
            style={{ padding: "10px 5px 10px 15px" }}
          >
            <h3
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              All Transactions : (Last 12 Months)
            </h3>
          </div>
        </div>
        {/* blog-item end */}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="invest-table-area wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Summary</th>
                  <th>Descriptions</th>
                  <th>Reference</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="price"></span>
                  </td>
                  <td>
                    <span className="name"></span>
                  </td>

                  <td>
                    <span className="daily-dividend"></span>
                  </td>
                  <td>
                    <span className="investors-amount"></span>
                  </td>
                  <td>
                    <span className="investors-amount"></span>
                  </td>
                  <td>
                    <span className="investors-amount"></span>
                  </td>
                  <td>
                    <span className="investors-amount"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  <div className="btn-area mt-50 text-center">
            <a href="#0" className="btn btn-primary btn-hover text-small">
              browse more
            </a>
          </div> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-9"></div>
        <div
          className="col-md-3 btn-area text-center"
          style={{ marginTop: "2%" }}
        >
          <a href="#0" className="btn btn-primary btn-hover text-small">
            Make a service request
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
