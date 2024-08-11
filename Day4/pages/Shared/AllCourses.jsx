
// import React, { useState } from "react";
// import Categories from "./Categories";
// import { Link } from "react-router-dom";

// const AllCourses = () => {
//   const [data, setData] = useState(Categories);
//   const filterResult = (catItem) => {
//     const result = Categories.filter((curData) => {
//       return curData.Category === catItem;
//     });
//     setData(result);
//   };

//   return (
//     <>
//       <h1 className="text-center font-bold text-3xl text-blue-500 mb-4">Explore Our Courses...</h1>
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap md:flex-nowrap mt-5">
//           <div className="w-full md:w-1/4 mb-4 md:mb-0">
//             <button
//               className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
//               onClick={() => filterResult("Programming language")}
//             >
//               Programming language
//             </button>
//             <button
//               className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
//               onClick={() => filterResult("Trending technology")}
//             >
//               Trending technology
//             </button>
//             <button
//               className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
//               onClick={() => filterResult("Interview preparation")}
//             >
//               Interview preparation
//             </button>
//             <button
//               className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
//               onClick={() => filterResult("Database")}
//             >
//               Database
//             </button>
//             <button
//               className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
//               onClick={() => filterResult("CS Subject")}
//             >
//               CS Subjects
//             </button>
//             <button
//               className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
//               onClick={() => setData(Categories)}
//             >
//               All
//             </button>
//           </div>
//           <div className="w-full md:w-3/4">
//             <div className="flex flex-wrap justify-center">
//               {data.map((values) => {
//                 const { id, title, img, durationhrs, durationmins, reviews } = values;
//                 return (
//                   <div
//                     className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border rounded-md mb-4 transition-transform transform hover:-translate-y-4"
//                     key={id}
//                   >
//                     <div className="card h-full flex flex-col">
//                       <img
//                         src={img}
//                         className="w-full h-44 object-contain"
//                         alt={title}
//                       />
//                       <div className="card-body p-4 flex flex-col flex-grow">
//                         <h5 className="card-title text-lg font-bold">
//                           {title}
//                         </h5>
//                         <h6 className="text-gray-600 text-sm font-normal">
//                           {durationhrs} hours {durationmins} minutes
//                         </h6>
//                         <div className="review mt-2">
//                           <p className="text-gray-600 text-sm font-normal">{reviews} Reviews</p>
//                         </div>
//                           <Link to='/enroll'>
//                         <div className="mt-auto flex justify-center items-center">
//                           <button className="bg-yellow-500 w-2/3 rounded-md">
//                             Enroll now
//                           </button>
//                         </div>
//                           </Link>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllCourses;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/instructor/getallcourses', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => setCourses(response.data))
        .catch(error => console.error('Error fetching courses:', error));
    }, []);

    const handleDelete = (id) => {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:8080/instructor/deletecourse/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => setCourses(courses.filter(course => course.id !== id)))
        .catch(error => console.error('Error deleting course:', error));
    };

    return (
        <div>
            <h1>Courses</h1>
            <Link to="/courses/add">Add Course</Link>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.title}
                        <button onClick={() => handleDelete(course.id)}>Delete</button>
                        <Link to={`/courses/edit/${course.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllCourses;
