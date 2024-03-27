"use client";
import React, { useState } from "react";
import navStyle from "@/styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className={navStyle.main}>
      <div className={navStyle.navContainer}>
        <div className={navStyle.logo}>
          <h4>
            <Link
              href='/'
              style={{ textDecoration: "none", color: "rgba(22, 115, 255, 1)" }}
            >
              resume shaper
            </Link>
          </h4>
        </div>
        <div className={navStyle.menuitems}>
          <p>
            <ScrollLink
              to='solution'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpenMenu(false)}
            >
              Solution
            </ScrollLink>
          </p>
          <p>
            <Link
              href='/blog'
              style={{ textDecoration: "none", color: "black" }}
            >
              Blog
            </Link>
          </p>
          <p>
            <ScrollLink
              to='howitworks'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpenMenu(false)}
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
              onClick={() => setOpenMenu(false)}
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
              onClick={() => setOpenMenu(false)}
            >
              Reviews
            </ScrollLink>
          </p>
        </div>
        <div className={navStyle.right}>
          <p>Sign In</p>
          <button>Get Started</button>
        </div>
        <div className={navStyle.mobile}>
          <Image
            src={"/Images/menuHumbugure.png"}
            alt={"menu"}
            width={24}
            height={24}
            onClick={() => setOpenMenu(true)}
          />
          {openMenu && (
            <div className={navStyle.menuSection}>
              <div
                className={navStyle.cross}
                onClick={() => setOpenMenu(false)}
              >
                <Image
                  src={"/Images/cross.png"}
                  alt=' '
                  width={25}
                  height={25}
                />
              </div>
              <div className={navStyle.menuMobileitems}>
                <p>
                  <ScrollLink
                    to='solution'
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setOpenMenu(false)}
                  >
                    Solution
                  </ScrollLink>
                </p>
                <p>
                  <Link
                    href='/blog'
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Blog
                  </Link>
                </p>
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
                    onClick={() => setOpenMenu(false)}
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
                    onClick={() => setOpenMenu(false)}
                  >
                    Reviews
                  </ScrollLink>
                </p>
              </div>
              <div className={navStyle.rightMobile}>
                <p>Sign In</p>
                <button>Get Started</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
