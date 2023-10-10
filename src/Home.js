import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import "./animate.css";
import { useInView } from "react-intersection-observer";


const Progress =({number})=> {
  const {ref, inView} = useInView({
    threshold: 0.3
  });

  return(
    <div ref={ref} className="relative hidden lg:flex flex-row md:flex-col items-center gap-3 w-full md:w-[10%] h-full">
            {" "}
            <div className={` h-[45px] w-[45px] flex  text-lg rounded-full  ${inView? "bg-[#7C9AB9] text-white" : "bg-[#D8E1EA] text-black"} text-center`}>
              <p className="my-auto mx-auto">{number}</p>{" "}
            </div>
            
            <div className={`md:w-1 w-full h-1 md:h-[514px] ${inView? "bg-[#7C9AB9] " : "bg-[#D8E1EA] "} `}></div>
          </div>
  )
}

const Home = () => {

  


  return (
    <div>
      <Navbar />
      <section className=" px-[16px] md:px-[60px] md:gap-4 lg:px-[120px] mt-[80px] relative">

        <div className="w-full ">

          <button className=" flex items-center px-[28px] py-[8px] gap-[8px] rounded-[40px] bg-[#f9f9f9] mx-auto text-[#3B6896]">
            <img src="./image/partypopper.png" alt="party popper" />
            <p>Announcing our new website</p>
          </button>
        </div>

        <h2 className=" animate__slow animate__animated text-[32px] md:text-[56px] lg:text-[80px] text-black text-center font-bold max-w-[996px] mx-auto">
          Unleash Your <span className="text-[#3B6896]">Savings</span> Potential
        </h2>
        <p className="mt-[24px] text-[#878787] max-w-[996px] mx-auto text-center mb-[40px]">
          Try Vant App, a free app that helps you plan and manage your savings
          with ease. Vant App lets you create your own goals and track your
          progress every time you save money.
        </p>

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
        <img
          src="./image/gridtopleft.png"
          alt="grid"
          className="hidden md:block absolute top-0 left-[15%]"
        />
        <img
          src="./image/gridtopright.png"
          alt="grid"
          className="hidden lg:block absolute top-0 right-[15%]"
        />
        <img
          src="./image/gridmidright.png"
          alt="grid"
          className="hidden lg:block absolute top-[25%] right-[25%]"
        />
        <img
          src="./image/gridbottomleft.png"
          alt="grid"
          className="absolute bottom-0 left-[15%]"
        />
        <img
          src="./image/gridmidleft.png"
          alt="grid"
          className="absolute top-[20%] lg:top-[35%] left-[10%] lg:left-[30%]"
        />
      </section>

      <section className="mt-[84px] px-[30px] max-w-[996px] mx-auto mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <p className="text-center text-[#878787] mb-[40px]">
          Some of Our Partners
        </p>
        {/* <ScrollAnimation animateIn="animate__fadeInLeft" duration={1}> */}
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
          {/* <li>
              <img src="./image/microsoft.png" alt="microsoft logo" />
            </li> */}
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
        {/* </ScrollAnimation> */}
      </section>
      <section className="px-[16px] md:px-[60px] gap-[40px] md:gap-4 lg:px-[120px] py-[24px] flex items-center flex-col md:flex-row mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="w-full md:w-[50%] bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
          {" "}
          {/* <ScrollAnimation
            animateIn="animate__fadeInLeft"
            // animateOut="animate__fadeOutBottomLeft"
            duration={1}
          > */}
          <img
            src="/image/appwallet.png"
            alt=""
            className="mx-auto h-[350px] md:h-[440px]"
          />
          {/* </ScrollAnimation>{" "} */}
        </div>

        <div className="w-full md:w-[50%] md:pl-[20px] lg:pl-[40px]">
          {/* <ScrollAnimation
            animateIn="animate__fadeInRight"
            // animateOut="animate__fadeOutRight"
            duration={1}
          > */}
          <div>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              // animateOut="animate__fadeOutRight"
              duration={1}
              className="flex items-center gap-2 mb-[22px]"
            >
              <p className="text-[#3B6896] animate__fadeInUp  animate__animated animate__slow font-semibold ">
                OUR SAVING GOALS
              </p>{" "}
              <img src="./image/moneybag.png" alt="" />
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            // animateOut="animate__fadeOutRight"
            duration={1}
          >
            <h2 className="   animate__animated animate__slow animate__fadeInUp text-[20px] md:text-[28px] lg:text-[40px] md:mb-[28px] mb-[16px] font-medium">
              Do you want to save money for your future goals?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            duration={1}
          >
            <p className="text-[16px] md:text-[18px]  md:mb-[28px] mb-[16px]">
              Whether you sleep or not, the day will dawn. Whether you prepare
              for the future or not, it doesn’t prevent the future from
              evolving. Get intentional about your finances.
            </p>
          </ScrollAnimation>
          <ul className="hidden md:flex flex-col gap-[16px] md:gap-[32px] md:mb-[28px] mb-[16px]">
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/routing.png" alt="" />
              <p>Save for vacation</p>
            </li>
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/cardslash.png" alt="" />
              <p>Save to pay off debt</p>
            </li>
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/medalstar.png" alt="" />
              <p>Save for retirement</p>
            </li>
            <li className="flex items-center gap-3 text-[#5F5F60]">
              <img src="./image/lovely.png" alt="" />
              <p>Save for health insurance</p>
            </li>
          </ul>
          <button className="flex items-center gap-2 text-[#3B6896] hover:text-[#3b6896d2]">
            <p>Learn More</p> <img src="./image/arrowright.png" alt="" />
          </button>
          {/* </ScrollAnimation> */}
        </div>
      </section>

      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="w-full md:w-[50%] mb-[28px] md:mb-[36px] lg:mb-[56px]">
          <div className="flex items-center gap-2 mb-[22px]">
            <p className="text-[#3B6896] font-semibold ">INVEST WITH US</p>{" "}
            <img src="./image/moneypack.png" alt="" />
          </div>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            // animateOut="animate__fadeOutRight"
            duration={1}
          >
            <h3 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[28px] mb-[16px] font-medium">
              All-in-one Investment solutions
            </h3>{" "}
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            // animateOut="animate__fadeOutRight"
            duration={1}
          >
            <p className="text-[16px] md:text-[18px]  md:mb-[28px] mb-[16px]">
              We have tailored our investment plans to suit anybody. Earn 5%-13%
              P.A when you invest with any of these Vant app investment plans.
              Not just that, we also have HNI plans for high net worth investors
              willing to pursue a custom investment.
            </p>
          </ScrollAnimation>
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
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              // animateOut="animate__fadeOutRight"
              duration={1}
            >
              <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
                Deluxe investment Plan
              </h3>{" "}
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              // animateOut="animate__fadeOutRight"
              duration={1}
            >
              <p className="text-[#5F5F60]">
                With the deluxe plan, you can earn up to 5% P.A with a minimum
                of 1 unit. You will have access to make withdrawals after 1
                month.
              </p>
            </ScrollAnimation>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              
              <img
                src="/image/growplan.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
              {/* </ScrollAnimation> */}
            </div>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              // animateOut="animate__fadeOutRight"
              duration={1}
            >
              <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
                Grow investment Plan{" "}
              </h3>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              // animateOut="animate__fadeOutRight"
              duration={1}
            >
              <p className="text-[#5F5F60]">
                With the grow plan, you can earn up to 10% P.A with a minimum of
                3 unit. You will have access to make withdrawals after 3 months.
              </p>
            </ScrollAnimation>
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
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              // animateOut="animate__fadeOutRight"
              duration={1}
            >
              <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
                Surge investment Plan{" "}
              </h3>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              // animateOut="animate__fadeOutRight"
              duration={1}
            >
              <p className="text-[#5F5F60]">
                With the surge plan, you can earn up to 13% P.A with a minimum
                of 5 unit. You will have access to make withdrawals after 6
                months.
              </p>
            </ScrollAnimation>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#f9f9f9] pt-[80px] rounded-tl-[16px] rounded-tr-[16px]">
              <img
                src="/image/hni.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
            <ScrollAnimation
            animateIn="animate__fadeInUp"
            // animateOut="animate__fadeOutRight"
            duration={1}
          >
            <h3 className="text-[18px] md:text-[24px] mb-[20px] ">
              HNI investment Plan
            </h3>
            </ScrollAnimation>
            <ScrollAnimation
            animateIn="animate__fadeInUp"
            // animateOut="animate__fadeOutRight"
            duration={1}
          >
            <p className="text-[#5F5F60]">
              With the HNI investment plan, you can customize the plan to suit
              your finances with risk appetite most convenient to you. Sounds
              cool, right?
            </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="w-full mt-[32px]">
          <button className="flex items-center text-[#3B6896] gap-2 mx-auto hover:text-[#3b6896d2]">
            Learn more about our investments{" "}
            <img src="./image/arrowright.png" alt="" />
          </button>
        </div>
      </section>

      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[80px] mb-[36px] gap-5 font-medium flex justify-center items-center">
          <p>How it works</p> <img src="./image/fire.png" alt="fire" className="h-[32px] w-[32px]" />
        </div>

        <div className="flex items-center flex-col md:flex-row gap-[50px] mt-[20px]">
          <div className="w-full md:w-[45%]">
            <div className="bg-[#f9f9f9] pb-[80px] rounded-bl-[16px] rounded-br-[16px]">
              <img
                src="/image/planlist.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
          </div>
          {/* <div ref={ref} className="relative hidden lg:flex flex-row md:flex-col items-center gap-3 w-full md:w-[10%] h-full">
            {" "}
            <div className={` h-[45px] w-[45px] flex  text-lg rounded-full text-white ${inView? "bg-[#7C9AB9]" : "bg-[#000]"} text-center`}>
              <p className="my-auto mx-auto"> 1</p>{" "}
            </div>
            
            <div className="md:w-1 w-full h-1 md:h-[514px] bg-[#7C9AB9]"></div>
          </div> */}
          <Progress number={1}/>
          <div className="w-full md:w-[45%]">
            <h3 className="text-[20px] md:text-[32px] mb-[48px] font-semibold ">
              Go to investment.
            </h3>
            <p className="text-[#5F5F60]  mb-[16px]">
              Click on the invest tab in the menu tab to open the investment
              section. And so the journey starts...
            </p>
            <p className="text-[#5F5F60]">
              You’ll be able to see all the accumulated investment and wallet
              balance.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row gap-[50px] mt-[20px]">
          <div className="w-full md:w-[45%]">
            <h3 className="text-[20px] md:text-[32px] mb-[48px] font-semibold ">
              Proceed to top-up.{" "}
            </h3>
            <p className="text-[#5F5F60]  mb-[16px]">
              Upon opening the invest tab, you can proceed to fund your
              investment wallet.
            </p>
            <p className="text-[#5F5F60]">
              You can top-up your accounts through the vant wallet or through
              your linked debit card with vant. Shhhh! So simple!
            </p>
          </div>
          {/* <div className="relative hidden lg:flex flex-row md:flex-col items-center gap-3 w-full md:w-[10%] h-full">
            {" "}
            <div className=" h-[45px] w-[45px] flex  text-lg rounded-full text-white bg-[#7C9AB9] text-center">
              <p className="my-auto mx-auto"> 2</p>{" "}
            </div>
            
            <div className="md:w-1 w-full h-1 md:h-[514px] bg-[#7C9AB9]"></div>
          </div> */}
          <Progress number={2}/>
          <div className="w-full md:w-[45%]">
            <div className="bg-[#f9f9f9] pb-[80px] rounded-bl-[16px] rounded-br-[16px]">
              <img
                src="/image/topup.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-[50px] mt-[20px]">
          <div className="w-full md:w-[45%]">
            <div className="bg-[#f9f9f9] pb-[80px] rounded-bl-[16px] rounded-br-[16px]">
              <img
                src="/image/payment.png"
                alt=""
                className="mx-auto h-[350px] md:h-[440px]"
              />
            </div>
          </div>
          {/* <div className="relative hidden lg:flex flex-row md:flex-col items-center gap-3 w-full md:w-[10%] h-full">
            {" "}
            <div className=" h-[45px] w-[45px] flex  text-lg rounded-full text-white bg-[#7C9AB9] text-center">
              <p className="my-auto mx-auto"> 3</p>{" "}
            </div>
    
            <div className="md:w-1 w-full h-1 md:h-[514px] bg-[#7C9AB9]"></div>
          </div> */}
          <Progress number={3}/>
          <div className="w-full md:w-[45%]">
            <h3 className="text-[20px] md:text-[32px] mb-[48px] font-semibold ">
              Final Lap.{" "}
            </h3>
            <p className="text-[#5F5F60]  mb-[16px]">
              Here’s the final stage where you click on the investment plan most
              convenient to you.
            </p>
            <p className="text-[#5F5F60]">
              Click on any plan, select amount of unit and then click on the
              invest now button. That’s all. Simple as ABC
            </p>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[100px] lg:mb-[120px]">
        <div className="w-full md:w-[50%]">
          <h3 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[56px] mb-[26px] font-medium ">
            And there is even more…
            <br /> Yeah, not kidding.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row  gap-6">
          <div className="w-full md:w-[50%] rounded-tl-[16px] rounded-tr-[16px]">
            <img
              src="./image/minhealth.png"
              className="w-full object-contain rounded-tl-[16px] rounded-tr-[16px]"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#f9f9f9]">
              <div className="flex flex-row  gap-3 items-center mb-[16px] md:mb-[24px]">
                <h3 className="lg:text-[22px] md:text-[18px] text-[16px] font-medium">
                  Mini-Health Plans
                </h3>
                <button className="bg-white px-2 py-2 rounded-xl text-[12px]">
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
          <div className="w-full md:w-[50%] rounded-tl-[16px] rounded-tr-[16px]">
            <img
              src="./image/snbl.png"
              className="w-full object-contain rounded-tl-[16px] rounded-tr-[16px]"
              alt=""
            />
            <div className="lg:p-[42px] md:p-[24px] p-[12px] bg-[#f9f9f9]">
              <div className="flex flex-row  gap-3 items-center mb-[16px] md:mb-[24px]">
              <h3 className="lg:text-[22px] md:text-[18px] text-[16px] font-medium">
                  Vant SNBL (Save Now Buy Later)
                </h3>
                <button className="bg-white px-2 py-2 rounded-xl text-[12px]">
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
        <div className="w-full md:w-[50%]">
          <h3 className="text-[20px] md:text-[28px] lg:text-[40px] md:mb-[56px] mb-[26px] font-semibold ">
            Your security and privacy is our priority
          </h3>
        </div>

        <div className="flex gap-4 flex-col md:flex-row mb-[24px] md:mb-[24px] ">
          <div className="w-full md:w-[50%] px-[20px] md:px-[30px] lg:px-[40px] pt-[80px] md:pt-[100px] pb-[20px] md:pb-[40px] bg-[#f9f9f9] rounded-2xl">
            <img src="./image/padlock.png" alt="" className="mb-[28px]" />
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-[20px] font-semibold">
              Enhanced Security
            </h3>
            <p className="text-[#5F5F60]">
              We prioritize the safety of your financial information. We employ
              robust security system to protect your information from
              unauthorized access, fraudsters, phishing attacks or hackers. We
              also follow AML/CFT policy.
            </p>
          </div>
          <div className=" w-full md:w-[50%] px-[20px] md:px-[30px] lg:px-[40px] pt-[80px] md:pt-[100px] pb-[20px] md:pb-[40px] bg-[#f9f9f9] rounded-2xl">
            {" "}
            <img src="./image/plug.png" alt="" className="mb-[28px]" />
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-[20px] font-semibold">
              Regulatory Compliance
            </h3>
            <p className="text-[#5F5F60]">
              Vant app is a duly registered fund manager with the Securities and
              Exchange Commission (SEC) of Nigeria. All our activities are in
              full compliance with regulatory requirements to the ultimate
              protection of our clients.
            </p>
          </div>
        </div>
        <div className="w-full mt-[32px]">
          <button className="flex items-center text-[#3B6896] gap-2 mx-auto hover:text-[#3b6896d2]">
            More on security
            <img src="./image/arrowright.png" alt="" />
          </button>
        </div>
      </section>
      <section className="relative px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[80px] lg:mb-[120px] ">
        <div className="relative py-[32px] md:py-[48px] lg:py-[64px] community bg-no-repeat min-h-[320px] md:min-h-[480px] bg-cover">
          <img
            src="/image/solidbg.png"
            alt=""
            className="absolute top-0 left-0 rounded-2xl object-cover w-full h-[250px] lg:h-full -z-10 "
          />
          <h3 className="text-[20px] md:text-[28px] lg:text-[40px] mb-[16px] font-semibold text-center  ">
            Join our <span className="text-[#3B6896]">Vant</span> community
          </h3>
          <p className="max-w-[590px] px-[16px] text-base md:text-lg text-center mb-5 mx-auto ">
            We have a whatsapp channel for our users to join for Updates, News,
            and latest from Vant...
          </p>
          <div className="w-full flex">
            <button className="px-[18px] md:px-[38px] py-[8px] lg:py-[18px] text-white rounded-[40px] bg-[#3B6896] mx-auto hover:bg-[#3b6896d2]">
              Join Now
            </button>
          </div>
          <img
            src="./image/OneEyed.png"
            alt=""
            className="hidden lg:block top-[60%] left-[10%]  absolute "
          />
          <img
            src="./image/purplearrow.png"
            alt=""
            className="hidden lg:block top-[55%] left-[55%] absolute  h-[30px] md:h-[45px] lg:h-[65px]"
          />
          <img
            src="./image/happyemogi.png"
            alt=""
            className="hidden lg:block top-[60%] left-[25%]  absolute h-[50px] md:h-[60px] lg:h-[100px]"
          />
          <img
            src="./image/face.png"
            alt=""
            className="hidden lg:block top-[32px] md:top-[64px] left-[30px] md:left-[48px] lg:left-[96px] absolute h-[40px] md:h-[50px] lg:h-[88px]"
          />
          <img
            src="./image/orangearrow.png"
            alt=""
            className="hidden lg:block top-[40%] left-[10%]  absolute h-[45px] md:h-[45px] lg:h-[65px]"
          />
          <img
            src="./image/manface.png"
            alt=""
            className="hidden lg:block top-[70%] left-[50%]  absolute h-[45px] md:h-[45px] lg:h-[65px]"
          />
          <img
            src="./image/babyavatar.png"
            alt=""
            className="hidden lg:block top-[60%] right-[25%]  absolute "
          />
          <img
            src="./image/lollipop.png"
            alt=""
            className="hidden lg:block top-[50%] right-[10%]  absolute h-[50px]  md:h-[70px] lg:h-[96px]"
          />
          <img
            src="./image/lady.png"
            alt=""
            className="top-[20%] right-[10%]  absolute hidden md:flex"
          />
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[80px] lg:mb-[120px]">
        <h3 className="text-[20px] md:text-[28px] lg:text-[40px] mb-[16px] font-semibold text-center max-w-[800px] mx-auto ">
          Build custom payments experiences with our structured documented APIs
        </h3>
        <div className="flex lg:hidden items-center gap-2 my-[32px] ">
          <h4 className="text-[#3B6896] text-base">VANT FOR DEVELOPERS</h4>
          <img src="./image/spanner.png" alt="spanner" />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[60%] rounded-2xl bg-[#FCFCFC] flex justify-center py-[32px]">
            <img src="./image/codesnippet.png" alt="code snippet" />
          </div>
          <div className="w-full md:w-[35%] md:pl-[56px] md:pt-[56px]">
            <div className="hidden md:flex items-center gap-2 mb-[32px] md:mb-[32px]">
              <h4 className="text-[#3B6896] text-base">VANT FOR DEVELOPERS</h4>
              <img src="./image/spanner.png" alt="spanner" />
            </div>
            <img
              src="./image/transaction.png"
              alt="icon"
              className="mb-[16px] "
            />
            <h3 className="text-[20px] md:text-[24px] lg:text-[32px] mb-[32px]">
              Transfer API
            </h3>
            <p className="mb-[32px] md:mb-[40px]">
              Automatically transfer money directly to your customers' bank
              accounts.
            </p>
            <img
              src="./image/coinstack.png"
              alt="coin stack"
              className="mb-[16px] "
            />
            <h3 className="text-[20px] md:text-[24px] lg:text-[32px] mb-[32px]">
              Resolve Account No API
            </h3>
            <p className="mb-[32px] md:mb-[40px]">
              Verify if the bank account details provided by customers are
              correct.
            </p>
            <button className="px-[22px] md:px-[28px] py-[8px] lg:py-[18px] text-white bg-[#3B6896] rounded-[38px] hover:bg-[#3b6896d2]">
              Read our documentation
            </button>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px]  lg:px-[120px] mb-[60px] md:mb-[80px] lg:mb-[120px] ">
        <h2 className="w-full md:w-[50%] text-[20px] md:text-[28px] lg:text-[40px] mb-[16px] md:mb-[36px] lg:mb-[56px] font-semibold  ">
          Frequently asked questions (FAQs)
        </h2>
        <div>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2  mb-[24px] md:mb-[34px]">
            <div className="mb-[24px] pb-[40px] border-b">
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-4 font-medium">
                What is Vant?
              </h3>
              <p className="text-lg md:text-base text-[#5F5F60] ">
                Vant is a savings and financial management app for individual
                and small businesses.
              </p>
            </div>
            <div className="mb-[24px] pb-[40px] border-b">
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-4 font-medium">
                Is my personal information safe with Vant?
              </h3>
              <p className="text-lg md:text-base text-[#5F5F60] ">
                At Vant, your data privacy 🔏 is important to us. We protect
                your data bank-level encryption.
              </p>
            </div>
            <div className="mb-[24px] pb-[40px] border-b">
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-4 font-medium">
                How does Vant work?
              </h3>
              <p className="text-lg md:text-base text-[#5F5F60] ">
                Vant allows you to save individually or in groups into different
                savings pocket. With Vant you will get to also enjoy different
                financial management value added services.
              </p>
            </div>
            <div className="mb-[24px] pb-[40px] border-b">
              <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-4 font-medium">
                How does Vant help me save money?
              </h3>
              <p className="text-lg md:text-base text-[#5F5F60] ">
                With Vant you get you save into your savings pocket through card
                or bank transfer. You are in control, you can save in fixed
                deposits and initiate automatic funding of your savings pockets.
              </p>
            </div>
          </div>
          <button className="flex items-center text-[#3B6896] gap-2 ">
            See more FAQs
            <img src="./image/arrowright.png" alt="" />
          </button>
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
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
