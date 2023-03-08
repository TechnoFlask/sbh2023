import React from 'react'
import Style from '../Styles/Profile.module.css'
const Profile = () => {
    return (
        <div>
            <h1>Medical Dashboard</h1>
            <div className="user">
                <div className={Style['profile-pic']}></div>
                <p className="name">Anish Mukherjee</p>
                <div className={Style.progress}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
