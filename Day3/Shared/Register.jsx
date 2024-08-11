// import { Button } from "../../components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../../components/ui/card";
// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className="h-full w-full flex justify-center items-center  ">
//       <Card className="w-1/4">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Create an account</CardTitle>
//           <CardDescription>
//             Enter your email below to create your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="roll">Rollnumber</Label>
//             <Input id="roll" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="user@skct.edu.in" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               placeholder="******"
//               required
//             />
//           </div>
//         </CardContent>
//         <CardFooter className="grid gap-4">
//           <div className="grid gap-2">
//             <Link to='/'>
//             <Button>Create account</Button></Link>
//           </div>
//           <div className=" flex justify-center items-center">
//             <span>
//               Already have an account ? <Link className="text-teal-600" to="/login">Login</Link>
//             </span>
//           </div>
//         </CardFooter>
//       </Card>
      
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { register } from '../../services/authService';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await register({
        name,
        email,
        password,
        role,
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="INSTRUCTOR">Instructor</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
