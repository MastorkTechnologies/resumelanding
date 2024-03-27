import React from "react";
import featureStyle from "@/styles/feature.module.css";
import Image from "next/image";

const Features = () => {
  return (
    <section className={featureStyle.main} id='features'>
      <div className={featureStyle.container}>
        <h4>Why Resume Craft is a Staffing Essential</h4>
        <div className={featureStyle.cardsection}>
          <div className={featureStyle.card}>
            <div className={featureStyle.cardContainer}>
              <Image
                src={"/Images/f1.png"}
                alt=''
                width={360}
                height={275}
                className={featureStyle.cardImg}
              />
              <h4>Bulk Processing, Personal Touch</h4>
              <p>
                Handle numerous resumes with the efficiency of a personal
                assistant, all thanks to Resume Craft.
              </p>
            </div>
          </div>
          <div className={featureStyle.card}>
            <div className={featureStyle.cardContainer}>
              <Image
                src={"/Images/f2.png"}
                alt=''
                width={360}
                height={275}
                className={featureStyle.cardImg}
              />
              <h4>Precision Matching</h4>
              <p>
                Every resume is a key, perfectly cut to fit the lock of job
                specifications.
              </p>
            </div>
          </div>
          <div className={featureStyle.card}>
            <div className={featureStyle.cardContainer}>
              <Image
                src={"/Images/f3.png"}
                alt=''
                width={360}
                height={275}
                className={featureStyle.cardImg}
              />
              <h4>Professional Presentation</h4>
              <p>
                Stand out with resumes that showcase neat, impactful
                professionalism.
              </p>
            </div>
          </div>
          <div className={featureStyle.card}>
            <div className={featureStyle.cardContainer}>
              <Image
                src={"/Images/f4.png"}
                alt=''
                width={360}
                height={275}
                className={featureStyle.cardImg}
              />
              <h4>Time, Reclaimed</h4>
              <p>
                Rediscover the value of time, with more hours freed up for
                strategic tasks.
              </p>
            </div>
          </div>
          <div className={featureStyle.card}>
            <div className={featureStyle.cardContainer}>
              <Image
                src={"/Images/f5.png"}
                alt=''
                width={360}
                height={275}
                className={featureStyle.cardImg}
              />
              <h4>Support Always on Standby</h4>
              <p>
                Whenever you have a question, our team is ready to guide you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
