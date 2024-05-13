import React from "react";
import heroStyle from "@/styles/herobanner.module.css";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className={heroStyle.main}>
      <div className={heroStyle.heroContainer}>
        <h3>
          <span>ResumeCraft.io </span> <br />
          Revolutionizing Resume Tailoring 
        </h3>
        <p>
        Your ally in resume-tailoring to secure that dream job. Simplify the process with ATS-compatibility, professionally formatted templates, and grammatical precision.
        </p>
        <button>
          <Link
            href={"/contact"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Get Started
          </Link>
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
          <h4>A New Dawn For Streamlining Your Resume Crafting Process</h4>
          <p>
            {/* There was a time when <span>staffing professionals</span> like you
            were buried under piles of resumes, racing against time to <br />{" "}
            meet the endless demands of job placements. But now, with{" "}
            <span>Resume Craft</span>, those days are a distant memory. */}
            There was a time when students struggled with the complexity of resume tailoring alone, feeling the weight of uncertainty and self-doubt. But Resumecraft.io has changed the game, simplifying the process with its innovative platform.

          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
