// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '../../components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
// import { Input } from '../../components/ui/input';
// import { Label } from '../../components/ui/label';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (email === 'admin@skct.edu.in') {
//             navigate('/admin/dashboard');
//         } else {
//             navigate('/dashboard');
//         }
//     };

//     return (
//         <div className='h-full w-full flex justify-center items-center'>
//             <Card className="w-1/4">
//                 <CardHeader className="space-y-1">
//                     <CardTitle className="text-2xl">Login</CardTitle>
//                     <CardDescription>
//                         Enter your email below to login
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent className="grid gap-4">
//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <span className="w-full border-t" />
//                         </div>
//                     </div>
//                     <form onSubmit={handleLogin} className="grid gap-4">
//                         <div className="grid gap-2">
//                             <Label htmlFor="email">Email</Label>
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 placeholder="user@skct.edu.in"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="grid gap-2">
//                             <Label htmlFor="password">Password</Label>
//                             <Input
//                                 id="password"
//                                 type="password"
//                                 placeholder="******"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <CardFooter className="grid gap-4">
//                             <Button type="submit" className="w-full">Login</Button>
//                             <div className="flex justify-center items-center">
//                                 <span>Don't have an account? <Link className="text-teal-600" to="/register">Register</Link></span>
//                             </div>
//                         </CardFooter>
//                     </form>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password });
      const { token, role } = response.data;

      // Save the token in local storage
      localStorage.setItem('token', token);

      // Navigate based on the role
      if (role === 'USER') {
        navigate('/dashboard');
      } else if (role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || 'Please try again.'));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
