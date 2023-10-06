import React from "react";

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
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-[30px] md-[40px]">
                Company
              </h3>{" "}
              <ul className="flex flex-col gap-[16px] md:gap-[24px]">
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  About us
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Contact us
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Blog
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  FAQs
                </li>
              </ul>
            </div>
            <div>
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
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-[30px] md-[40px]">
                Developers{" "}
              </h3>{" "}
              <ul className="flex flex-col gap-[16px] md:gap-[24px]">
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  API Doc{" "}
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Integrations{" "}
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Status
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-[30px] md-[40px]">
                Legal
              </h3>{" "}
              <ul className="flex flex-col gap-[16px] md:gap-[24px]">
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Terms of Service{" "}
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Privacy Policy{" "}
                </li>
                <li className="text-[18px] md:text-[20px] lg:text-[24px] text-[#373738]">
                  Security
                </li>
              </ul>
            </div>
          </div>
          <div className="gap-4 items-center md:hidden flex flex-col">
            <img src="/image/linkedin.png" alt="" />
            <img src="/image/x.png" alt="" />
            <img src="/image/insta.png" alt="" />
          </div>
        </div>

        <div className="flex justify-between">
          <p className="mt-[40px]">
            ©2023. Advant Capitol. All rights reserved
          </p>
          <div className="gap-4 items-center hidden md:flex">
            <img src="/image/linkedin.png" alt="" />
            <img src="/image/x.png" alt="" />
            <img src="/image/insta.png" alt="" />
          </div>
        </div>
      </div>
      <p className="pb-[40px]">
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
