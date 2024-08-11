// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, BookOpenText, Power, Home } from 'lucide-react';
// import { Button } from '../ui/button';

// const UserLeftbar = () => {
//     const UserLinks = [
//         {
//             title: 'Dashboard',
//             link: '/dashboard',
//             icon: LayoutDashboard,
//         },
//         {
//             title: 'Home',
//             link: '/',
//             icon: Home,
//         },
//         {
//             title: 'Courses',
//             link: '/courses',
//             icon: BookOpenText,
//         },
//     ];

//     return (
//         <div className="h-screen w-1/5 flex flex-col items-center shadow-sm shadow-primary pt-10 ">
//             <div className="h-16 text-primary font-bold text-2xl flex justify-center items-center mb-10">
//                 SKCT
//             </div>
//             <div className="flex-1 w-full flex flex-col items-center gap-4">
//                 {UserLinks.map((data, index) => (
//                     <NavLink
//                         key={index}
//                         to={data.link}
//                         className="p-5 w-full flex items-center justify-start gap-2 bg-primary/5 hover:bg-primary/10 font-bold rounded-lg transition-all duration-300"
//                     >
//                         {React.createElement(data.icon, { size: 20 })}
//                         <span>{data.title}</span>
//                     </NavLink>
//                 ))}
//             </div>
//             <div className="w-full p-5">
//                 <Button className="w-full p-4 bg-red-500/5 hover:bg-red-500/10 font-bold text-red-500 rounded-lg transition-all duration-300">
//                     <span className="flex items-center justify-start gap-2">
//                         <Power size={20} />
//                         <p className="text-xl">Logout</p>
//                     </span>
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default UserLeftbar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpenText, Power, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { logout } from '../../services/authService'; // Import the logout function

const UserLeftbar = () => {
    const UserLinks = [
        {
            title: 'Dashboard',
            link: '/dashboard',
            icon: LayoutDashboard,
        },
        {
            title: 'Home',
            link: '/',
            icon: Home,
        },
        {
            title: 'Courses',
            link: '/courses',
            icon: BookOpenText,
        },
    ];

    const handleLogout = async () => {
        try {
            await logout();
            // Redirect user after logout
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout failed:', error);
            alert('Logout failed. Please try again.');
        }
    };

    return (
        <div className="h-screen w-1/5 flex flex-col items-center shadow-sm shadow-primary pt-10 ">
            <div className="h-16 text-primary font-bold text-2xl flex justify-center items-center mb-10">
                SKCT
            </div>
            <div className="flex-1 w-full flex flex-col items-center gap-4">
                {UserLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className="p-5 w-full flex items-center justify-start gap-2 bg-primary/5 hover:bg-primary/10 font-bold rounded-lg transition-all duration-300"
                    >
                        {React.createElement(data.icon, { size: 20 })}
                        <span>{data.title}</span>
                    </NavLink>
                ))}
            </div>
            <div className="w-full p-5">
                <Button
                    className="w-full p-4 bg-red-500/5 hover:bg-red-500/10 font-bold text-red-500 rounded-lg transition-all duration-300"
                    onClick={handleLogout} // Attach the logout handler
                >
                    <span className="flex items-center justify-start gap-2">
                        <Power size={20} />
                        <p className="text-xl">Logout</p>
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default UserLeftbar;
