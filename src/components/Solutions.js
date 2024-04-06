import React from "react";
import solutionStyle from "@/styles/solutions.module.css";
import { solutionlist } from "@/assets";
import Image from "next/image";

const Solutions = () => {
  return (
    <section className={solutionStyle.main} id='solution'>
      <div className={solutionStyle.container}>
        <h4>Streamlining Success, One Resume at a Time</h4>
        <div className={solutionStyle.solutionlist}>
          {solutionlist.map((item, index) => {
            return (
              <div
                className={solutionStyle.card}
                key={index}
                style={{ background: `${item.background}` }}
              >
                <div className={solutionStyle.cardContainer}>
                  <Image
                    src={item.picture}
                    alt={item.title}
                    width={170}
                    height={170}
                  />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <button>
                    Get Started{" "}
                    <svg
                      width='13'
                      height='14'
                      viewBox='0 0 13 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.3999 2L12.9999 7.2L7.3999 12.4'
                        stroke='black'
                        strokeWidth='2'
                        strokeLinecap='square'
                        strokeLinejoin='bevel'
                      />
                      <path
                        d='M1 6.98571H12.2'
                        stroke='black'
                        strokeWidth='2.5'
                        strokeLinecap='square'
                        strokeLinejoin='bevel'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
