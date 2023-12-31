import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
// import ScrollAnimation from "react-animate-on-scroll";
import "./animate.css";

const Personal = () => {
  const [category, setCategory] = useState("category1");

  return (
    <div>
      <Navbar />
      <section className="px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] mt-[80px] relative mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <h2 className=" animate__slow animate__animated text-[37px] md:text-[56px] lg:text-[80px] text-black text-center font-bold max-w-[996px] mx-auto">
          <span className="text-[#3B6896]">Seamless</span> Savings, anytime,
          Anywhere!
        </h2>
        <p className="mt-[24px] text-[#878787] max-w-[996px] mx-auto text-center mb-[40px]">
          Get Vant app now. Join the thousands who have already discovered the
          power of effortless savings with Vant. Your future self will thank
          you!
        </p>
        <div className="w-full ">
          <img
            src="./image/personalcartoon1.png"
            alt="piggying"
            className="mt-[40px] md:mt-[50px]  lg:mt-[80px] mx-auto"
          />
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="w-full md:w-[50%] mb-[28px] md:mb-[36px] lg:mb-[56px]">
          {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
            <h3 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[28px] mb-[16px] font-medium">
              All-in-one Investment solutions
            </h3>{" "}
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
            <p className="text-[16px] md:text-[18px]  md:mb-[28px] mb-[16px]">
              Our app is designed to fit your life, offering you the convenience
              of saving seamlessly, wherever and whenever suits you best.
              Whether it’s a quick deposit during your lunch break or setting up
              a fixed savings.
            </p>
          {/* </ScrollAnimation> */}
        </div>

        <div className="flex items-center flex-col md:flex-row gap-[50px] ">
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[20px] md:pt-[30px] lg:pt-[40px] px-[20px] md:px-[30px] lg:px-[40px] md: rounded-tl-[16px] rounded-tr-[16px]">
              {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
                <h3 className="text-[18px] md:text-[24px] lg:text-[32px] mb-[20px] ">
                  Quick Savings{" "}
                </h3>
              {/* </ScrollAnimation> */}
              {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
                <p className="text-[#5F5F60] mb-[20px] md:mb-[40px]">
                  Save random amounts and top-up us at when convenient. Save
                  towards your Personal Goals
                  <br />
                  <br />
                  Keep money aside by setting specific goals over a period of
                  time with a set deposit interval with vant.
                </p>
              {/* </ScrollAnimation> */}
              <img src="/image/quicksaving.png" alt="" className="mx-auto" />
            </div>
          </div>
          <div className="w-full md:w-[50%] px-6 md:px-9">
            <h2 className="text-[18px] md:text-[24px] lg:text-[32px] mb-[20px] ">
              Join <span className="text-[#3B6896]">Vant </span> today, pick a
              goal and crush it
            </h2>
            <p className="text-[#5F5F60] mb-[20px] md:mb-[40px]">
              We’re rooting for you. Setting and achieving these goals with
              disciplined saving and wise financial management can make your
              year-end celebrations even sweeter!
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-[50px] mt-[20px]">
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[20px] md:pt-[30px] lg:pt-[40px] px-[20px] md:px-[30px] lg:px-[40px] md: rounded-tl-[16px] rounded-tr-[16px]">
              {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
                <h3 className="text-[18px] md:text-[24px] lg:text-[32px] mb-[20px] ">
                  Target Savings{" "}
                </h3>
              {/* </ScrollAnimation> */}
              {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
                <p className="text-[#5F5F60] mb-[20px] md:mb-[40px]">
                  Lock money away for a fixed duration without having access to
                  it until maturity. It's like having a custom fixed deposit.
                  <br />
                  <br />
                  Keep money aside by setting specific goals over a period of
                  time with a set deposit interval with vant.
                </p>
              {/* </ScrollAnimation> */}

              <img src="/image/targetsaving.png" alt="" className="mx-auto" />
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[20px] md:pt-[30px] lg:pt-[40px] px-[20px] md:px-[30px] lg:px-[40px] md: rounded-tl-[16px] rounded-tr-[16px]">
              {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
                <h3 className="text-[18px] md:text-[24px] lg:text-[32px] mb-[20px] ">
                  Group Savings{" "}
                </h3>
              {/* </ScrollAnimation> */}
              {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
                <p className="text-[#5F5F60] mb-[20px] md:mb-[40px]">
                  Save as a group in a transparent, easy to track common space.{" "}
                  <br />
                  <br />
                  Keep money aside by setting specific goals over a period of
                  time with a set deposit interval with vant.{" "}
                </p>
              {/* </ScrollAnimation> */}
              <img src="/image/bluredimage.png" alt="" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[100px] lg:mb-[120px] lg:hidden">
        <h3 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[28px] mb-[16px] font-medium">
          Here’s a plan to save better{" "}
        </h3>
        <div className="mb-[24px]">
        <div className="flex justify-center bg-[#f9f9f9] mb-[20px]">
            <img src="./image/category1.png" alt=""  className="h-[294px] w-[258px] object-contain"/>
          </div>
          <div>
            {" "}
            <h3 className="text-[24px] font-medium text-[#0F0F10] mb-[16px]">Set clear goals</h3>
            <p className="text-[12px] text-[#5F5F60] ">Define your December spending targets.</p>
          </div>
        </div>
        <div className="mb-[24px]">
        <div className="flex justify-center bg-[#f9f9f9] mb-[20px]">
            <img src="./image/category.png" alt="" className="h-[294px] w-[258px] object-contain"/>
          </div>
          <div>
            {" "}
            <h3 className="text-[24px] font-medium text-[#0F0F10] mb-[16px]">Set clear goals</h3>
            <p className="text-[12px] text-[#5F5F60] ">Define your December spending targets.</p>
          </div>
        </div>
        <div className="mb-[24px]">
        <div className="flex justify-center bg-[#f9f9f9] mb-[20px]">
            <img src="./image/kolo.png" alt="" className="h-[294px] w-[258px] object-contain"/>
          </div>
          <div>
            {" "}
            <h3 className="text-[24px] font-medium text-[#0F0F10] mb-[16px]">Set clear goals</h3>
            <p className="text-[12px] text-[#5F5F60] ">Define your December spending targets.</p>
          </div>
        </div>
        <div className="mb-[24px]">
          <div className="flex justify-center bg-[#f9f9f9] mb-[20px]">
            <img src="./image/category4.png" alt="" className="h-[294px] w-[258px] object-contain" />
          </div>
          <div>
            {" "}
            <h3 className="text-[24px] font-medium text-[#0F0F10] mb-[16px]">Set clear goals</h3>
            <p className="text-[12px] text-[#5F5F60] ">Define your December spending targets.</p>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[100px] lg:mb-[120px] hidden lg:block">
        <div className="w-full md:w-[50%] mb-[28px] md:mb-[36px] lg:mb-[56px]">
          <h3 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[28px] mb-[16px] font-medium">
            Here’s a plan to save better{" "}
          </h3>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-[50px] mt-[20px]">
          <div className="w-full md:w-[50%]">
            <ul className="">
              <li
                onClick={() => setCategory("category1")}
                className={` ${
                  category === "category1" ? "border-l-[#7C9AB9] " : ""
                } border-l-[3px] cursor-pointer pl-[32px] py-[35px]`}
              >
                <h3>Set clear goals</h3>
                <p>Define your December spending targets.</p>
              </li>
              <li
                onClick={() => setCategory("category2")}
                className={` ${
                  category === "category2" ? "border-l-[#7C9AB9] " : ""
                } border-l-[3px] cursor-pointer   pl-[32px] py-[35px]`}
              >
                <h3>Budget smart</h3>
                <p>Allocate funds for gifts, festivities, and treats.</p>
              </li>
              <li
                onClick={() => setCategory("category3")}
                className={` ${
                  category === "category3" ? "border-l-[#7C9AB9] " : ""
                } border-l-[3px] cursor-pointer  pl-[32px] py-[35px]`}
              >
                <h3>Track expenses</h3>
                <p>Monitor your spending to stay on course.</p>
              </li>
              <li
                onClick={() => setCategory("category4")}
                className={` ${
                  category === "category4" ? "border-l-[#7C9AB9] " : ""
                } border-l-[3px] cursor-pointer  pl-[32px] py-[35px]`}
              >
                <h3>Explore Vant features</h3>
                <p>Utilize dollar savings and insights.</p>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] bg-[#f9f9f9] flex justify-center rounded-[16px]">
            {" "}
            <img
              src={
                category === "category1"
                  ? "./image/category1.png"
                  : category === "category2"
                  ? "./image/category.png"
                  : category === "category3"
                  ? "./image/kolo.png"
                  : category === "category4"
                  ? "./image/category4.png"
                  : ""
              }
              alt=""
              className="h-[361px] w-[428px] object-contain"
            />
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
              <a
                href="https://www.google.com/url?q=https://play.google.com/store/apps/details%3Fid%3Dcom.vant.app%26hl%3Den_US%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Dvant%2Bapp&sa=U&ved=2ahUKEwixkrSIwpqBAxVgU0EAHVPRDAMQFnoECAUQAg&usg=AOvVaw3iL8zaaBsLYYudFsvEMTLY "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./image/googleplay.png"
                  alt="google play logo"
                  className="w-[135px] h-[40px] lg:w-[189px] lg:h-[56px]"
                />
              </a>
              <a
                href="https://apps.apple.com/ng/app/vant-app/id6464392721"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./image/appstore.png"
                  alt="app store logo"
                  className="w-[120px] h-[40px] lg:w-[168px] lg:h-[56px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Personal;
