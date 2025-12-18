"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";

const BannerFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 pb-0 bg-cover "
        style={{ backgroundImage: 'url("./assets/img/banner-5/5.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-xl-5 align-self-center">
              <div className="banner-inner pe-xl-4 pb-5">
                <h6
                  className="bg-base-2 text-white subtitle"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  Designing for the future
                </h6>
                <h2
                  className="title text-white"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  Green Wings Smart IT
                </h2>
                <p
                  className="text-white mb-4"
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="1500"
                >
                  At SoftZen IT, we design cutting-edge solutions that empower
                  businesses to grow, scale, and succeed in the digital era.
                </p>
                <Link
                  className="btn btn-border-base-2 hidden "
                  data-aos="fade-right"
                  data-aos-delay="450"
                  data-aos-duration="1500"
                  href="/about"
                >
                  Discover More <FaPlus />
                </Link>
                <div
                  className="d-inline-block align-self-center mt-4 mt-md-0"
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="1500"
                >
                  <Link
                    href="#"
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover"
                  >
                    <img src="assets/img/video.svg" alt="img" />{" "}
                    <h6 className="d-inline-block text-white">how we work</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9 align-self-end">
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-5/4.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-3 top_image_bounce"
                    src="assets/img/banner-5/3.png"
                    alt="img"
                  />
                  <div>
                    <img
                      className="main-img"
                      src="assets/img/images/banner.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Ko7CXTDMhT0"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default BannerFive;
