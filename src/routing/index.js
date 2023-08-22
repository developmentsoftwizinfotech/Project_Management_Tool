import React from 'react'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Admin/Dashboard'
import Team from '../components/Admin/Team'
import Project from '../components/Admin/Project'
import EmployeeProfile from '../components/Admin/Team/EmployeeProfile'
import ProjectDetail from '../components/Admin/Project/ProjectDetail'
import AddProjects from '../components/Admin/Project/AddProjects'
import User from '../pages/User'
import HomePage from '../components/User/HomePage'
import Profile from '../components/User/profile'
import Tasks from '../components/User/tasks'
import Report from '../components/Admin/Report'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <Login /> } />

            <Route path='/' element={ <Admin /> } >
              <Route path='/dashboard' element={<Dashboard /> } />
              <Route path='/team' element={<Team /> } />
              <Route path='/project' element={<Project /> } />
              <Route path='/project/:id' element={<ProjectDetail /> } />
              <Route path='/team/:id' element={<EmployeeProfile /> } />
              <Route path='/addproject' element={<AddProjects /> } />
              <Route path='/report' element={<Report /> } />
            </Route>

            <Route path='/' element={<User /> }>
              <Route path='/home' element={<HomePage /> } />
              <Route path='/profile' element={<Profile /> } />
              <Route path='/tasks' element={<Tasks /> } />
            </Route>
        </Routes>
    </>
  )
}

export default Routing