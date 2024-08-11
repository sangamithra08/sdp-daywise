import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import CustomQueryForm from '../../components/Admin/CustomQueryForm';

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is an e-learning platform?",
      answer:
        "An e-learning platform is a software solution designed to facilitate online learning and course management for students.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "To enroll in a course, navigate to the course listings, select a course, and click the 'Enroll' button. Follow the on-screen instructions to complete your enrollment.",
    },
    {
      question: "How can I submit an assignment?",
      answer:
        "To submit an assignment, go to the 'Assignments' section of the course, select the assignment you want to submit, and upload your file.",
    },
    {
      question: "How do I track my progress?",
      answer:
        "You can track your progress in the 'Progress' section of your profile. This section shows your completed courses, ongoing courses, and grades.",
    },
    {
      question: "Can I access the courses offline?",
      answer:
        "Some e-learning platforms allow you to download course materials for offline access. Check the course details to see if this feature is available.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-3/4 container mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b-2 pb-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold">{item.question}</h2>
              <ChevronDown
                className={`transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-lg text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <CustomQueryForm />
    </div>
  );
};

export default Support;
