import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[16px] md:px-[60px]  lg:px-[120px] ">
      <div className="pb-[40px] mb-[40px] md:pb-[56px] md:mb-[40px] border-b">
        <img
          src="./image/logo.png"
          alt=""
          className="mb-[40px] md-[60px] lg-[80px] w-[107px] lg:w-[147px] object-contain"
        />
        <div className="flex justify-between">
          <div className="flex flex-wrap gap-[50px] justify-between w-[80%] md:w-full">
            <div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-[30px] md-[40px]">
                Company
              </h3>{" "}
              <ul className="flex flex-col gap-[16px] md:gap-[24px] text-[14px] md:text-[16px]">
                <Link className="cursor-pointer" to="/company">
                  <li className=" text-[#373738]">About us</li>
                </Link>
                <a href="mailto: support@vantapp.com">
                  <li className=" text-[#373738]">Contact us</li>
                </a>
                <Link className="cursor-pointer" to="/blog">
                  <li className=" text-[#373738]">Blog</li>
                </Link>
                <Link to="/faq">
                  <li className=" text-[#373738]">FAQs</li>
                </Link>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-[30px] md-[40px]">
                Business
              </h3>{" "}
              <ul className="flex flex-col gap-[16px] md:gap-[24px]">
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Biz Accounts{" "}
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  CAC Reg{" "}
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Mgt Tools{" "}
                </li>
              </ul>
            </div> */}
            <div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-[30px] md-[40px]">
                Developers{" "}
              </h3>{" "}
              <ul className="flex flex-col gap-[16px] md:gap-[24px] text-[14px] md:text-[16px] ">
                <li className=" text-[#373738]">API Doc </li>
                <li className=" text-[#373738]">Integrations </li>
                <li className=" text-[#373738]">Status</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-[30px] md-[40px]">
                Legal
              </h3>{" "}
              <ul className="flex flex-col gap-[16px] md:gap-[24px]">
                <Link className="cursor-pointer" to="/terms">
                  <li className=" text-[#373738]">Terms of Service </li>
                </Link>
                <Link className="cursor-pointer" to="privacy">
                  <li className=" text-[#373738]">Privacy Policy </li>
                </Link>
                <li className=" text-[#373738]">Security</li>
              </ul>
            </div>
          </div>
          <div className="gap-4 items-center md:hidden flex flex-col">
            <Link
              to="https://www.linkedin.com/company/vantafrica"               target="_blank"

              rel="noreferrer"
            >
              <img src="/image/linkedin.png" alt="" className="h-[24px]" />
            </Link>
            <Link to="https://x.com/vantappafrica?s=21" rel="noreferrer"               target="_blank"
>
              <img src="/image/x.png" alt="" className="h-[24px]" />
            </Link>
            <Link
              to="https://instagram.com/vantappafrica?igshid=MzRIODBiNWFIZA=="
              rel="noreferrer"
              target="_blank"

            >
              <img src="/image/insta.png" alt="" className="h-[24px]" />
            </Link>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="mt-[40px] text-[12px] ">
            ©2023. Advant Capitol. All rights reserved
          </p>
          <div className="gap-4 items-center hidden md:flex">
            <Link
              to="https://www.linkedin.com/company/vantafrica"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/image/linkedin.png" alt="" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/vantafrica"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/image/x.png" alt="" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/vantafrica"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/image/insta.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <p className="pb-[40px] text-[12px]">
        Advant Capitol is a financial technology company that is duly registered
        with the Corporate Affairs Commission of Nigeria (RC: 1750394). Our
        office is located at 39 Govt Building, Isale Igbehin, Abeokuta, Ogun.
        Our savings scheme is also duly registered under the Co-operative
        Societies Laws of Ogun State with registration number OGSCS 12701 as
        Advant Capitol Progressive Staff (Isale Igbehin) Multipurpose
        Cooperative Society Limited. Funds are held in trust by a registered
        trustee, a company that is registered and regulated by the Security and
        Exchange Commission (SEC). Our activities and partnerships are in line
        with the best ethical practices and the laws of the Federal Republic of
        Nigeria. Please note that any unauthorized redistribution or
        reproduction of any copyrighted materials on this website is strictly
        prohibited. Other product and company names are trademarks of their
        respective owners.
      </p>
    </div>
  );
};

export default Footer;
