"use client";
import React from "react";
import fstyle from "@/styles/footer.module.css";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={fstyle.main}>
      <div className={fstyle.container}>
        <div className={fstyle.upper}>
          <h3>
            Resumes Redefined,
            <br /> Success Rewritten.
          </h3>
          <button>
            <Link
              href={"/contact"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Get Started
            </Link>
          </button>
        </div>
        <div className={fstyle.down}>
          <div className={fstyle.downleft}>
            <h4>Resume Craft</h4>
            <p>Resumes Redefined, Success Rewritten.</p>
            <Image
              src={"/Images/Social.png"}
              alt=''
              height={20}
              width={200}
              style={{ marginTop: "20px" }}
            />
          </div>
          <div className={fstyle.downright}>
            <div className={fstyle.footeroptions}>
              <h4>Quick Links</h4>
              <div className={fstyle.foptions}>
                <p>About us </p>
                <p>
                  <ScrollLink
                    to='howitworks'
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    How it works
                  </ScrollLink>
                </p>
                <p>
                  <ScrollLink
                    to='features'
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Features
                  </ScrollLink>
                </p>
                <p>
                  <ScrollLink
                    to='reviews'
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Testimonials
                  </ScrollLink>
                </p>
              </div>
            </div>
            <div className={fstyle.footeroptions}>
              <h4>Privacy & Terms</h4>
              <div className={fstyle.foptions}>
                <p>
                  <Link
                    href='/privacypolicy'
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Privacy policy
                  </Link>
                </p>
                <p>
                  <Link
                    href='/termsofservice'
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Terms of service
                  </Link>
                </p>
              </div>
            </div>
            <div className={fstyle.footeroptions}>
              <h4>Connect with us</h4>
              <div className={fstyle.foptions}>
                <p>contact@resumecraft.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
