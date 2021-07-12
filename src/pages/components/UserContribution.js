import React from "react";

const UserContribution = () => {
  return (
    <div>
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
              My Active Contributions | InfoBase
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
                  <th>Price</th>
                  <th>Related Page</th>
                  <th>Valid till</th>
                  <th>Total Downloaded</th>
                  <th>Actions</th>
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
      <div className="row" style={{ paddingTop: "2%" }}>
        <p style={{ paddingLeft: "3%" }}>
          1.{" "}
          <span style={{ fontSize: "14px" }}>
            By Default, Any materials you upload as a free publication are
            subject to our{" "}
            <a style={{ PaddingLeft: "2px", color: "blue" }} href="#">
              policies
            </a>
            , will be available only up to [x] days, then auto removed.​
          </span>
        </p>
        <p style={{ paddingLeft: "3%" }}>
          2.{" "}
          <span style={{ fontSize: "14px" }}>
            For Priced materials, please see our policies for revenue sharing
            <a style={{ PaddingLeft: "2px", color: "blue" }} href="#">
              here
            </a>
            . ​​
          </span>
        </p>
        <p style={{ paddingLeft: "3%" }}>
          3.{" "}
          <span style={{ fontSize: "14px" }}>
            All the materials, including your contributions are subject to our
            legal policies. Click{" "}
            <a style={{ PaddingLeft: "2px", color: "blue" }} href="#">
              here
            </a>{" "}
            for a better clarification.​​
          </span>
        </p>
        <p style={{ paddingLeft: "3%" }}>
          4.{" "}
          <span style={{ fontSize: "14px" }}>
            You can keep a maximum of 5 [Free] / 20 [Basic] / 40 [Pro] files
            under your contributor ship based on your account status. ​​
          </span>
        </p>
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
              Past Contributions
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
                  <th>Upload Date</th>
                  <th>Filename</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Total Downloaded</th>
                  <th>Removal Date</th>
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
      <div className="row" style={{ paddingTop: "2%" }}>
        <p style={{ paddingLeft: "3%" }}>
          1.{" "}
          <span style={{ fontSize: "14px" }}>
            We may keep the files after removal in our server for XX days to for
            compliance requirements.
          </span>
        </p>
      </div>

      {/* Income from Contribution */}

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
              Income from Contributions
            </h3>
          </div>
        </div>
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
                  <th>Particulars</th>
                  <th>Description</th>
                  <th>Unit Sold</th>
                  <th>Receivable</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Balance</th>
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

      <div className="row" style={{ paddingTop: "2%" }}>
        <p style={{ paddingLeft: "3%" }}>
          1.{" "}
          <span style={{ fontSize: "14px" }}>
            This is a record of performance of your contributions. For record of
            transactions, view{" "}
            <a style={{ PaddingLeft: "2px", color: "blue" }} href="#">
              my activity
            </a>
            &nbsp; section.
          </span>
        </p>
        <p style={{ paddingLeft: "3%" }}>
          2.{" "}
          <span style={{ fontSize: "14px" }}>
            We only store upto 12 months of track record for contributions. . ​​
          </span>
        </p>
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

export default UserContribution;
