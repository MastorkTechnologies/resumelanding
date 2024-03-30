"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/lib/firebase";
import blogStyle from "@/styles/blog.module.css";
import JoinAi from "@/components/JoinAi";
import BlogCard from "@/components/BlogCard";

const page = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "Blogs"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogData(data);
      }
    );
    return () => unsubscribe();
  }, []);
  const memoizedBlogData = useMemo(() => blogData, [blogData.length]);
  return (
    <main className={blogStyle.main}>
      <Navbar />
      <div className={blogStyle.blogcontainer}>
        <div className={blogStyle.bloglist}>
          {memoizedBlogData &&
            memoizedBlogData.length > 0 &&
            memoizedBlogData.map((item) => {
              return <BlogCard item={item} key={item.id} />;
            })}
        </div>
      </div>
      <JoinAi />
      <Footer />
    </main>
  );
};

export default page;
