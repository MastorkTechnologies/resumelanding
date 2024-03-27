import React from "react";
import heroStyle from "@/styles/herobanner.module.css";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className={heroStyle.main}>
      <div className={heroStyle.heroContainer}>
        <h3>
          <span>Resume Craft </span> <br />
          Revolutionizing Resume Creation
        </h3>
        <p>
          In the fast-paced world of staffing, there's a game changer that's
          turning the tide on traditional resume writing. Enter Resume Craft – your
          partner in creating resumes quickly and efficiently.
        </p>
        <button>
          Get Started
          <svg
            width='23'
            height='24'
            viewBox='0 0 23 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.125 5.4375L19.6875 12M19.6875 12L13.125 18.5625M19.6875 12L2.8125 12'
              stroke='#F9FAFB'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
      <div className={heroStyle.herodetails}>
        <div className={heroStyle.bg}></div>
        <Image
          src={"/Images/hero.png"}
          alt='heroImage'
          width={1121}
          height={610}
          className={heroStyle.heroImage}
        />
        <div className={heroStyle.herodetailsContent}>
          <h4>A New Dawn for Staffing Agencies</h4>
          <p>
            There was a time when <span>staffing professionals</span> like you
            were buried under piles of resumes, racing against time to <br />{" "}
            meet the endless demands of job placements. But now, with{" "}
            <span>Resume Craft</span>, those days are a distant memory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
