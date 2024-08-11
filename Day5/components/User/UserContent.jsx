import React from "react";
import homeimg1 from "../../assets/img/homeimg1.jpg";
import homeimg2 from "../../assets/img/homeimg2.jpg";
import homeimg3 from "../../assets/img/homeimg3.png";
import img10 from "../../assets/img/img10.webp";
import img1 from "../../assets/img/img1.jpg";

const UserContent = () => {
  const courseData = [
    {
      id: 1,
      title: "The Complete HTML CSS JS Course 2022",
      duration: "05 hours 15 minutes",
      reviews: 5,
      imgSrc: homeimg1,
      category: "completed",
    },
    {
      id: 2,
      title: "Advanced React and Redux",
      duration: "10 hours 00 minutes",
      reviews: 8,
      imgSrc: homeimg2,
      category: "ongoing",
      progress: 70,
    },
    {
      id: 3,
      title: "Node.js Masterclass",
      duration: "08 hours 30 minutes",
      reviews: 7,
      imgSrc: homeimg3,
      category: "enrolled",
    },
    {
      id: 4,
      title: "How Computer Works?",
      duration: "08 hours 30 minutes",
      reviews: 10,
      imgSrc: img1,
      category: "enrolled",
    },
    {
      id: 5,
      title: "Full Stack Java",
      duration: "08 hours 30 minutes",
      reviews: 17,
      imgSrc: img10,
      category: "ongoing",
      progress: 45,
    },
  ];

  const enrolledCourses = courseData.filter(
    (course) => course.category === "enrolled"
  );
  const ongoingCourses = courseData.filter(
    (course) => course.category === "ongoing"
  );
  const completedCourses = courseData.filter(
    (course) => course.category === "completed"
  );

  return (
    <div className="p-6">
      <div className="w-full flex justify-start items-center mb-8 text-sky-800">
        <h1 className="font-bold text-4xl">Welcome Sangamithra!</h1>
      </div>
      <div className="w-full flex justify-evenly items-center mb-8 text-primary">
        <div className="w-1/6 h-3/4 flex justify-center items-center border rounded-lg p-4">
          <p>Name: Sangamithra M</p>
        </div>
        <div className="w-2/6 h-3/4 flex justify-center items-center border rounded-lg p-4">
          <p>Roll No: 727822TUCS201</p>
        </div>
        <div className="w-1/6 h-3/4 flex justify-center items-center border rounded-lg p-4">
          <p>Class: II CSE C</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col mb-8">
        <div className="w-5/6 flex justify-start items-start flex-col gap-7">
          <div className="w-full">
            <h2 className="font-bold text-3xl text-primary mb-4">Enrolled Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="shadow-lg border border-gray-100 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={course.imgSrc}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-primary font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-3xl text-primary mb-4">Ongoing Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingCourses.map((course) => (
                <div
                  key={course.id}
                  className="shadow-lg border border-gray-100 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={course.imgSrc}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-primary font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.duration}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 text-sm">{course.progress}% completed</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-3xl text-primary mb-4">Completed Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <div
                  key={course.id}
                  className="shadow-lg border border-gray-100 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={course.imgSrc}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-primary font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
