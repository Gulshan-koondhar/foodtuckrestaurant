import React from "react";
import BlogNews from "./BlogNews";
import Image from "next/image";
import blogImg from "@/../public/unsplash_MqT0asuoIcU.png";
import {
  Calendar1,
  CircleUserRound,
  Facebook,
  Instagram,
  MessageSquare,
  Twitter,
  Youtube,
} from "lucide-react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import quotes from "@/../public/Quotes (1).png";
import img from "@/../public/unsplash_rAyCBQTH7ws.png";
import { comments } from "@/constants/share";
import Comments from "./Comments";

const BlogDetailPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-10">
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <div className="w-full sm:w-2/3 flex flex-col gap-3">
          <div>
            <Image
              src={blogImg}
              alt=""
              width={800}
              height={100}
              className="w-[300px] h-[300px] sm:w-[800px] sm:h-[500px]"
            />
          </div>
          <div
            className={`flex items-center gap-2 ${inter.className} text-[16px] font-normal text-[#4f4f4f]`}
          >
            <Calendar1 className="text-[#FF9F0D]" /> Feb 14, 2022 /{" "}
            <MessageSquare className="text-[#FF9F0D]" /> 3 /{" "}
            <CircleUserRound className="text-[#FF9F0D]" /> Admin
          </div>
          <div>
            <h1 className="font-helvetica font-bold text-2xl text-[#333333]">
              10 Reasons To Do A Digital Detox Challenge
            </h1>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-normal font-helvetica text-[#4f4f4f]">
              Netus pretium tellus nulla commodo massa adipiscing in elementum
              magna congue condimentum placerat habitasse potenti ac orci a
              quisque tristique elementum et viverra at condimentum scelerisque
              eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque
              aliquet tempus faucibus quam ac aliquet nibh a condimentum
              suspendisse hac integer leo erat aliquam ut himenaeos.
            </p>
            <p className="text-[16px] font-normal font-helvetica text-[#4f4f4f]">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
              varius per a augue magna hac. Nec hac et vestibulum duis a
              tincidunt per a aptent interdum purus feugiat a id aliquet erat
              himenaeos nunc torquent euismod adipiscing adipiscing dui gravida
              justo.
            </p>
          </div>
          <div className="bg-[#ff9f0d] py-3 px-4 flex gap-2">
            <Image
              src={quotes}
              alt=""
              width={100}
              height={100}
              className="w-10 h-10"
            />
            <p className="text-2xl font-bold font-helvetica text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.{" "}
            </p>
          </div>
          <div>
            <p className="text-[16px] font-normal font-helvetica text-[#4f4f4f]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className=" w-full sm:w-2/3">
              <p className="text-[16px] font-normal font-helvetica text-[#4f4f4f]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
              <p className="text-[16px] font-normal font-helvetica text-[#4f4f4f]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img}
                alt=""
                width={300}
                height={100}
                className="w-[600px] h-[300px]"
              />
            </div>
          </div>
          <div>
            <p className="text-[16px] font-normal font-helvetica text-[#4f4f4f]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
          <div>
            <p className="text-[16px] font-normal font-helvetica text-[#4f4f4f]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>
          <div className="border p-2 flex flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-[16px] font-bold font-helvetica text-[#333333]">
                Tags:
                <span className="text-[#828282] font-normal font-helvetica text-[16px]">
                  {" "}
                  Restaurant
                </span>
                ,{" "}
                <span className="text-[#828282] font-normal font-helvetica text-[16px]">
                  Dinner
                </span>
                ,{" "}
                <span className="text-[#828282] font-normal font-helvetica text-[16px]">
                  Pizza
                </span>
                ,{" "}
                <span className="text-[#828282] font-normal font-helvetica text-[16px]">
                  Yummy
                </span>
              </h1>
            </div>
            <div>
              <h1 className="text-[16px] font-bold font-helvetica text-[#333333] flex">
                Share:
                <span className="flex text-[#828282] font-normal font-helvetica gap-1">
                  <Facebook />
                  <Twitter />
                  <Instagram />
                  <Youtube />
                </span>
              </h1>
            </div>
          </div>
          <div className="py-3 ">
            <h1 className="font-helvetica font-bold text-[#333333] text-3xl mb-5">
              Comments - 03
            </h1>
            {comments.map((comment, i) => (
              <div className="" key={i}>
                {i === 1 ? (
                  <div className="ml-10 my-10">
                    <Comments img={comment.img} name={comment.name} />
                  </div>
                ) : (
                  <div>
                    <Comments img={comment.img} name={comment.name} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="my-8">
            <h1 className="font-helvetica font-bold text-2xl text-[#333333]">
              Post a Comment
            </h1>
            <hr className="my-2" />
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <input
                type="text"
                placeholder="Name*"
                className="col-span-1 border px-2"
              />
              <input
                type="text"
                placeholder="Email*"
                className="col-span-1 border px-2"
              />
              <textarea
                className="col-span-2 border px-2 h-28s"
                placeholder="Write a comment "
              ></textarea>
            </div>
            <div className="my-3">
              <button className="bg-[#ff9f0d] text-white px-12 py-4 font-normal font-helvetica text-[16px]">
                Post a Comment
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <BlogNews />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
