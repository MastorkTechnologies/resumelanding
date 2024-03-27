import React from "react";
import style from "@/styles/other.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinAi from "@/components/JoinAi";

const page = () => {
  return (
    <section className={style.main}>
      <Navbar />
      <div className={style.container}>
        <h5>Privacy Policy</h5>
        <h2>
          SaaSmartSolutions ("we," "our," or "us") is dedicated to safeguarding
          your privacy and ensuring the security of your personal information.
          This Privacy Policy outlines our practices regarding the collection,
          use, disclosure, and protection of your data when you engage with our
          website, products, or services.
        </h2>
        <h6>Last updated date: [11th Nov,2023]</h6>
        <div className={style.contentArea}>
          <div className={style.contentAreafield}>
            <h5>Information We Collect</h5>
            <p>
              Personal Information : We may collect personal information,
              including but not limited to:
            </p>
            <ul itemType='disc'>
              <li>Name</li>
              <li>Contact information (email address, phone number)</li>
              <li>Billing and payment details</li>
              <li>Account credentials</li>
              <li>User preferences</li>
              <li>Usage data</li>
            </ul>
            <p>
              Non-Personal Information : We may also collect non-personal
              information, such as:
            </p>
            <ul itemType='disc'>
              <li>
                Device information (browser type, IP address, operating system)
              </li>
              <li>Usage data (pages visited, time spent on the site)</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>How We Collect Information</h5>
            <p>We collect information through various channels, including:</p>
            <ul itemType='disc'>
              <li>
                Directly from you when you create an account, make a purchase,
                or interact with our services.
              </li>
              <li>
                Automatically through cookies and similar technologies as you
                navigate our website.
              </li>
              <li>
                From third-party sources for authentication and fraud prevention
                purposes.
              </li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>Use of Information</h5>
            <p>We use your information for the following purposes:</p>
            <ul itemType='disc'>
              <li>
                To provide, enhance, and personalize our products and services.
              </li>
              <li>To process transactions and deliver requested services.</li>
              <li>
                To communicate with you, respond to inquiries, and provide
                updates.
              </li>
              <li>
                For marketing and promotional purposes, with your consent.
              </li>
              <li>To improve our website and user experience.</li>
              <li>To prevent fraud and ensure the security of our systems.</li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>Sharing of Information</h5>
            <p>We may share your information with:</p>
            <ul itemType='disc'>
              <li>
                Service providers and partners involved in delivering our
                products and services.
              </li>
              <li>
                Law enforcement or regulatory authorities when required by law.
              </li>
              <li>
                In the context of a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>Your Choices</h5>
            <p>You have the right to:</p>
            <ul itemType='disc'>
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Adjust cookie settings through your browser.</li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>Security</h5>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the internet
              or electronic storage is entirely secure.
            </p>
          </div>
          <div className={style.contentAreafield}>
            <h5>Children's Privacy</h5>
            <p>
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children.
            </p>
            <h5>Contact Us</h5>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at [privacy@saasmartsolutions.com].
            </p>
          </div>
        </div>
      </div>
      <JoinAi />
      <Footer />
    </section>
  );
};

export default page;
