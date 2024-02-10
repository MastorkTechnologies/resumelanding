import React from "react";
import "../styleSheet/Landing.css";
import { useNavigate } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="section6">
      <div className="footerContent">
        <h2 className="text-white text-center">RESUME SHAPER</h2>
        <h4 className="subHeadingSec6 text-white">
          Resumes Redefined, Success Rewritten.
        </h4>
        <div className="row footerLinks text-center">
          <div className="col-md-4">
            <h5 className="text-white">Quick Links</h5>
            <p
              className=" text-white"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/aboutus");
                window.scrollTo(0, 0);
              }}
            >
              About Us
            </p>
            <p
              className=" text-white"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 1440);
              }}
            >
              How It works
            </p>
            <p
              className=" text-white"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 2150);
              }}
            >
              Features
            </p>
            <p
              className=" text-white"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 2750);
              }}
            >
              Testimonials
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Privacy and Terms</h5>
            <p
              className=" text-white"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/privacypolicy");
                window.scrollTo(0, 0);
              }}
            >
              Privacy Policy
            </p>
            <p
              className=" text-white"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/termsandconditions");
                window.scrollTo(0, 0);
              }}
            >
              Terms Of Service
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Connect with us</h5>
            <p className=" text-white">+91 9992207659</p>
            <p className=" text-white">contact@mastork.com</p>
          </div>
        </div>

        <div className="row footerLinks text-center text-white">
          <p>
            ResumeShaper <FaRegCopyright /> 2024{" "}
            <b>Mastork Technologies Pvt. Ltd. </b> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
