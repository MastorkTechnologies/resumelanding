import React from "react";
import aboutStyle from "@/styles/about.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinAi from "@/components/JoinAi";
const page = () => {
  return (
    <main className={aboutStyle.main}>
      <Navbar />
      <div className={aboutStyle.container}>
        <p className={aboutStyle.aboutUsContent}>
        Welcome to Resume Craft, where we are dedicated to crafting innovative solutions that simplify lives through technology. Our team has invested significant effort in creating a platform that can revolutionise your job application experience. Introducing our flagship product, the Resume Craft.
        </p>
        <p className={aboutStyle.aboutUsContent}>
        At Resume Craft, we understand the challenges of navigating the ever-evolving job market. That's why we've developed a cutting-edge Resume Craft, designed to empower you in shaping resumes effortlessly on the go. Leveraging the capabilities of GPT tools, our platform ensures that your resumes stand out and make a lasting impression on potential employers.

        </p>
        <p className={aboutStyle.aboutUsContent}>
        Whether you're a seasoned professional or just starting your career journey, our Resume Craft is tailored to meet your needs. It provides a seamless and user-friendly experience, allowing you to create personalized resumes for any job application with ease. Our commitment is to provide you with the tools you need to present your skills and experiences in the best possible light.

        </p>
        <p className={aboutStyle.aboutUsContent}>
        Explore Resume Craft and experience the future of resume crafting. Elevate your job application game with our innovative platform and let your achievements shine. We believe in making technology work for you, and our Resume Craft is a testament to that commitment. Join us on this journey of empowerment and efficiency. Shape your future with Resume Craft.

        </p>
      </div>
      <JoinAi />
      <Footer />
    </main>
  );
};

export default page;
