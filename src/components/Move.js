import React from "react";
import mstyle from "@/styles/move.module.css";

const Move = () => {
  return (
    <section className={mstyle.main}>
      <div className={mstyle.container}>
        <div className={mstyle.joinAideatils}>
          <h3>Embark on Your Journey</h3>
          <p>
            Step into a world where Raize AI redefines what’s possible in
            staffing.
          </p>
        </div>
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
              stroke-width='2.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Move;
