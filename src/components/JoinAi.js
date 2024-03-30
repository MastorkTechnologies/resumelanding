import React from "react";
import joinaiStyle from "@/styles/joinai.module.css";
import Link from "next/link";

const JoinAi = () => {
  return (
    <section className={joinaiStyle.main}>
      <div className={joinaiStyle.container}>
        <div className={joinaiStyle.joinAideatils}>
          <h3>Join the Revolution with Resume Craft</h3>
          <p>
            Step into the future where resume creation meets speed and
            precision. Let Resume Craft <br /> be the backbone of your staffing
            success.
          </p>
        </div>
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
    </section>
  );
};

export default JoinAi;
