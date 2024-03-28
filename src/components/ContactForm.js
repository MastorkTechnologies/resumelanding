"use client";
import React, { useState } from "react";
import contactStyle from "@/styles/contact.module.css";
import { doc, setDoc } from "firebase/firestore";
import { database } from "@/lib/firebase";
import toast, { Toaster } from "react-hot-toast";
// import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      form_name: formData.name,
      to_name: "Resume Carft",
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      // await emailjs.send(
      //   "service_9q5fuh2",
      //   "template_607ne0f",
      //   templateParams,
      //   "wdtI23ErZXMrLHXfs"
      // );
      const timeId = new Date().getTime().toString();
      await setDoc(doc(database, "Form", timeId), formData);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Message failed to be sent");
      throw new Error(error.message);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className={contactStyle.conatctForm}>
      <form className={contactStyle.formarea} onSubmit={handleSubmit}>
        <div className={contactStyle.upperfield}>
          <div className={contactStyle.inputfieldarea}>
            <label>Name</label>
            <input
              type='text'
              placeholder=''
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={contactStyle.inputfieldarea}>
            <label>Email</label>
            <input
              type='text'
              placeholder=''
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={contactStyle.inputfieldarea}>
          <label>Subject</label>
          <input
            type='text'
            placeholder=''
            name='subject'
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className={contactStyle.inputfieldarea}>
          <label>Message</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button disabled={loading}>Send Message</button>
      </form>
      <Toaster />
    </div>
  );
};

export default ContactForm;
