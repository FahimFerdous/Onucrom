import React, { useState } from "react";

import { Formik, Field, Form } from "formik";
import PriceCards from "../views/PriceCards";
import ServiceDetailCards from "../views/ServiceDetailCards";

import { firebase } from "../../firebase";

const UserAccount = (props) => {
  const [showAccountModal, setshowAccountModal] = useState(false);
  const [showServiceSettings, setshowServiceSettings] = useState(false);

  var signUpDate = new Date();
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
  var subscriptionDate =
    months[signUpDate.getMonth() + 6] + " " + signUpDate.getFullYear();

  const TypeChangeHandler = (type) => {
    const updates = {};

    updates["/Users/" + props.uid + "/level"] = type;
    updates["/Users/" + props.uid + "/subscriptionDate"] = subscriptionDate;
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
      {/* Info Section */}
      <div className="row mb-none-30">
        <div className="col-md-12">
          <div className="blog-item  mb-30">
            <div className="content" style={{ display: "flex" }}>
              <div className="col-md-6">
                <p className="profilelabel">
                  Member Since <span style={{ margin: "10px" }}>:</span>
                  <span className="profiledata">{props.accountCreated}</span>
                </p>
                <p className="profilelabel">
                  Account Type <span style={{ margin: "10px" }}>:</span>{" "}
                  <span className="profiledata">{props.accountType}</span>
                </p>
              </div>

              <div className="col-md-6">
                <p className="profilelabel">
                  Member ID
                  <span style={{ margin: "10px" }}>:</span>{" "}
                  <span className="profiledata">{props.memberID}</span>
                </p>
                <p className="profilelabel">
                  Subscription till<span style={{ margin: "10px" }}>:</span>{" "}
                  <span className="profiledata">{props.subscriptionDate}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Text */}
      <div className="row mb-none-30">
        <div className="col-md-12 ">
          <div className="blog-item mb-30" style={{ marginTop: "1%" }}>
            <div
              className="content promoBg "
              style={{ display: "flex", padding: "2% 2%" }}
            >
              <p className="col-md-11 promoText">Change Account Type </p>
              <span
                className="promoselectionButton"
                href="#0"
                onClick={() => setshowAccountModal(true)}
              >
                <i
                  className="icofont-long-arrow-right promoText"
                  style={{ paddingTop: "1%", fontSize: "28px" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* account cards */}
      {showAccountModal ? (
        <div className="row mb-none-30">
          <PriceCards
            choose={() => {
              TypeChangeHandler("free");
            }}
            type="Free"
            typetext="Essential Services"
            price="Free"
            feature={[
              "20+ Categories of Investments",
              "Over 10+ investment choices",
              "Compare Upto 8 List of page names",
            ]}
          />
          <PriceCards
            choose={() => {
              TypeChangeHandler("Basic");
            }}
            type="Basic"
            typetext="Get More Than the Average"
            price="BDT 195/M"
            feature={[
              "50+ Categories of Investments",
              "Over 20+ investment choices",
              "Compare Upto 20 List of page names",
            ]}
          />
          <PriceCards
            choose={() => {
              TypeChangeHandler("Pro");
            }}
            type="Pro"
            typetext="Stay Ahed of Others"
            price="BDT 485/M"
            feature={[
              "70+ Categories of Investments",
              "Over 50+ investment choices",
              "Compare Upto 30 List of page names",
            ]}
          />
        </div>
      ) : (
        <div></div>
      )}

      {/* Services Section */}
      <div className="row mb-none-30" style={{ paddingTop: "2%" }}>
        <div className="col-md-12">
          <div className="blog-item  mb-30">
            <div>
              <p className="servicesHeadingText">Your Services</p>
            </div>
            <div className="serVicecontent">
              <ServiceDetailCards
                serviceName="Onu Invest"
                servicePrimaryDesc="All Investment Choices in One Place"
                serviceSecondaryDesc="Subscription Based access to Investment rates and much more"
              />
              <ServiceDetailCards
                serviceName="Infobase"
                servicePrimaryDesc="Know What you are Investing Into"
                serviceSecondaryDesc="Get Access to Free and Premium Research, Analytics, Information on investment choices"
              />
              <ServiceDetailCards
                serviceName="CapitalGate"
                servicePrimaryDesc="Ask for capital, let investor find and Fund you"
                serviceSecondaryDesc="Place your funding requirement in our platform and get investors"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Service Preference */}

      <div className="row mb-none-30">
        <div className="col-md-12 ">
          <div className="blog-item mb-30" style={{ marginTop: "1%" }}>
            <div
              className="content promoBg "
              style={{ display: "flex", padding: "2% 2%" }}
            >
              <p className="col-md-11 promoText">Service Preferences </p>
              <span
                className="promoselectionButton"
                href="#0"
                onClick={() => setshowServiceSettings(true)}
              >
                <i
                  className="fa fa-filter promoText"
                  style={{ paddingTop: "1%", fontSize: "28px" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {showServiceSettings ? (
        <div className="row mb-none-30" style={{ paddingTop: "2%" }}>
          <div className="col-md-12">
            <div className="blog-item  mb-30">
              <div className="content" style={{ display: "flex" }}>
                <Formik
                  initialValues={{
                    Preferences: [],
                  }}
                  onSubmit={(values) => console.log(values)}
                >
                  {(values) => (
                    <Form>
                      <div className="form-group">
                        <div className="custom_checkbox2">
                          <Field
                            className="serviceCheckbox"
                            type="checkbox"
                            name="Preferences"
                            value="Contributor"
                          />
                          <label
                            className="serviceCheckBoxLabel"
                            htmlFor="id-2"
                          >
                            Become a Contributor [place your research, analytics
                            or publications on our INFOBASE and EARN from your
                            works]
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom_checkbox2">
                          <Field
                            className="serviceCheckbox"
                            type="checkbox"
                            name="Preferences"
                            value="service offerings"
                          />
                          <label
                            className="serviceCheckBoxLabel"
                            htmlFor="id-2"
                          >
                            I want to receive updates on service offerings from
                            Onucrom.com [Recommanded]
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom_checkbox2">
                          <Field
                            className="serviceCheckbox"
                            type="checkbox"
                            name="Preferences"
                            value="investment rates"
                          />
                          <label
                            className="serviceCheckBoxLabel"
                            htmlFor="id-2"
                          >
                            I want to receive periodic updates on investment
                            rates from Onucrom.com [Recommanded]
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom_checkbox2">
                          <Field
                            className="serviceCheckbox"
                            type="checkbox"
                            name="Preferences"
                            value="marketing offers"
                          />
                          <label
                            className="serviceCheckBoxLabel"
                            htmlFor="id-2"
                          >
                            I want to receive marketing offers, updates and
                            other communications
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-secondary">Save</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UserAccount;
