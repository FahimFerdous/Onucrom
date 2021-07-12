import React from "react";

const Main = () => {
  return (
    <div>
      {/*banner-section start */}
      <section className="banner-section banner--four">
        <div
          className="banner-shape bg_img"
          data-background="assets/images/elements/home4-banner-shape.png"></div>
        <div className="banner-elements-image anim-bounce">
          <img src="assets/images/elements/home4-banner-el.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-content-area">
                <div className="banner-content">
                  <span className="banner-sub-title">
                    EASY WAY TO Make Profit
                  </span>
                  <h2 className="banner-title text-white">
                    Many Ways, One Solution
                  </h2>
                  <p className="text-white">
                    Onuchrom helps everyone to have an informed investment
                    decision
                  </p>
                </div>
                <div className="banner-btn-area">
                  <a href="#0" className="btn btn-info btn-round">
                    get started now!
                  </a>
                  <a href="#0" className="video-btn video-btn--info">
                    <span className="icon">
                      <i className="icofont-ui-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*banner-section end */}
      {/* counter-section start */}
      <div className="counter-sections pt-lg-0 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-area style--two d-flex justify-content-between">
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src="assets/images/icons/counter/1.svg" alt="icon" />
                  </div>
                  <div className="counter-content">
                    <span>$</span>
                    <span className="counter">961</span>
                    <span>k</span>
                    <span className="caption">Invested in Pitches</span>
                  </div>
                </div>
                {/* counter-item end */}
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src="assets/images/icons/counter/2.svg" alt="icon" />
                  </div>
                  <div className="counter-content">
                    <span>$</span>
                    <span className="counter">634</span>
                    <span>k</span>
                    <span className="caption">Registered Members</span>
                  </div>
                </div>
                {/* counter-item end */}
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src="assets/images/icons/counter/3.svg" alt="icon" />
                  </div>
                  <div className="counter-content">
                    <span>$</span>
                    <span className="counter">14</span>
                    <span>k</span>
                    <span className="caption">Average Investment</span>
                  </div>
                </div>
                {/* counter-item end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      ;{/* counter-section end */}
      {/* choose-us-section start */}
      <section className="choose-us-section pt-120 pb-120">
        <div className="round-shape-el">
          <img
            src="assets/images/elements/choose-us-circle-shape.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <span className="section-subtitle">Amazing Services</span>
                <h2 className="section-title">Why Should Choose Us</h2>
                <p>
                  Our service gives you better result and savings, as per your
                  requirement and you can manage youer investments from anywhere
                  either form home or work place,any time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-thumb d-xl-block d-none anim-bounce">
                <img
                  src="assets/images/elements/choose-us-img.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-xl-8">
              <div className="choose-us-slider__three owl-carousel">
                <div className="choose-item text-center">
                  <div className="choose-thumb">
                    <img src="assets/images/choose-us/1.png" alt="image" />
                  </div>
                  <div className="choose-content">
                    <h3 className="title">Service 1</h3>
                    <p>A description of an effort and why it matters</p>
                    <a href="#0" className="read-more-btn">
                      read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                {/* choose-item end */}
                <div className="choose-item text-center">
                  <div className="choose-thumb">
                    <img src="assets/images/choose-us/2.png" alt="image" />
                  </div>
                  <div className="choose-content">
                    <h3 className="title">Service 2</h3>
                    <p>A description of an effort and why it matters</p>
                    <a href="#0" className="read-more-btn">
                      read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                {/* choose-item end */}
                <div className="choose-item text-center">
                  <div className="choose-thumb">
                    <img src="assets/images/choose-us/3.png" alt="image" />
                  </div>
                  <div className="choose-content">
                    <h3 className="title">Service 3</h3>
                    <p>A description of an effort and why it matters</p>
                    <a href="#0" className="read-more-btn">
                      read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                {/* choose-item end */}
                <div className="choose-item text-center">
                  <div className="choose-thumb">
                    <img src="assets/images/choose-us/4.png" alt="image" />
                  </div>
                  <div className="choose-content">
                    <h3 className="title">Service 4</h3>
                    <p>A description of an effort and why it matters</p>
                    <a href="#0" className="read-more-btn">
                      read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                {/* choose-item end */}
                <div className="choose-item text-center">
                  <div className="choose-thumb">
                    <img src="assets/images/choose-us/5.png" alt="image" />
                  </div>
                  <div className="choose-content">
                    <h3 className="title">Service 5</h3>
                    <p>Get to know opportunities</p>
                    <a href="#0" className="read-more-btn">
                      read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                {/* choose-item end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* choose-us-section end */}
      {/* features-section start */}
      <section className="features-section style--two pt-120 pb-120">
        <div className="map-ele">
          <img src="assets/images/elements/map-ele.png" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <span className="section-subtitle">Our Amazing Features</span>
                <h2 className="section-title">Investing For Everyone</h2>
                <p>
                  We are worldwide investment company who are committed to the
                  principle of revenue maximization and reduction of the
                  financial risks at investing.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-sm-6">
              <div className="feature-item item--style2 text-center">
                <div className="icon">
                  <img src="assets/images/icons/features/1.svg" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">Simple</h3>
                  <a href="#0" className="read-more-btn">
                    read more<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* feature-item end */}
            <div className="col-lg-2 col-sm-6">
              <div className="feature-item item--style2 text-center">
                <div className="icon">
                  <img src="assets/images/icons/features/2.svg" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">transparent</h3>
                  <a href="#0" className="read-more-btn">
                    read more<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* feature-item end */}
            <div className="col-lg-2 offset-lg-1 col-sm-6">
              <div className="feature-item item--style2 text-center">
                <div className="icon">
                  <img src="assets/images/icons/features/3.svg" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">security</h3>
                  <a href="#0" className="read-more-btn">
                    read more<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* feature-item end */}
            <div className="col-lg-2 offset-lg-1 col-sm-6">
              <div className="feature-item item--style2 text-center">
                <div className="icon">
                  <img src="assets/images/icons/features/5.svg" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">compliant</h3>
                  <a href="#0" className="read-more-btn">
                    read more<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* feature-item end */}
            <div className="col-lg-2 col-sm-6">
              <div className="feature-item item--style2 text-center">
                <div className="icon">
                  <img src="assets/images/icons/features/4.svg" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">efficient</h3>
                  <a href="#0" className="read-more-btn">
                    read more<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* feature-item end */}
          </div>
        </div>
      </section>
      ;{/* features-section end */}
      {/* invest-section start */}
      <section className="invest-section pt-120 pb-120">
        <div className="round-shape d-xl-block d-none">
          <img src="assets/images/elements/invest-shape.png" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-header text-center text-white">
                <span className="section-subtitle">
                  The smarter way to invest!
                </span>
                <h2 className="section-title">
                  Start investing! It’s never too late
                </h2>
                <p>
                  Make sound investment decisions with the help of our research
                  & analytical assets.The minimum deposit is $5, and maximum is
                  $100,000. We pay 7 days per week. You may make additional
                  deposits at any time. All our payments are instant payments.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="invest-table-area style--two wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.5s">
                <table>
                  <thead>
                    <tr>
                      <th>share</th>
                      <th>price</th>
                      <th>growth</th>
                      <th>daily dividend</th>
                      <th>investors</th>
                      <th>time remainig</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="person-details">
                          <div className="thumb">
                            <img src="assets/images/invest/1.png" alt="image" />
                          </div>
                          <div className="content">
                            <span className="name">Forex Stable Income</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="price">$10.50</span>
                      </td>
                      <td>
                        <span className="growth">
                          122% <i className="fa fa-arrow-up"></i>
                        </span>
                      </td>
                      <td>
                        <span className="daily-dividend">$0.9</span>
                      </td>
                      <td>
                        <span className="investors-amount">718</span>
                      </td>
                      <td>
                        <span className="remaining-time">21 DAYS</span>
                        <a
                          href="#0"
                          className="btn btn-primary btn-round pull-right">
                          invest now
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="person-details">
                          <div className="thumb">
                            <img src="assets/images/invest/2.png" alt="image" />
                          </div>
                          <div className="content">
                            <span className="name">Pavimentadora Real Ltd</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="price">$10.50</span>
                      </td>
                      <td>
                        <span className="growth">
                          122% <i className="fa fa-arrow-up"></i>
                        </span>
                      </td>
                      <td>
                        <span className="daily-dividend">$0.9</span>
                      </td>
                      <td>
                        <span className="investors-amount">718</span>
                      </td>
                      <td>
                        <span className="remaining-time">21 DAYS</span>
                        <a
                          href="#0"
                          className="btn btn-primary btn-round pull-right">
                          invest now
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="person-details">
                          <div className="thumb">
                            <img src="assets/images/invest/3.png" alt="image" />
                          </div>
                          <div className="content">
                            <span className="name">Ethereum Farm</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="price">$10.50</span>
                      </td>
                      <td>
                        <span className="growth">
                          122% <i className="fa fa-arrow-up"></i>
                        </span>
                      </td>
                      <td>
                        <span className="daily-dividend">$0.9</span>
                      </td>
                      <td>
                        <span className="investors-amount">718</span>
                      </td>
                      <td>
                        <span className="remaining-time">21 DAYS</span>
                        <a
                          href="#0"
                          className="btn btn-primary btn-round pull-right">
                          invest now
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="person-details">
                          <div className="thumb">
                            <img src="assets/images/invest/4.png" alt="image" />
                          </div>
                          <div className="content">
                            <span className="name">Legacinet Works</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="price">$10.50</span>
                      </td>
                      <td>
                        <span className="growth">
                          122% <i className="fa fa-arrow-up"></i>
                        </span>
                      </td>
                      <td>
                        <span className="daily-dividend">$0.9</span>
                      </td>
                      <td>
                        <span className="investors-amount">718</span>
                      </td>
                      <td>
                        <span className="remaining-time">21 DAYS</span>
                        <a
                          href="#0"
                          className="btn btn-primary btn-round pull-right">
                          invest now
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="person-details">
                          <div className="thumb">
                            <img src="assets/images/invest/2.png" alt="image" />
                          </div>
                          <div className="content">
                            <span className="name">Healthcare Tech</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="price">$10.50</span>
                      </td>
                      <td>
                        <span className="growth">
                          122% <i className="fa fa-arrow-up"></i>
                        </span>
                      </td>
                      <td>
                        <span className="daily-dividend">$0.9</span>
                      </td>
                      <td>
                        <span className="investors-amount">718</span>
                      </td>
                      <td>
                        <span className="remaining-time">21 DAYS</span>
                        <a
                          href="#0"
                          className="btn btn-primary btn-round pull-right">
                          invest now
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="btn-area mt-50 text-center">
                <a href="#0" className="btn btn-primary btn-hover text-small">
                  browse more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* invest-section end */}
      {/* offer-section start */}
      <section className="offer-section pt-120 pb-120">
        <div className="ball-object">
          <img src="assets/images/elements/offer-ball-object.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-8">
                  <div className="offer-item">
                    <div className="icon">
                      <img src="assets/images/icons/offer/1.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h3 className="title">smart deposit</h3>
                      <p>Best way t o put your idle money to work.</p>
                      <a href="#0" className="read-more-btn">
                        read more<i className="icofont-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* offer-item end */}
                </div>
                <div className="col-lg-8 offset-lg-2">
                  <div className="offer-item">
                    <div className="icon">
                      <img src="assets/images/icons/offer/2.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h3 className="title">One - Tap Invest</h3>
                      <p>Invest without net baning/debit card.</p>
                      <a href="#0" className="read-more-btn">
                        read more<i className="icofont-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* offer-item end */}
                </div>
                <div className="col-lg-8 offset-lg-4">
                  <div className="offer-item">
                    <div className="icon">
                      <img src="assets/images/icons/offer/3.svg" alt="icon" />
                    </div>
                    <div className="content">
                      <h3 className="title">invest & saving</h3>
                      <p>Grow your saving by investing as little as $5</p>
                      <a href="#0" className="read-more-btn">
                        read more<i className="icofont-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* offer-item end */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5">
              <div className="offer-wrapper-content">
                <span className="subtitle">
                  Our mission is to help our User
                </span>
                <h2 className="title">To Maximize Money</h2>
                <p>
                  Whether you're new to investing or a seasoned pro, Behoof does
                  what is right for you and your money. On average, our
                  investing principles can increase returns by 15% when compared
                  to the typical investor.
                </p>
                <p>
                  We believe that the future of finance looks very different to
                  how it looks today and we offer qualifying investors the
                  opportunity to invest in the companies and products that are
                  building the future of finance.
                </p>
                <a href="#0" className="btn btn-primary btn-hover">
                  what we offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* offer-section end */}
      {/* calculate-profit-section start */}
      <section className="calculate-profit-section pt-120 pb-120">
        <div
          className="bg_img overlay"
          data-background="assets/images/invest-plan2.jpg"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center text-white">
                <span className="section-subtitle">
                  Calculate the amazing profits
                </span>
                <h2 className="section-title">You Can Earn</h2>
                <p>
                  Find out what the returns on your current investments will be
                  valued at, in future. All our issuers have obligation to pay
                  dividends for first year regardless their financial situation
                  that your investments are 100% secured. Calculate your profit
                  from a share using our calculator:
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="calculate-area wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s">
                <ul
                  className="nav nav-tabs justify-content-around"
                  id="calculatorTab"
                  role="tablist">
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icons/invest-calculate/1.svg"
                        alt="icon-image"
                      />
                    </div>
                    <h5 className="package-name">Basic Plan</h5>
                    <span className="percentage">2%</span>
                    <a
                      className="active"
                      id="basic-tab"
                      data-toggle="tab"
                      href="#basic"
                      role="tab"
                      aria-controls="basic"
                      aria-selected="true">
                      calculate
                    </a>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icons/invest-calculate/2.svg"
                        alt="icon-image"
                      />
                    </div>
                    <h5 className="package-name">satandard Plan</h5>
                    <span className="percentage">3%</span>
                    <a
                      id="satandard-tab"
                      data-toggle="tab"
                      href="#satandard"
                      role="tab"
                      aria-controls="satandard"
                      aria-selected="false">
                      calculate
                    </a>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icons/invest-calculate/3.svg"
                        alt="icon-image"
                      />
                    </div>
                    <h5 className="package-name">premium Plan</h5>
                    <span className="percentage">2%</span>
                    <a
                      id="premium-tab"
                      data-toggle="tab"
                      href="#premium"
                      role="tab"
                      aria-controls="premium"
                      aria-selected="false">
                      calculate
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="calculatorTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="basic"
                    role="tabpanel"
                    aria-labelledby="basic-tab">
                    <div className="invest-amount-area text-center">
                      <h4 className="title">Invest Amount</h4>
                      <div className="main-amount">
                        <input
                          type="text"
                          className="calculator-invest"
                          id="basic-amount"
                          readonly
                        />
                      </div>
                      <div
                        id="slider-range-min-one"
                        className="invest-range-slider"></div>
                    </div>
                    {/* invest-amount-area end */}
                    <div className="plan-amount-calculate">
                      <div className="item">
                        <span className="caption">Basic plan</span>
                        <span className="details">Minimum Deposit $5</span>
                      </div>
                      <div className="item">
                        <span className="profit-amount">$12.67</span>
                        <span className="profit-details">Daily Profit</span>
                      </div>
                      <div className="item">
                        <span className="profit-amount">$12.67</span>
                        <span className="profit-details">per month</span>
                      </div>
                      <div className="item">
                        <a href="#" className="invest-btn btn-round">
                          invest now
                        </a>
                      </div>
                    </div>
                    {/* plan-amount-calculate end */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="satandard"
                    role="tabpanel"
                    aria-labelledby="satandard-tab">
                    <div className="invest-amount-area text-center">
                      <h4 className="title">Invest Amount</h4>
                      <div className="main-amount">
                        <input
                          type="text"
                          className="calculator-invest"
                          id="satandard-amount"
                          readonly
                        />
                      </div>
                      <div
                        id="slider-range-min-two"
                        className="invest-range-slider"></div>
                    </div>
                    {/* invest-amount-area end */}
                    <div className="plan-amount-calculate">
                      <div className="item">
                        <span className="caption">satandard plan</span>
                        <span className="details">Minimum Deposit $15</span>
                      </div>
                      <div className="item">
                        <span className="profit-amount">$12.67</span>
                        <span className="profit-details">Daily Profit</span>
                      </div>
                      <div className="item">
                        <span className="profit-amount">$12.67</span>
                        <span className="profit-details">per month</span>
                      </div>
                      <div className="item">
                        <a href="#" className="invest-btn btn-round">
                          invest now
                        </a>
                      </div>
                    </div>
                    {/* plan-amount-calculate end */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="premium"
                    role="tabpanel"
                    aria-labelledby="premium-tab">
                    <div className="invest-amount-area text-center">
                      <h4 className="title">Invest Amount</h4>
                      <div className="main-amount">
                        <input
                          type="text"
                          className="calculator-invest"
                          id="premium-amount"
                          readonly
                        />
                      </div>
                      <div
                        id="slider-range-min-three"
                        className="invest-range-slider"></div>
                    </div>
                    {/* invest-amount-area end */}
                    <div className="plan-amount-calculate">
                      <div className="item">
                        <span className="caption">premium plan</span>
                        <span className="details">Minimum Deposit $25</span>
                      </div>
                      <div className="item">
                        <span className="profit-amount">$12.67</span>
                        <span className="profit-details">Daily Profit</span>
                      </div>
                      <div className="item">
                        <span className="profit-amount">$12.67</span>
                        <span className="profit-details">per month</span>
                      </div>
                      <div className="item">
                        <a href="#" className="invest-btn btn-round">
                          invest now
                        </a>
                      </div>
                    </div>
                    {/* plan-amount-calculate end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* calculate-profit-section end */}
      {/* deposit-withdraw-section start */}
      <section className="deposit-withdraw-section pt-120 pb-120">
        <div className="circle-object">
          <img
            src="assets/images/elements/deposit-circle-shape.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <span className="section-subtitle">Convenient money</span>
                <h2 className="section-title">Deposit & Withdrawal</h2>
                <p>
                  Depositing or withdrawing money is simple.We support several
                  payment methods, which depend on what country your payment
                  account is located in.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="dep-wth-option-area wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s">
                <span className="circle one"></span>
                <span className="circle two"></span>
                <span className="circle three"></span>
                <span className="circle four"></span>
                <a href="#0" className="card-item">
                  <span className="icon">
                    <img
                      src="assets/images/icons/payment-option/card.svg"
                      alt="image"
                    />
                  </span>
                  <span className="caption">Credit Card</span>
                </a>
                {/* card-item end */}
                <a href="#0" className="card-item">
                  <span className="icon">
                    <img
                      src="assets/images/icons/payment-option/paypal.svg"
                      alt="image"
                    />
                  </span>
                  <span className="caption">Credit Card</span>
                </a>
                {/* card-item end */}
                <a href="#0" className="card-item">
                  <span className="icon">
                    <img
                      src="assets/images/icons/payment-option/bitcoin.svg"
                      alt="image"
                    />
                  </span>
                  <span className="caption">Credit Card</span>
                </a>
                {/* card-item end */}
                <a href="#0" className="card-item">
                  <span className="icon">
                    <img
                      src="assets/images/icons/payment-option/litecoin.svg"
                      alt="image"
                    />
                  </span>
                  <span className="caption">Credit Card</span>
                </a>
                {/* card-item end */}
                <a href="#0" className="card-item">
                  <span className="icon">
                    <img
                      src="assets/images/icons/payment-option/ethereum.svg"
                      alt="image"
                    />
                  </span>
                  <span className="caption">Credit Card</span>
                </a>
                {/* card-item end */}
                <a href="#0" className="card-item">
                  <span className="icon">
                    <img
                      src="assets/images/icons/payment-option/ripple.svg"
                      alt="image"
                    />
                  </span>
                  <span className="caption">Credit Card</span>
                </a>
                {/* card-item end */}
                <a href="#0" className="text-btn">
                  view all option
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item">
                <div className="icon">
                  <div className="icon-inner">
                    <img
                      src="assets/images/icons/payment-option/ft1.svg"
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="content">
                  <h3 className="title">No Limits</h3>
                  <p>Unlimited maximum withdrawal amount</p>
                </div>
              </div>
              {/* feature-item end */}
              <div className="feature-item">
                <div className="icon">
                  <div className="icon-inner">
                    <img
                      src="assets/images/icons/payment-option/ft2.svg"
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="content">
                  <h3 className="title">Withdrawal in 24 /7</h3>
                  <p>Deposit – instantaneous</p>
                </div>
              </div>
              {/* feature-item end */}
            </div>
          </div>
        </div>
      </section>
      ;{/* deposit-withdraw-section end */}
      {/* investors-section start */}
      <section className="investors-section pt-120 pb-120">
        <div
          className="bg-shape bg_img"
          data-background="assets/images/investor-bg.png"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div
                className="section-header text-white wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s">
                <span className="section-subtitle">Take a look at our</span>
                <h2 className="section-title">Top 10 Investors</h2>
                <p>
                  A look at the top ten investors of all time and the strategies
                  they used to make their money.
                </p>
              </div>
            </div>
          </div>
          <div className="investor-slider owl-carousel">
            <div className="investor-item text-center">
              <div className="thumb">
                <img src="assets/images/investors/1.png" alt="image" />
                <a href="#0" className="icon">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="content">
                <h4 className="name">
                  <a href="#0">Sean Obrien</a>
                </h4>
                <span className="amount">$50,000.00</span>
                <p>
                  Pain by{" "}
                  <img
                    src="assets/images/icons/withdraw/bitcoin.png"
                    alt="icon"
                  />
                </p>
              </div>
            </div>
            {/* investor-item end */}
            <div className="investor-item text-center">
              <div className="thumb">
                <img src="assets/images/investors/2.png" alt="image" />
                <a href="#0" className="icon">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="content">
                <h4 className="name">
                  <a href="#0">Naomi White</a>
                </h4>
                <span className="amount">$43,500.00</span>
                <p>
                  Pain by{" "}
                  <img
                    src="assets/images/icons/withdraw/bitcoin.png"
                    alt="icon"
                  />
                </p>
              </div>
            </div>
            {/* investor-item end */}
            <div className="investor-item text-center">
              <div className="thumb">
                <img src="assets/images/investors/3.png" alt="image" />
                <a href="#0" className="icon">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="content">
                <h4 className="name">
                  <a href="#0">Tom Barker</a>
                </h4>
                <span className="amount">$42,000.00</span>
                <p>
                  Pain by{" "}
                  <img
                    src="assets/images/icons/withdraw/bitcoin.png"
                    alt="icon"
                  />
                </p>
              </div>
            </div>
            {/* investor-item end */}
            <div className="investor-item text-center">
              <div className="thumb">
                <img src="assets/images/investors/1.png" alt="image" />
                <a href="#0" className="icon">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="content">
                <h4 className="name">
                  <a href="#0">Sean Obrien</a>
                </h4>
                <span className="amount">$50,000.00</span>
                <p>
                  Pain by{" "}
                  <img
                    src="assets/images/icons/withdraw/bitcoin.png"
                    alt="icon"
                  />
                </p>
              </div>
            </div>
            {/* investor-item end */}
          </div>
        </div>
      </section>
      ;{/* investors-section end */}
      {/* affiliate-features-section start */}
      <section className="affiliate-features-section style--tow pt-120 pb-120">
        <div className="shape-el">
          <img
            src="assets/images/elements/affiliate-round-shape.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row mb-none-30">
                <div className="col-md-6">
                  <div className="affiliate-features-item item--style2 text-center mb-30">
                    <div className="icon">
                      <img
                        src="assets/images/icons/affiliate-features/1.svg"
                        alt="image"
                      />
                    </div>
                    <span className="subtitle">Enjoy unlimited</span>
                    <h3 className="title">Commissions</h3>
                  </div>
                </div>
                {/* affiliate-features-item end */}
                <div className="col-md-6">
                  <div className="affiliate-features-item item--style2 text-center mb-30">
                    <div className="icon">
                      <img
                        src="assets/images/icons/affiliate-features/2.svg"
                        alt="image"
                      />
                    </div>
                    <span className="subtitle">Extra Bonus and</span>
                    <h3 className="title">Promotions</h3>
                  </div>
                </div>
                {/* affiliate-features-item end */}
                <div className="col-md-6">
                  <div className="affiliate-features-item item--style2 text-center mb-30">
                    <div className="icon">
                      <img
                        src="assets/images/icons/affiliate-features/3.svg"
                        alt="image"
                      />
                    </div>
                    <span className="subtitle">Get top notch</span>
                    <h3 className="title">Support</h3>
                  </div>
                </div>
                {/* affiliate-features-item end */}
                <div className="col-md-6">
                  <div className="affiliate-features-item item--style2 text-center mb-30">
                    <div className="icon">
                      <img
                        src="assets/images/icons/affiliate-features/4.svg"
                        alt="image"
                      />
                    </div>
                    <span className="subtitle">Joining is</span>
                    <h3 className="title">Free & Easy</h3>
                  </div>
                </div>
                {/* affiliate-features-item end */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="affiliate-features-content mt-lg-0 mt-5">
                <div className="section-header">
                  <span className="section-subtitle">Earn The Big Money</span>
                  <h2 className="section-title">Affiliate Program</h2>
                  <p>
                    Our affiliate program can increase your income by receiving
                    percentage from the purchases made by your referrals into.{" "}
                  </p>
                </div>
                <p>
                  Invite other users (for example, your friends, co-workers,
                  etc.) to join the project. After registration they will be
                  your referrals; and if they purchase any item on our web site
                  you receive 24% reward.
                </p>
                <a href="#0" className="btn btn-primary btn-hover text-small">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* affiliate-features-section end */}
    </div>
  );
};

export default Main;
