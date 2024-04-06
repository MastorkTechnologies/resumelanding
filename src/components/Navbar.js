"use client";
import React, { useEffect, useState } from "react";
import navStyle from "@/styles/nav.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const navigation = (link, scrollToId) => {
    setOpenMenu(false);
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
    <nav className={navStyle.main}>
      <div className={navStyle.navContainer}>
        <div className={navStyle.logo}>
          <h4 onClick={() => navigation("/")}>Resume Craft</h4>
        </div>
        <div className={navStyle.menuitems}>
          <p onClick={() => navigation("/", "solution")}>Solution</p>
          <p onClick={() => navigation("/", "howitworks")}>How it works</p>
          <p onClick={() => navigation("/", "features")}>Features</p>
          <p onClick={() => navigation("/blog")}>Blogs</p>
          <p onClick={() => navigation("/", "reviews")}>Reviews</p>
        </div>
        <div className={navStyle.right}>
          <p><b>Sign In</b></p>
          <button onClick={() => navigation("/contact")}>Get Started</button>
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
                <p onClick={() => navigation("/", "solution")}>Solution</p>
                
                <p onClick={() => navigation("/", "howitworks")}>
                  How it works
                </p>
                <p onClick={() => navigation("/", "features")}>Features</p>
                <p onClick={() => navigation("/blog")}>Blog</p>
                <p onClick={() => navigation("/", "reviews")}>Reviews</p>
              </div>
              <div className={navStyle.rightMobile}>
                <p><b>Sign In</b></p>
                <button onClick={() => navigation("/contact")}>
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
