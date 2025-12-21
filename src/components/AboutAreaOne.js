import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className="about-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <img
                  className="animate-img-1 top_image_bounce"
                  src="assets/img/about/2.png"
                  alt="img"
                />
                <img
                  className="animate-img-2 left_image_bounce"
                  src="assets/img/about/3.png"
                  alt="img"
                />
                <img
                  className="animate-img-3 top_image_bounce"
                  src="assets/img/banner/5.svg"
                  alt="img"
                />
                <img
                  className="main-img"
                  src="assets/img/banner-5/hero-one.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                <h6 className="sub-title">ABOUT US</h6>
                <h2 className="title">
                  Growth & <span>Partnership</span> Focused
                </h2>
                <p className="content mb-4 mb-xl-5">
                  SoftZen IT is your growth partner, delivering smart software
                  and digital solutions that help businesses thrive. Your goals
                  inspire us, and your success drives our passion.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/2.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our Vision</h5>
                        <p>
                          We help businesses grow with modern websites, mobile
                          apps, and scalable software built for real-world
                          impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/3.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our Approach</h5>
                        <p>
                          We work as partners, not vendors—focused on clarity,
                          reliability, and results that drive long-term business
                          value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
