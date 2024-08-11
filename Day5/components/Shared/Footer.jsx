import { Facebook, Twitter, Instagram } from "lucide-react";
import React from "react";
import skctfulllogo from "../../assets/img/skctfulllogo.webp";

const Footer = () => {
  return (
    <>
      <div className=" bottom-11 left-0 w-full h-[20vh] font-bold text-cyan-50 bg-slate-600 grid grid-flow-col justify-between items-center border-t-2 border-primary/50">
        <div>
          <img src={skctfulllogo} alt="no img" className="h-[10vh] " />
        </div>
        <div className="grid gap-4  w-3/6">
          <p>Kovaipudur, Coimbatore-641042, Tamil Nadu</p>
        </div>
        <div className="grid gap-4 w-4/6 ">
          <p>0422-2984567 0422-2984568</p>
        </div>
        <div className="grid gap-4 w-1/6">
          <p>info@skct.edu.in principal@skct.edu.in</p>
        </div>
      </div>
      <div className=" bottom-0 left-0 w-full h-[6vh] bg-slate-600  flex flex-row justify-center items-center border-t-2 border-primary/50">
        <div className="w-2/5 h-fullfont-bold flex justify-start items-center text-lg">
          {" "}
          © All Rights Reserved 2024. SKCT
        </div>
        <div className="w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 ">
          <a
            href="#"
            target="_blank"
            className="h-8 w-8 rounded-md  hover:bg-primary/50 hover:text-background flex justify-center items-center"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            target="_blank"
            className="h-8 w-8 rounded-md hover:bg-primary/50 hover:text-background flex justify-center items-center"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="#"
            target="_blank"
            className="h-8 w-8 rounded-md  hover:bg-primary/50 hover:text-background flex justify-center items-center"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div> 
    </>
  );
};

export default Footer;

