import React from "react";
import home from "../../assets/img/home.png";
import oracle from "../../assets/img/oracle.png";
import google from "../../assets/img/google.svg";
import amazon from "../../assets/img/amazon2.png";
import IBM from "../../assets/img/IBM.png";
import accenture from "../../assets/img/accenture.png";
import cognizant from "../../assets/img/cognizant.png";
import hcl from "../../assets/img/hcl.png";
import microsoft from "../../assets/img/microsoft.png";
import netflix from "../../assets/img/netflix.webp";
import servicenow from "../../assets/img/servicenow.svg";
import iamneo from "../../assets/img/iamneo.png";
import {
  GraduationCapIcon,
  ComputerIcon,
  AwardIcon,
  SchoolIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import Courses from "./Courses";

const Home = () => {
  return (
    <div className="w-full flex  flex-col justify-center items-start">
      <div className=" w-full flex  justify-center items-center">
        <div className=" w-1/2 flex justify-center items-center">
          <img src={home} alt="noimg" className="w-2/4" />
        </div>
        <div className="h-full w-1/2 flex justify-center flex-col gap-11 text-base md:text-lg lg:text-xl xl:text-2xl font-bold items-start ">
          Bring your goals into focus
          <p>
            {" "}
            SKCT offers online courses and programs that prepare you for every
            career moment{" "}
          </p>
          <Button className="text-xl font-bold">Start Learning</Button>
        </div>
      </div>

      <div className="w-full h-[4vh] flex justify-evenly items-center flex-row bg-slate-600 ">
        <p className="text-primary font-bold">Total Courses 13150 +</p>
        <p className="text-primary font-bold">Total Enrollments 4.4 crore+</p>
        <p className="text-primary font-bold">
          Total Certifications 30.8 lakh+
        </p>
      </div>

      <div className="h-1/3 md:h-2/5 w-full  py-10">
        <div className="h-1/8 w-full flex justify-center items-start ">
          <h1 className="md:text-3xl">Why SKCT?</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-4/5 bg-secondary grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4">
            <div className=" w-full p-4 text-center flex justify-center items-center flex-col border border-gray-300  rounded-md">
              <GraduationCapIcon className="w-full h-[9vh]" />
              <h1 className="font-bold text-xl">
                Free Course from Top Universities
              </h1>
              <p className=""> Find Free courses from the Best Universities</p>
            </div>
            <div className="w-full p-4 text-center flex justify-center items-center flex-col border border-gray-300  rounded-md">
              <ComputerIcon className="w-full h-[9vh]" />
              <h1 className="font-bold text-xl text-primary">
                Self-Paced Learning
              </h1>{" "}
              <p className="">Learn at your own pace, Anytime, Anywhere</p>
            </div>
            <div className="w-full p-4 text-center flex justify-center items-center flex-col border border-gray-300  rounded-md">
              <AwardIcon className="w-full h-[9vh]" />
              <h1 className="font-bold text-xl">Earn Certifications</h1>
              <p className="">
                Earn Certifications and Recognition from the Top Companies
              </p>
            </div>
            <div className="w-full p-4 text-center flex justify-center items-center flex-col border border-gray-300  rounded-md">
              <SchoolIcon className="w-full h-[9vh] gap-8" />
              <h1 className="font-bold text-xl ">
                Get University Credits
              </h1>{" "}
              <p className="line-clamp-2">
                Earn University Credits and get them transferred to your degree
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto w-full bg-red-300"></div>
      <div className=" h-1/3 w-full flex justify-center items-center">
        <Courses />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <p className="text-2xl font-bold">
          Our students get placed in top companies
        </p>
        <div className="w-full md:w-1/2 flex justify-center items-center flex-wrap gap-10  p-4">
          <img src={oracle} className="h-10 md:h-14 " />
          <img src={google} className="h-10 md:h-16" />
          <img src={amazon} className="h-10 md:h-14" />
          <img src={microsoft} className="h-10 md:h-14" />
          <img src={IBM} className="h-10 md:h-14" />
          <img src={iamneo} className="h-10 md:h-14 w-28" />
          <img src={servicenow} className="h-10 md:h-4" />
          <img src={hcl} className="h-11 md:h-10 w-12" />
          <img src={netflix} className="h-10 md:h-14" />
          <img src={accenture} className="h-16 md:h-17 w-32" />
        </div>
      </div>
    </div>
  );
};

export default Home;
