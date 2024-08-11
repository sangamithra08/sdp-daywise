
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import Teacher from './pages/Admin/Teacher'
import Course from './pages/Admin/Course'
import Student from './pages/Admin/Student'
import Support from './pages/Admin/Support'
import Setting from './pages/Admin/Setting'
import AllCourses from './pages/Shared/AllCourses'
import Enroll from './pages/Shared/Enroll'
import CourseForm from './pages/Shared/trial/CourseForm'
import ListLearningMaterials from './pages/Shared/trial/ListLearningMaterials'
import MaterialForm from './pages/Shared/trial/MaterialForm'
import ListAssignments from './pages/Shared/trial/ListAssignments'
import AssignmentForm from './pages/Shared/trial/AssignmentForm'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/courses' element={<AllCourses />} />
                         <Route path="/courses/add" element={<CourseForm />} />
                <Route path="/courses/edit/:id" element={<CourseForm />} />
                <Route path="/materials" element={<ListLearningMaterials />} />
                <Route path="/materials/add" element={<MaterialForm />} />
                <Route path="/materials/edit/:id" element={<MaterialForm />} />
                <Route path="/assignments" element={<ListAssignments />} />
                <Route path="/assignments/add" element={<AssignmentForm />} />
                <Route path="/assignments/edit/:id" element={<AssignmentForm />} />
            
                        <Route path='/enroll' element={<Enroll />} />

                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>
                    
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/teacher' element={<Teacher />} />
                        <Route path='/admin/course' element={<Course />} />
                        <Route path='/admin/student' element={<Student />} />
                        <Route path='/admin/support' element={<Support />} />
                        <Route path='/admin/setting' element={<Setting />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App