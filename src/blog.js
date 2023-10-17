import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <section className=" px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] mt-[80px] relative">
        <img src="./image/lightup.png" alt="light up" className="mx-auto " />
      </section>
      <section className=" px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] mt-[80px] relative mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <h2 className="w-full md:w-[65%] text-[20px] md:text-[28px] lg:text-[40px] lg:mb-[120px] md:mb-[80px] mb-[40px] font-medium">
          Unlocking the Power of Knowledge:
          <br /> Insights and blog to inform and inspire
        </h2>
        <div className="flex md:flex-row flex-col gap-[20px]">
          <div className="w-full md:w-[50%] ">
            <img src="./image/charlie.png" alt="charlie" className="mx-auto" />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="flex items-center text-[14px] gap-[24px] mb-[20px] md:mb-[28px] lg:mb-[32px]">
              <p>September 26, 2023</p>
              <p>By admin</p>
              <p>Money Tips</p>
            </div>

            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-[16px]">
              Charlie Munger: What you did not know about Warren Buffett's
              Right-Hand Man
            </h3>
            <p className="text-[#5F5F60] ">
              Charlie Munger, often referred to as Warren Buffet’s right-hand
              man is an American businessman, investor, and philanthropist. He
              is the vice president of Berkshire Hathaway and is worth $2.7B.
              <br />
              <br />
              His name might not seem as popular as Warren’s but here are 5
              things to learn about the personality of the billionaire.
            </p>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <div className="flex py-[40px] md:py-[78px] bg-[#f9f9f9] px-[30px] md:px-[50px] lg:px-[80px] gap-[60px] flex-row items-center rounded-[16px]">
          <div className="hidden md:flex w-[40%]">
            <img src="./image/appwallet.png" alt="" className="mx-auto" />
          </div>
          <div className="w-full md:w-[60%]">
            <h3 className="  text-[24px] md:text-[28px] lg:text-[40px] mb-[16px] md:mb-[36px] lg:mb-[56px] font-medium">
              Download Vant app today and start your journey towards financial
              freedom.
            </h3>
            <div className="flex justify-center items-center gap-6 mt-[40px]">
              <img
                src="./image/googleplay.png"
                alt="google play logo"
                className="w-[135px]
            h-[40px] lg:w-[189px]
            lg:h-[56px]"
              />
              <img
                src="./image/appstore.png"
                alt="app store logo"
                className="w-[120px]
            h-[40px] lg:w-[168px]
            lg:h-[56px]"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
