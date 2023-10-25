import React, { useState } from "react";
import { BsFillPlusCircleFill} from "react-icons/bs";
import {MdCancel} from "react-icons/md"
import Footer from "./components/Footer";
import Navbar from "./components/navbar";


      
const Faq = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  // const [faq6, setFaq6] = useState(false);
  // const [faq7, setFaq7] = useState(false);
  // const [faq8, setFaq8] = useState(false);

  const handleFaq1 = () => {
    setFaq1(!faq1);
  };
  const handleFaq2 = () => {
    setFaq2(!faq2);
  };
  const handleFaq3 = () => {
    setFaq3(!faq3);
  };
  const handleFaq4 = () => {
    setFaq4(!faq4);
  };
  const handleFaq5 = () => {
    setFaq5(!faq5);
  };
  // const handleFaq6 = () => {
  //   setFaq6(!faq6);
  // };
  // const handleFaq7 = () => {
  //   setFaq7(!faq7);
  // };
  // const handleFaq8 = () => {
  //   setFaq8(!faq8);
  // };

  return (
    <div>
      <Navbar />
      <section className=" px-[16px] md:px-[90px] md:gap-4 lg:px-[200px] mt-[80px] relative mb-[60px] md:mb-[100px] lg:mb-[120px] ">
        <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-[#000] tracking-wide mb-3">
        Frequently asked questions (FAQs)        </h2>
        <div className="py-7 border-t border-b ">
          <div onClick={handleFaq1} className="cursor-pointer flex justify-between items-center mb-2">
            <p className="text-grey-600 font-bold text-lg">
            What is Vant?
            </p>{" "}
            {faq1 ? (
              <button onClick={handleFaq1}>
                <MdCancel />{" "}
              </button>
            ) : (
              <button onClick={handleFaq1}>
                <BsFillPlusCircleFill />
              </button>
            )}
          </div>
          {faq1 ? (
            <p className="py-4 px-5 bg-slate-100">
        Vant is a savings and financial management app for individual and small businesses.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div onClick={handleFaq2} className="cursor-pointer flex justify-between items-center mb-2">
            <p className="text-grey-600 font-bold text-lg">
            How does Vant work?
            </p>{" "}
            {faq2 ? (
              <button onClick={handleFaq2}>
                <MdCancel />{" "}
              </button>
            ) : (
              <button onClick={handleFaq2}>
                <BsFillPlusCircleFill />
              </button>
            )}
          </div>
          {faq2 ? (
            <p className="py-4 px-5 bg-slate-100">
            Vant allows you to save individually or in groups into different savings pocket. With Vant you will get to also enjoy different financial management value added services.

            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div onClick={handleFaq3} className="cursor-pointer flex justify-between items-center mb-2">
            <p className="text-grey-600 font-bold text-lg">
            Is my personal and financial information safe with Vant?            </p>{" "}
            {faq3 ? (
              <button onClick={handleFaq3}>
                <MdCancel />{" "}
              </button>
            ) : (
              <button onClick={handleFaq3}>
                <BsFillPlusCircleFill />
              </button>
            )}
          </div>
          {faq3 ? (
            <p className="py-4 px-5 bg-slate-100">
              At Vant your data privacy 🔏 is important to us. We protect your data bank-level encryption. Your is not shared with 3rd party service providers your permission.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div onClick={handleFaq4} className="cursor-pointer flex justify-between items-center mb-2">
            <p  className="text-grey-600 font-bold text-lg">
              How can I contact support for other questions?
            </p>{" "}
            {faq4 ? (
              <button onClick={handleFaq4}>
                <MdCancel />{" "}
              </button>
            ) : (
              <button onClick={handleFaq4}>
                <BsFillPlusCircleFill />
              </button>
            )}
          </div>
          {faq4 ? (
            <p className="py-4 px-5 bg-slate-100">
With Vant you get you save into your savings pocket through card or bank transfer. You are in control, you can save in fixed deposits and initiate automatic funding of your savings pockets.              </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div onClick={handleFaq5} className="cursor-pointer flex justify-between items-center mb-2">
            <p className="text-grey-600 font-bold text-lg">
            Can I set specific savings goals with Vant?
            </p>{" "}
            {faq5 ? (
              <button onClick={handleFaq5}>
                <MdCancel />{" "}
              </button>
            ) : (
              <button onClick={handleFaq5}>
                <BsFillPlusCircleFill />
              </button>
            )}
          </div>
          {faq5 ? (
            <p className="py-4 px-5 bg-slate-100 text-justify">
            Yes, you can setup various saving goals with Vant when setting up your savings pocket. You even get to see your progress and see if you are meeting with your timeline...

            </p>
          ) : (
            ""
          )}
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

export default Faq;
