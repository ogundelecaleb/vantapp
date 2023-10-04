import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import "./animate.css";

const Product = () => {
  return (
    <div>
      <Navbar />
      <section className="px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] mt-[80px] relative">
        <h2 className="animate__lightSpeedInLeft animate__slow animate__animated text-[24px md:text-[42px] lg:text-[80px] text-black text-center font-bold max-w-[996px] mx-auto">
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
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutBottomLeft"
            duration={2}
          >
            <ul className="flex justify-between flex-wrap">
              <li>
                <img src="./image/aws.png" alt="aws logo" />
              </li>
              <li>
                <img src="./image/techimpact.png" alt="techimpact logo" />
              </li>
              <li>
                <img src="./image/microsoft.png" alt="microsoft logo" />
              </li>
              <li>
                <img src="./image/vfd.png" alt="vdf logo" />
              </li>
              <li>
                <img src="./image/providus.png" alt="providus logo" />
              </li>
            </ul>
          </ScrollAnimation>
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
            <div className="bg-[#FCFCFC] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
                duration={2}
              >
                <img src="/image/deluxe.png" alt="" className="mx-auto h-[350px] md:h-[440px]"/>
              </ScrollAnimation>
            </div>
            <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
              Deluxe investment Plan
            </h3>
            <p className="text-[#5F5F60]">
              With the deluxe plan, you can earn up to 5% P.A with a minimum of
              1 unit. You will have access to make withdrawals after 1 month.
            </p>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#FCFCFC] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
                duration={2}
              >
                <img src="/image/growplan.png" alt="" className="mx-auto h-[350px] md:h-[440px]" />
              </ScrollAnimation>
            </div>
            <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
              Grow investment Plan{" "}
            </h3>
            <p className="text-[#5F5F60]">
              With the grow plan, you can earn up to 10% P.A with a minimum of 3
              unit. You will have access to make withdrawals after 3 months.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-[50px] mt-[20px]">
          <div className="w-full md:w-[50%]">
            <div className="bg-[#FCFCFC] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <img src="/image/surgeplan.png" alt="" className="mx-auto h-[350px] md:h-[440px]" />
            </div>
            <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
              Surge investment Plan{" "}
            </h3>
            <p className="text-[#5F5F60]">
              With the surge plan, you can earn up to 13% P.A with a minimum of
              5 unit. You will have access to make withdrawals after 6 months.
            </p>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#FCFCFC] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <img src="/image/hni.png" alt="" className="mx-auto h-[350px] md:h-[440px]" />
            </div>
            <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
              HNI investment Plan
            </h3>
            <p className="text-[#5F5F60]">
              With the HNI investment plan, you can customize the plan to suit
              your finances with risk appetite most convenient to you. Sounds
              cool, right?
            </p>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] py-[24px] flex items-center flex-col md:flex-row mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="w-full md:w-[50%] bg-[#FCFCFC] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
          {" "}
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutBottomLeft"
            duration={2}
          >
            <img src="/image/appwallet.png" alt="" className="mx-auto h-[350px] md:h-[440px]" />
          </ScrollAnimation>{" "}
        </div>

        <div className="w-full md:w-[50%] md:pl-[20px] lg:pl-[40px]">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutRight"
            duration={2}
          >
            <div className="flex items-center gap-2 mb-[22px]">
              <p className="text-[#3B6896] font-semibold ">OUR SAVING GOALS</p>{" "}
              <img src="./image/payoffdebt.png" alt="" />
            </div>
            <h2 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[28px] mb-[16px] font-medium">
              Do you want to save money for your future goals?
            </h2>
            <p className="text-[16px] md:text-[18px]  md:mb-[28px] mb-[16px]">
              Whether you sleep or not, the day will dawn. Whether you prepare
              for the future or not, it doesn’t prevent the future from
              evolving. Get intentional about your finances.
            </p>
            <ul className="flex flex-col gap-[16px] md:gap-[32px] md:mb-[28px] mb-[16px]">
              <li className="flex items-center gap-3 text-[#5F5F60]">
                <img src="./image/transaction.png" alt="" />
                <p>Save for vacation</p>
              </li>
              <li className="flex items-center gap-3 text-[#5F5F60]">
                <img src="./image/profile.png" alt="" />
                <p>Save to pay off debt</p>
              </li>
              <li className="flex items-center gap-3 text-[#5F5F60]">
                <img src="./image/card-edit.png" alt="" />
                <p>Save for retirement</p>
              </li>
              <li className="flex items-center gap-3 text-[#5F5F60]">
                <img src="./image/card.png" alt="" />
                <p>Save for health insurance</p>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <h3 className="text-[20px] md:text-[28px] lg:text-[40px] mb-[16px] font-medium text-center max-w-[759px] mx-auto ">
          Future Investment opportunities on Vant{" "}
        </h3>
        <div className="flex flex-col md:flex-row  gap-6">
          <div className="w-full md:w-[50%]">
            <img
              src="./image/vantretirement.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#FCFCFC]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[24px] text-[18px] font-medium">
                  Vant Retirement{" "}
                </h3>
                <button className="bg-white px-3 py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p>
                  Vant is launching its mini-health plans. In partnership with
                  various health insurance comapnies, we are doing a test pilot
                  of the product.
                  <br /> <br /> Checkout the plans, purchase a plan. You can get
                  as low as N650/month to cover your health. Visit here
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%]">
            <img
              src="./image/vanthealth.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#FCFCFC]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[24px] text-[18px] font-medium">
                  Vant Health
                </h3>
                <button className="bg-white px-3 py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p>
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
          <div className="w-full md:w-[50%]">
            <img
              src="./image/vantsnbl.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#FCFCFC]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[24px] text-[18px] font-medium">
                  Vant SNBL (Save Now Buy Later)
                </h3>
                <button className="bg-white px-3 py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p>
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
          <div className="w-full md:w-[50%]">
            <img
              src="./image/vantcoop.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#FCFCFC]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[24px] text-[18px] font-medium">
                  Vant For Coop
                </h3>
                <button className="bg-white px-3 py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p>
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
          <div className="w-full md:w-[50%]">
            <img
              src="./image/vantbusiness.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#FCFCFC]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[24px] text-[18px] font-medium">
                  Vant for Business{" "}
                </h3>
                <button className="bg-white px-3 py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p>
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
          <div className="w-full md:w-[50%]">
            <img
              src="./image/vantcard.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#FCFCFC]">
              <div className="flex items-center mb-[16px] md:mb-[24px]">
                <h3 className="md:text-[24px] text-[18px] font-medium">
                  Vant Cards{" "}
                </h3>
                <button className="bg-white px-3 py-2 rounded-xl">
                  Coming soon
                </button>
              </div>{" "}
              <div>
                <p>
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
        <div className="flex pt-[40px] md:pt-[78px] bg-[#FCFCFC] px-[30px] md:px-[50px] lg:px-[80px] gap-[60px] flex-row items-center">
          <div className="hidden md:flex w-[40%]">
            <img src="./image/appwallet.png" alt="" className="mx-auto" />
          </div>
          <div className="w-full md:w-[60%]">
            <h3 className="  text-[20px] md:text-[28px] lg:text-[40px] mb-[16px] md:mb-[36px] lg:mb-[56px] font-medium">
              Download Vant app today and start your journey towards financial
              freedom.
            </h3>
            <div className="flex gap-4 md:gap-6">
              <img
                src="./image/googleplay.png"
                alt="Google pLay"
                className="w-[40px]"
              />
              <img
                src="./image/appstore.png"
                alt="app store"
                className="w-[40px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
