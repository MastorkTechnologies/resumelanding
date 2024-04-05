import Footer from "@/components/Footer";
import JoinAi from "@/components/JoinAi";
import Navbar from "@/components/Navbar";
import React from "react";
import style from "@/styles/other.module.css";

const page = () => {
  return (
    <section className={style.main}>
      <Navbar />
      <div className={style.container}>
        <h5>Cancellation & Refund Policy</h5>
        <h2>
          At Resume Craft, we strive to provide our customers with exceptional
          service and support. We understand that circumstances may arise where
          you need to cancel your subscription or request a refund. Please
          review the following policy regarding cancellations and refunds:
        </h2>
        <div className={style.contentArea}>
          <div className={style.contentAreafield}>
            <h5>1. Subscription Cancellation:</h5>
            <ul itemType='disc'>
              <li>
                Customers can cancel their subscription at any time by accessing
                their account settings within the Resume Craft platform or by
                contacting our customer support team.
              </li>
              <li>
                Customers can cancel their subscription at any time by accessing
                their account settings within the Resume Craft platform or by
                contacting our customer support team.
              </li>
              <li>
                We do not impose any cancellation fees or penalties for
                terminating your subscription.
              </li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>2. Refund Policy:</h5>
            <ul itemType='disc'>
              <li>
                We offer a 30-day money-back guarantee for new customers who are
                dissatisfied with our service. This guarantee applies to the
                initial purchase of a subscription plan.
              </li>
              <li>
                To request a refund within the specified guarantee period,
                customers must contact our customer support team and provide a
                reason for their dissatisfaction.
              </li>
              <li>
                Refunds will be processed using the original method of payment
                and may take up to 7-8 business days to reflect in the
                customer's account.
              </li>
              <li>
                Refunds will be processed using the original method of payment
                and may take up to 7-8 business days to reflect in the
                customer's account.
              </li>
              <li>
                After the expiration of the refund period, all payments made to
                Resume Craft are considered non-refundable, including
                subscription renewals and additional purchases.
              </li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>3. Exceptional Circumstances:</h5>
            <ul itemType='disc'>
              <li>
                We understand that there may be exceptional circumstances beyond
                the customer's control that warrant consideration for a refund
                outside of the standard refund policy.
              </li>
              <li>
                Requests for refunds due to exceptional circumstances will be
                reviewed on a case-by-case basis by our customer support team.
              </li>
              <li>
                Examples of exceptional circumstances may include service
                outages, technical issues, or extenuating personal
                circumstances.
              </li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>4. Changes to Subscription Plans:</h5>
            <ul itemType='disc'>
              <li>
                Customers have the flexibility to upgrade or downgrade their
                subscription plan at any time through their account settings.
              </li>
              <li>
                Any changes to subscription plans will be reflected in the next
                billing cycle and may result in adjustments to the subscription
                fee.
              </li>
            </ul>
          </div>
          <div className={style.contentAreafield}>
            <h5>5. Contact Us:</h5>
            <ul itemType='disc'>
              <li>
                If you have any questions or concerns regarding our cancellation
                and refund policy, please don't hesitate to contact our customer
                support team at{" "}
                <a href='mailto:contact@resumecraft.com'>
                  contact@resumecraft.com
                </a>
              </li>
              <li>
                Note: This cancellation and refund policy is subject to change
                at the discretion of Resume Craft. Any updates or revisions to
                the policy will be communicated to customers via email or
                through our website.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <JoinAi />
      <Footer />
    </section>
  );
};

export default page;
