import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesDetails from './CoursesDetails';
import CoursesPage from './CoursesPage';
import Navbar from './Navbar';
const Navigator = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<CoursesPage />} />
                    <Route path='/coursesDetails' element={<CoursesDetails />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navigator