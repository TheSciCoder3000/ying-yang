import React from "react";
import "@/styles/css/Footer.css";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import Image from "./Image";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-[86rem] p-20 flex justify-center">
        <div className="grid grid-cols-4 gap-20">
          <div className="link-group">
            <Image
              className="h-14 w-full object-contain object-left mb-7"
              src={"/yinyang-logo.png"}
              alt="logo"
            />
            <p className="font-extralight text-[13px]/[1.5em] text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy.
            </p>
            <button className="mt-8 flex gap-2 pl-5 font-light items-center justify-center rounded-full bg-[#008080] cursor-pointer p-1">
              Company Deck{" "}
              <div className="bg-black rounded-full aspect-square w-8 flex items-center justify-center">
                <ArrowDown color="#EAFE57" className="arrow-down" size={20} />
              </div>
            </button>
          </div>
          <div className="link-group">
            <h1 className="font-semibold mb-4 text-3xl">MENU</h1>
            <div className="flex flex-col gap-4">
              <a href="">About</a>
              <a href="">Work</a>
              <a href="">Contact</a>
            </div>
          </div>
          <div className="link-group">
            <h1 className="font-semibold mb-4 text-3xl">GET INSPIRED</h1>
            <div className="flex flex-col gap-4">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
            </div>
          </div>
          <div className="link-group">
            <div className="flex gap-4 mb-5">
              <SiInstagram className="icon" size={20} />
              <SiFacebook className="icon" size={20} />
              <SiLinkedin className="icon" size={20} />
            </div>
            <div className="flex gap-4 items-center">
              <div className="cat-content">
                <h2 className="font-light text-sm">Let&apos;s work together</h2>
                <h3 className="text-2xl text-[#008080]">Call YinYang</h3>
              </div>
              <button className="flex items-center justify-center rounded-full bg-[#008080] cursor-pointer w-11 aspect-square">
                <ArrowUpRight className="" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-cont">
        <h1 className="font-bold">YinYang</h1>
      </div>
    </footer>
  );
};

export default Footer;
