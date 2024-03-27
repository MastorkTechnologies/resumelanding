import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { database } from "@/lib/firebase";
import blogStyle from "@/styles/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import JoinAi from "@/components/JoinAi";

const page = async () => {
  const BlogCollectionRef = collection(database, "Blogs");
  const data = await getDocs(query(BlogCollectionRef));
  const blogdata = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return (
    <main className={blogStyle.main}>
      <Navbar />
      <div className={blogStyle.blogcontainer}>
        <div className={blogStyle.bloglist}>
          {blogdata &&
            blogdata.length > 0 &&
            blogdata.map((item) => {
              return (
                <div className={blogStyle.card} key={item.id}>
                  <div className={blogStyle.cardContainer}>
                    <Image
                      src={item.picture}
                      alt={item.title}
                      width={300}
                      height={300}
                      className={blogStyle.cardImg}
                    />
                    <h4>{item.title}</h4>
                    <p>{item.description[0].substring(0, 100)}..</p>
                    <button>
                      <Link
                        href={`/blog/${item.id}}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Read More{" "}
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 13 14'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.3999 2L12.9999 7.2L7.3999 12.4'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='square'
                            strokeLinejoin='bevel'
                          />
                          <path
                            d='M1 6.98571H12.2'
                            stroke='black'
                            strokeWidth='2.5'
                            strokeLinecap='square'
                            strokeLinejoin='bevel'
                          />
                        </svg>
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <JoinAi />
      <Footer />
    </main>
  );
};

export default page;
