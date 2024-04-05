"use client";
import React, { useEffect } from "react";
import fstyle from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navigation = (link, scrollToId) => {
    if (link && scrollToId) {
      if (pathName == "/") {
        scrollToElement(scrollToId);
      } else {
        router.push(link);
        setTimeout(() => {
          scrollToElement(scrollToId);
        }, 500);
      }
    } else {
      router.push(link);
    }
  };
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  useEffect(() => {
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1);
      scrollToElement(elementId);
    }
  }, []);
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
                <p>
                  <Link
                    href={"/about"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About us
                  </Link>
                </p>
                <p onClick={() => navigation("/", "howitworks")}>
                  How it works
                </p>
                <p onClick={() => navigation("/", "features")}>Features</p>
                <p onClick={() => navigation("/", "reviews")}>Testimonials</p>
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
                <p>
                  <Link
                    href='/refundpolicy'
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Refund policy
                  </Link>
                </p>
              </div>
            </div>
            <div className={fstyle.footeroptions}>
              <h4>Connect with us</h4>
              <div className={fstyle.foptions}>
                <p>
                  <a
                    href='mailto:contact@resumecraft.com'
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    contact@resumecraft.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
