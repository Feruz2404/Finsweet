import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import headerImage from "../../assets/headerImage.png";
import logoBar from "../../assets/logoBar.png";

const Home = () => {
  return (
    <main className="bg-[#232536]">
      <div className="container">
        <div className="flex gap-[93px] pt-[96px]">
          <div className="left max-w-[600px] flex flex-col mt-16">
            <h1 className="w-[624px] h-[204px] text-[56px] leading-[68px] text-[#FFFFFF] mt-6">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="w-[528px] h-[48px] text-base leading-24 text-[#FFFFFF] max-w-[500px] mt-6">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <button className="flex items-center gap-2 mt-8 bg-[#444CFC] w-[219px] h-[64px] py-[20px] px-[32px] text-base text-[#FFFFFF] hover:bg-[#2e33a3]">
              Request Quote <FaArrowRightLong className="text-[#FFFFFF]" />
            </button>
          </div>
          <div className="right">
            <img src={headerImage} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <p className="text-sm text-[#FFFFFF] opacity-60">Our Clients</p>
            <p className="w-[187px] text-lg text-[#FFFFFF]">
              We've Worked with
            </p>
          </div>
          <div>
            <img src={logoBar} alt="logo" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
