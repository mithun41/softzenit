import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import serviceList from "../scripts/serviceList";

const ServiceAreaFour = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div
        className="service-area bg-cover py-10"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h6 className="sub-title">What We Provides</h6>
                <h2 className="title">
                  Digital <span>Core</span> Services
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {serviceList.slice(0, 4).map((service, index) => (
              <div className="col-xl-3 col-md-6" key={index}>
                <div className="single-work-process-inner">
                  <div
                    className="thumb mb-4"
                    style={{ height: "200px", overflow: "hidden" }}
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">{service.title}</h5>
                    <p className="content mb-3">{service.des}</p>
                    <Link
                      className="read-more-text"
                      href={service.details || "#"}
                    >
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFour;
