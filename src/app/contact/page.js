import React from "react";
import contactStyle from "@/styles/contact.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <section className={contactStyle.main}>
      <Navbar />
      <div className={contactStyle.container}>
        <div className={contactStyle.contactWrapperleft}>
          <h5>HOW YOU CAN CONTACT US?</h5>
          <p>
            You can register your query here, Please send your question to us.
          </p>
          <div className={contactStyle.contactTypeItems}>
            <div className={contactStyle.contactTypeItem}>
              <div className={contactStyle.cotactImage}>
                <Image
                  src={"/images/phoneIcon.png"}
                  alt='phone'
                  width={30}
                  height={30}
                />
              </div>
              <div className={contactStyle.contactTypeItemsinfo}>
                <h5>Phone</h5>
                <p>+91 99110 85997</p>
              </div>
            </div>
            <div className={contactStyle.contactTypeItem}>
              <div className={contactStyle.cotactImage}>
                <Image
                  src={"/images/mailIcon.png"}
                  alt='phone'
                  width={30}
                  height={30}
                />
              </div>
              <div className={contactStyle.contactTypeItemsinfo}>
                <h5>Email</h5>
                <p>contact@resumecraft.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={contactStyle.contactWrapperRight}>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
