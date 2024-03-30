import React from "react";
import blogStyle from "@/styles/blog.module.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { database } from "@/lib/firebase";
import Image from "next/image";

const page = async ({ params }) => {
  const blogref = doc(database, "Blogs", params.id.replace(/%7D/g, ""));
  const blog = (await getDoc(blogref)).data();
  return (
    <main className={blogStyle.main}>
      <Navbar />
      <div className={blogStyle.singleblogcontainer}>
        <div className={blogStyle.singleblogiage}>
          <Image
            src={blog && blog.picture ? blog.picture : ""}
            alt=''
            width={600}
            height={600}
            className={blogStyle.singleblogImage}
          />
        </div>
        <div className={blogStyle.singledetails}>
          <h4>{blog.title}</h4>
          {blog.description &&
            blog.description.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
