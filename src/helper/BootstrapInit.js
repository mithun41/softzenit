"use client";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
export default function BootstrapInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);
  return (
    <>
      <ScrollToTop
        smooth
        color="#246BFD"
        width="20"
        height="20"
        style={{
          bottom: "80px",
          right: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      />
    </>
  );
}
