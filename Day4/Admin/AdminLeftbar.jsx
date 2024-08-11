// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { LayoutDashboard, Cog, Mail, Users, Power, BookOpenText , Settings , BadgeHelp, TrainFrontTunnel} from 'lucide-react'
// import { Button } from '../ui/button'
// const AdminLeftbar = () => {

//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         }
//         , {
//             title: 'Students',
//             link: '/admin/student',
//             icon: Users
//         }
//         , {
//             title: 'Professors',
//             link: '/admin/teacher',
//             icon: TrainFrontTunnel
//         }
//         , {
//             title: 'Course',
//             link: '/admin/course',
//             icon: BookOpenText
//         }
//         , {
//             title: 'Support',
//             link: '/admin/support',
//             icon: BadgeHelp
//         }
//     ]
//     return (
//         <div className=' h-screen w-1/7 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
//             <div className='h-[5%] text-primary font-bold text-2xl flex justify-center items-center'>
//                 SKCT
//             </div>
//             <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link}  className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
//                             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                                 {React.createElement(data.icon, { size: 20 })}
//                                 {data.title}
//                             </span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
//                 <Button className='p-5  bg-red-500/5 hover:bg-red-500/10 font-bold  w-full'>
//                     <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
//                         <Power size={30} /><p className='text-xl'>Logout</p> 
//                     </span>
//                 </Button>
//             </div>

//         </div>
//     )
// }

// export default AdminLeftbar



import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, TrainFrontTunnel, BookOpenText, BadgeHelp, Power } from 'lucide-react';
import { Button } from '../ui/button';
import { logout } from '../../services/authService'; // Import the logout function

const AdminLeftbar = () => {
  
    const handleLogout = async () => {
        try {
            await logout(); // Call the logout function from authService
            window.location.href = '/login'; // Redirect after successful logout
        } catch (error) {
            alert('Logout failed: ' + (error.response?.data?.message || 'Please try again.'));
        }
    };

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Students',
            link: '/admin/student',
            icon: Users
        },
        {
            title: 'Professors',
            link: '/admin/teacher',
            icon: TrainFrontTunnel
        },
        {
            title: 'Course',
            link: '/admin/course',
            icon: BookOpenText
        },
        {
            title: 'Support',
            link: '/admin/support',
            icon: BadgeHelp
        }
    ];

    return (
        <div className='h-screen w-1/7 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
            <div className='h-[5%] text-primary font-bold text-2xl flex justify-center items-center'>
                SKCT
            </div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
                {AdminLinks.map((data, index) => (
                    <NavLink key={index} to={data.link} className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
                        <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                            {React.createElement(data.icon, { size: 20 })}
                            {data.title}
                        </span>
                    </NavLink>
                ))}
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button
                    className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'
                    onClick={handleLogout} // Attach the logout function
                >
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={30} />
                        <p className='text-xl'>Logout</p>
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default AdminLeftbar;
