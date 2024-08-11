import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import skctmainlogo from "../../assets/img/skctmainlogo.webp";

const Navbar = () => {
  const NavLinks = [
    {
      title: "About us",
      path: "/",
    },
    {
      title: "All Courses",
      path: "/courses",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-[9vh] font-bold flex flex-row justify-center items-center shadow-sm shadow-primary/50">
        <div className="w-1/4 h-full text-xl text-primary flex justify-start items-center gap-2">
      <Link to="/">
          <img src={skctmainlogo} alt="no image" className="h-[7vh]" />
      </Link>
          <p className=" text-base md:text-lg lg:text-xl xl:text-xl">
            Sri Krishna College of Technology
          </p>
        </div>
      <div className="w-3/5 h-full font-bold flex flex-row justify-end items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
        {NavLinks.map((links, index) => (
          <li key={index} className="list-none">
            <NavLink to={links.path}>{links.title}</NavLink>
          </li>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
