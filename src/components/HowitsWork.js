import React from "react";
import hiwstyle from "@/styles/howitswork.module.css";
import { hiwList } from "@/assets";

const HowitsWork = () => {
  return (
    <section className={hiwstyle.main} id='howitworks'>
      <div className={hiwstyle.container}>
        <h4>Transforming the Staffing Landscape</h4>
        <div className={hiwstyle.hiwlist}>
          {hiwList.map((item, index) => {
            return (
              <div key={index} className={hiwstyle.card}>
                <div className={hiwstyle.cardContainer}>
                  <h2>{index + 1}</h2>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowitsWork;
