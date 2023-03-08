import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Insurance from './Components/Insurance'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/bulletins" element={<h1>Bulletins Page</h1>} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<h1>404 Not Found!!</h1>} />
            </Routes>
        </div>
    )
}
export default App
