import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
// import ScrollAnimation from "react-animate-on-scroll";
import "./animate.css";

const Product = () => {
  return (
    <div>
      <Navbar />
      <section className="px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] mt-[80px] relative mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <h2 className=" animate__slow animate__animated text-[37px] md:text-[56px] lg:text-[80px] text-black text-center font-bold max-w-[996px] mx-auto">
          Unlock your Financial Potential with{" "}
          <span className="text-[#3B6896]">Vant</span>
        </h2>
        <p className="mt-[24px] text-[#878787] max-w-[996px] mx-auto text-center mb-[40px]">
          Explore the opportunities that await you and start your journey to
          financial freedom today.
        </p>
        <section className="mt-[84px] px-[30px] max-w-[996px] mx-auto mb-[60px] md:mb-[100px] lg:mb-[120px]">
          <p className="text-center text-[#878787] mb-[40px]">
            Some of Our Partners
          </p>

          <ul className="flex justify-between flex-wrap gap-4">
            <li>
              <img
                src="./image/aws.png"
                alt="aws logo"
                className="h-[20px] md:h-full"
              />
            </li>
            <li>
              <img
                src="./image/techimpact.png"
                alt="techimpact logo"
                className="h-[20px] md:h-full"
              />
            </li>
           
            <li>
              <img
                src="./image/vfd.png"
                alt="vdf logo"
                className="h-[20px] md:h-full"
              />
            </li>
            <li>
              <img
                src="./image/providus.png"
                alt="providus logo"
                className="h-[20px] md:h-full"
              />
            </li>
          </ul>
        </section>
        <img
          src="./image/productcartoon1.png"
          alt="piggying"
          className="mt-[40px] md:mt-[50px]  lg:mt-[80px]"
        />
      </section>

      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="w-full md:w-[50%] mb-[28px] md:mb-[36px] lg:mb-[56px]">
          <div className="flex items-center gap-2 mb-[22px]">
            <p className="text-[#3B6896] font-semibold ">VANT WEALTH</p>{" "}
            <img src="./image/moneypack.png" alt="" />
          </div>
          <h3 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[28px] mb-[16px] font-medium">
            Invest on the go{" "}
          </h3>
          <p className="text-[16px] md:text-[18px]  md:mb-[28px] mb-[16px]">
            We have tailored our investment plans to suit anybody. Earn 5%-13%
            P.A when you invest with any of these Vant app investment plans. Not
            just that, we also have HNI plans for high net worth investors
            willing to pursue a custom investment.
          </p>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-[50px] ">
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <img
                src="/image/deluxe.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
                Deluxe investment Plan
              </h3>{" "}
            {/* </ScrollAnimation> */}
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <p className="text-[#5F5F60]">
                With the deluxe plan, you can earn up to 5% P.A with a minimum
                of 1 unit. You will have access to make withdrawals after 1
                month.
              </p>
            {/* </ScrollAnimation> */}
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <img
                src="/image/growplan.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
                Grow investment Plan{" "}
              </h3>
            {/* </ScrollAnimation> */}
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <p className="text-[#5F5F60]">
                With the grow plan, you can earn up to 10% P.A with a minimum of
                3 unit. You will have access to make withdrawals after 3 months.
              </p>
            {/* </ScrollAnimation> */}
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-[50px] mt-[20px]">
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <img
                src="/image/surgeplan.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
                Surge investment Plan{" "}
              </h3>
            {/* </ScrollAnimation> */}
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <p className="text-[#5F5F60]">
                With the surge plan, you can earn up to 13% P.A with a minimum
                of 5 unit. You will have access to make withdrawals after 6
                months.
              </p>
            {/* </ScrollAnimation> */}
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <img
                src="/image/hni.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
                HNI investment Plan
              </h3>
            {/* </ScrollAnimation> */}
            {/* <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
            > */}
              <p className="text-[#5F5F60]">
                With the HNI investment plan, you can customize the plan to suit
                your finances with risk appetite most convenient to you. Sounds
                cool, right?
              </p>
            {/* </ScrollAnimation> */}
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] py-[24px] flex items-center flex-col md:flex-row mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="w-full md:w-[50%] bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
         
          <img
            src="/image/payoffdebt.png"
            alt=""
            className="mx-auto h-[350px] md:h-[440px]"
          />
        </div>

        <div className="w-full md:w-[50%] md:pl-[20px] lg:pl-[40px]">
         
          <div>
            
              <p className="text-[#3B6896] animate__fadeInUp  animate__animated animate__slow font-semibold ">
                VANT PAY OFF DEBTS
              </p>{" "}
              <img src="./image/moneybag.png" alt="" />
           
          </div>
          {/* <ScrollAnimation
            animateIn="animate__fadeInUp"
            // animateOut="animate__fadeOutRight"
            duration={1}
          > */}
            <h2 className="   animate__animated animate__slow animate__fadeInUp text-[20px] md:text-[28px] lg:text-[35px] md:mb-[28px] mb-[16px] tracking-tighter font-medium">
              Improve your financial welfare by saving to clear off debts.{" "}
            </h2>
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1}> */}
            <p className="text-[16px] md:text-[18px]  md:mb-[28px] mb-[16px]">
              This feature promotes a long-term financial health. By reducing
              debts and building savings simultaneously, individuals can achieve
              a more secure and stable financial future.
            </p>
          {/* </ScrollAnimation> */}
          <ul className="hidden md:flex flex-col gap-[16px] md:gap-[32px] md:mb-[28px] mb-[16px]">
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/transaction.png" alt="" />
              <p>Automatic transfer</p>
            </li>
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/profile.png" alt="" />
              <p>Pay off using Vant tags</p>
            </li>
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/card-edit.png" alt="" />
              <p>Set debt payment method</p>
            </li>
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/card.png" alt="" />
              <p>Set savings frequency</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[110px] mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <h3 className="text-[20px] md:text-[28px] lg:text-[40px] mb-[16px] font-medium text-center  mx-auto md:mb-[32px] lg:mb-[64px] ">
          Future Investment opportunities on <span className="text-[#3B6896]">Vant</span>{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[23px]">
          <div className="w-full md:max-w-[385px] rounded-[16px]">
            <img
              src="./image/vantretirement.png"
              className="w-full object-contain rounded-tr-[16px] rounded-tl-[16px]"
              alt=""
            />
            <div className="lg:p-[26px] md:p-[20px] p-[12px] bg-[#FCFCFC] rounded-br-[16px] rounded-bl-[16px]">
              <div className="flex items-center gap-[12px] mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[20px] text-[16px] font-medium">
                  Vant Retirement{" "}
                </h3>
                <button className="bg-white px-3 text-[14px] py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p className=" text-[14px] text-[#5F5F60]">
                  Vant is launching its mini-health plans. In partnership with
                  various health insurance comapnies, we are doing a test pilot
                  of the product.
                  <br /> <br /> Checkout the plans, purchase a plan. You can get
                  as low as N650/month to cover your health. Visit here
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[385px] rounded-[16px]">
            <img
              src="./image/vanthealth.png"
              className="w-full object-contain rounded-tr-[16px] rounded-tl-[16px]"
              alt=""
            />
            <div className="lg:p-[26px] md:p-[20px] p-[12px] bg-[#FCFCFC] rounded-br-[16px] rounded-bl-[16px]">
              <div className="flex items-center gap-[12px] mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[20px] text-[16px] font-medium">
                  Vant Health
                </h3>
                <button className="bg-white px-3 text-[14px] py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p className=" text-[14px] text-[#5F5F60]">
                  Vant is launching its mini-health plans. In partnership with
                  various health insurance comapnies, we are doing a test pilot
                  of the product.
                  <br />
                  <br />
                  Checkout the plans, purchase a plan. You can get as low as
                  N650/month to cover your health.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[385px] rounded-[16px]">
            <img
              src="./image/vantsnbl.png"
              className="w-full object-contain rounded-tr-[16px] rounded-tl-[16px]"
              alt=""
            />
            <div className="lg:p-[26px] md:p-[20px] p-[12px] bg-[#FCFCFC] rounded-br-[16px] rounded-bl-[16px]">
              <div className="flex items-center gap-[12px] mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[20px] text-[16px] font-medium">
                  Vant SNBL
                </h3>
                <button className="bg-white px-3 text-[14px] py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p className=" text-[14px] text-[#5F5F60]">
                  Vant is launching its mini-health plans. In partnership with
                  various health insurance comapnies, we are doing a test pilot
                  of the product.
                  <br />
                  <br />
                  Checkout the plans, purchase a plan. You can get as low as
                  N650/month to cover your health.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[385px] rounded-[16px]">
            <img
              src="./image/vantcoop.png"
              className="w-full object-contain rounded-tr-[16px] rounded-tl-[16px]"
              alt=""
            />
            <div className="lg:p-[26px] md:p-[20px] p-[12px] bg-[#FCFCFC] rounded-br-[16px] rounded-bl-[16px]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[20px] text-[16px] font-medium">
                  Vant For Coop
                </h3>
                <button className="bg-white px-3 text-[14px] py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p className=" text-[14px] text-[#5F5F60]">
                  Vant is launching its mini-health plans. In partnership with
                  various health insurance comapnies, we are doing a test pilot
                  of the product.
                  <br />
                  <br />
                  Checkout the plans, purchase a plan. You can get as low as
                  N650/month to cover your health.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[385px] rounded-[16px]">
            <img
              src="./image/vantbusiness.png"
              className="w-full object-contain rounded-tr-[16px] rounded-tl-[16px]"
              alt=""
            />
            <div className="lg:p-[26px] md:p-[20px] p-[12px] bg-[#FCFCFC] rounded-br-[16px] rounded-bl-[16px]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[20px] text-[16px] font-medium">
                  Vant for Business{" "}
                </h3>
                <button className="bg-white px-3 text-[14px] py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p className=" text-[14px] text-[#5F5F60]">
                  Vant is launching its mini-health plans. In partnership with
                  various health insurance comapnies, we are doing a test pilot
                  of the product.
                  <br />
                  <br />
                  Checkout the plans, purchase a plan. You can get as low as
                  N650/month to cover your health.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[385px] rounded-[16px]">
            <img
              src="./image/vantcard.png"
              className="w-full object-contain rounded-tr-[16px] rounded-tl-[16px]"
              alt=""
            />
            <div className="lg:p-[26px] md:p-[20px] p-[12px] bg-[#FCFCFC] rounded-br-[16px] rounded-bl-[16px]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[20px] text-[16px] font-medium">
                  Vant Cards{" "}
                </h3>
                <button className="bg-white px-3 text-[14px] py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p className=" text-[14px] text-[#5F5F60]">
                  Vant is launching its mini-health plans. In partnership with
                  various health insurance comapnies, we are doing a test pilot
                  of the product.
                  <br />
                  <br />
                  Checkout the plans, purchase a plan. You can get as low as
                  N650/month to cover your health.
                </p>
              </div>
            </div>
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

export default Product;
