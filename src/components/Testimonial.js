"use client";
import React from "react";
import testimonialStyle from "@/styles/testimonial.module.css";
import Image from "next/image";
import { testimonial } from "@/assets";

const Testimonial = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 700;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 700;
  };
  return (
    <section className={testimonialStyle.main} id='reviews'>
      <div className={testimonialStyle.container}>
        <h4>How does it work?</h4>
        <p>
          Professionals in staffing shared stories of how Resume Craft
          transformed their workflow,
          <br /> making what seemed impossible—possible.
        </p>
        <div className={testimonialStyle.mainSilder}>
          <div className={testimonialStyle.leftSilderArrow} onClick={slideLeft}>
            <Image
              src={"/Images/leftarrow.png"}
              alt='leftarrow'
              width={14}
              height={25}
            />
          </div>
          <div className={testimonialStyle.newSilder} id='slider'>
            {testimonial.map((item, index) => {
              return (
                <div className={testimonialStyle.card} key={index}>
                  <div className={testimonialStyle.cardContainer}>
                    <Image src={item.picture} alt='' width={240} height={240} />
                    <div className={testimonialStyle.cardDetails}>
                      <div className={testimonialStyle.star}>
                        <Image
                          src={"/Images/star1.png"}
                          alt=''
                          width={16}
                          height={16}
                        />
                        <Image
                          src={"/Images/star1.png"}
                          alt=''
                          width={16}
                          height={16}
                        />
                        <Image
                          src={"/Images/star1.png"}
                          alt=''
                          width={16}
                          height={16}
                        />
                        <Image
                          src={"/Images/star1.png"}
                          alt=''
                          width={16}
                          height={16}
                        />
                        <Image
                          src={"/Images/star1.png"}
                          alt=''
                          width={16}
                          height={16}
                        />
                      </div>
                      <p>"{item.description}"</p>
                      <p style={{ fontWeight: "600" }}>
                        {item.name}
                        <span> {item.compnay}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={testimonialStyle.rightSilderArrow}
            onClick={slideRight}
          >
            <Image
              src={"/Images/rightarrow.png"}
              alt='leftarrow'
              width={14}
              height={25}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
