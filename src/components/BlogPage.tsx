import React from "react";
import { blogs } from "@/constants/share";
import BlogPageCard from "./BlogPageCard";
import Link from "next/link";
import pagination from "@/../public/pagination.png";
import Image from "next/image";
import BlogNews from "./BlogNews";
const BlogPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-10">
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <div className="w-full sm:w-2/3 flex flex-col gap-3">
          {blogs.map((blog, key) => (
            <Link key={key} href={`/blog/${blog.slug}`}>
              <BlogPageCard
                img={blog.img}
                date={blog.date}
                comments={blog.comment}
                title={blog.title}
                desc={blog.desc}
              />
            </Link>
          ))}
          <Image
            src={pagination}
            alt=""
            width={200}
            height={100}
            className="content-center m-auto"
          />
        </div>
        <div className="w-full sm:w-1/3">
          <BlogNews />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
