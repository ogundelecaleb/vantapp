import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };
  return (
    <div className="relative">
      {" "}
      <div className="relative px-[16px] md:px-[60px] lg:px-[120px] py-[24px]">
        <div className="flex items-center justify-between ">
          <img
            src="./image/logo.png"
            alt="vant logo"
            className="object-fit h-[50px] w-[147px]"
          ></img>
          <div className="hidden md:block">
            <ul className="text-base flex md:gap-[28px] lg:gap-[38px] items-center text-[#989898] px-[38px] py-[18px] rounded-[40px] bg-[#FAFAFA]">
              <Link to="/personal">
                <li className={`${location.pathname === "/personal"
            ? "text-blue-500": ""}`}>Personal</li>
              </Link>
              <Link to="/product">
                <li className={`${location.pathname === "/product"
            ? "text-blue-500": ""}`}>Products</li>
              </Link>
              <Link to="/company">
                <li className={`${location.pathname === "/company"
            ? "text-blue-500": ""}`}>Company</li>
              </Link>
              <Link to="">
                <li className={`${location.pathname === "/developer"
            ? "text-blue-500": ""}`}>Developers</li>
              </Link>
              <Link to="">
                <li className={`${location.pathname === "/personal"
            ? "text-blue-500": ""}`}>Business</li>
              </Link>
            </ul>
          </div>
          <button className="text-base hidden  xl:flex gap-[8px] items-center text-[#3B6896] px-[28px] py-[18px] rounded-[40px] border border-[#3B6896] ">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.043 6.5233C16.961 6.57464 15.009 7.65797 15.009 10.06C15.101 12.7993 17.4723 13.76 17.513 13.76C17.4723 13.8113 17.155 15.0686 16.215 16.3866C15.469 17.522 14.641 18.6666 13.3836 18.6666C12.1876 18.6666 11.7583 17.91 10.3783 17.91C8.89629 17.91 8.47696 18.6666 7.34229 18.6666C6.08496 18.6666 5.19562 17.4606 4.40896 16.336C3.38696 14.864 2.51829 12.554 2.48762 10.336C2.46696 9.16064 2.69229 8.0053 3.26429 7.02397C4.07162 5.65397 5.51296 4.72397 7.08696 4.6933C8.29296 4.65264 9.36629 5.5213 10.1023 5.5213C10.8076 5.5213 12.1263 4.6933 13.6183 4.6933C14.2623 4.69397 15.9796 4.88797 17.043 6.5233ZM10.0003 4.45864C9.78562 3.3853 10.3783 2.31197 10.9303 1.6273C11.6356 0.799305 12.7496 0.237305 13.7103 0.237305C13.7716 1.31064 13.383 2.3633 12.6883 3.12997C12.065 3.95797 10.9916 4.5813 10.0003 4.45864Z"
                  fill="#3B6896"
                />
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.08203 2.14062L12 9.05729L13.7852 7.27213C11.3458 5.79214 8.07871 3.80673 6.60937 2.91406L5.625 2.31771C5.451 2.21171 5.2647 2.15462 5.08203 2.14062ZM4.02604 2.96875C4.01204 3.04475 4 3.12112 4 3.20312V16.8724C4 16.9297 4.01153 16.9831 4.01953 17.0378L11.0573 10L4.02604 2.96875ZM14.9583 7.98437L12.9427 10L14.9232 11.9805C15.9725 11.3445 16.6993 10.9028 16.7799 10.8542C17.1366 10.6362 17.338 10.3072 17.332 9.94792C17.3267 9.59525 17.1252 9.27994 16.7825 9.08594C16.7059 9.04194 15.989 8.60904 14.9583 7.98437ZM12 10.9427L5.10286 17.8398C5.23686 17.8165 5.3707 17.7765 5.4987 17.6992C5.67603 17.5912 10.4667 14.6847 13.75 12.6927L12 10.9427Z"
                  fill="#3B6896"
                />
              </svg>
            </div>
            <p>Download our App</p>
          </button>
          <button onClick={handleToggle} className="md:hidden md:inline-block">
            {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </button>
        </div>
        
      </div>
      {showMenu && (
          <m.div
            initial={{ x:-30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              // scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className=" mt-4 absolute top-[82px] flex space-x-3 bg-white h-screen   lg:hidden w-full py-[30px] px-[20px] z-10"
          >
             

              <ul className="flex flex-col space-y-9  mb-2 text-black text-4xl ">
                <Link to="/">
                  <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                    Home
                  </li>
                </Link>
                <Link to="/personal">
                  <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                    Personal
                  </li>
                </Link>
                <Link to="/product">
                  <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                    Products
                  </li>
                </Link>
                <Link to="/company">
                  <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                    Company
                  </li>
                </Link>
                <Link to="/">
                  <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                    Business
                  </li>
                </Link>
              
              </ul>
          </m.div>
        )}
    </div>
  );
};

export default Navbar;
