import React from "react";
import { ChevronRight } from "lucide-react";
import homeimg1 from "../../assets/img/homeimg1.jpg";
import homeimg2 from "../../assets/img/homeimg2.jpg";
import homeimg3 from "../../assets/img/homeimg3.png";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseData = [
    {
      id: 1,
      title: "The Complete HTML CSS JS Course 2022",
      duration: "05 hours 15 minutes",
      reviews: 5,
      imgSrc: homeimg1,
    },
    {
      id: 2,
      title: "Advanced React and Redux",
      duration: "10 hours 00 minutes",
      reviews: 8,
      imgSrc:
      homeimg2,
    },
    {
      id: 3,
      title: "Node.js Masterclass",
      duration: "08 hours 30 minutes",
      reviews: 7,
      imgSrc:homeimg3,
    },
    
  ];

  return (
    <div className="h-1/3 w-3/4 flex justify-center items-center flex-row gap-10">
      <div className="h-full w-4/5 courses py-8 " id="courses">
        <div className=" text-center mb-8">
          <h2 className="text-2xl font-bold">Explore Popular Courses</h2>
        </div>
        <div className="courses-content grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 border-secondary  gap-8">
          {courseData.map((course) => (
            <div
              key={course.id}
              className="h-3/4 row  shadow-lg   border border-gray-50   rounded-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-4"
            >
              <img
                src={course.imgSrc}
                alt={course.title}
                className="w-full h-1/2 object-cover"
              />
              <div className="h-1/2 p-6 ">
                {/* <h5 className="text-primary text-lg font-bold ">
                  {course.price}
                </h5> */}
                <h3 className="text-xl text-primary font-bold mt-2 mb-4 ">
                  {course.title}
                </h3>
                <h6 className="text-gray-600 text-sm font-normal">
                  {course.duration}
                </h6>
                <div className="rating flex space-x-1 mt-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i
                        key={i}
                        className={`bx bxs-star ${
                          i < course.reviews
                            ? "text-main-color"
                            : "text-gray-400"
                        }`}
                      ></i>
                    ))}
                </div>
                <div className="review mt-2">
                  <p className="text-gray-600 text-sm font-normal">{`${course.reviews} Reviews`}</p>
                </div>
                <div className=" flex justify-center items-center">
                          <button className="bg-yellow-500 w-2/3   rounded-md rounded-lg">
                            Enroll now
                          </button>
                        </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-1/8 bg-stone-700">
      <Link to='/courses' > <ChevronRight /></Link> 
      </div>
    </div>
  );
};

export default Courses;
