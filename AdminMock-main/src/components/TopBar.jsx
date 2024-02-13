import React from 'react'
import "../css/TopBar.css";

const TopBar = () => {
  return (
    <div>
        <div className='page-title-container'>
            <p className='page-title'>
                Dashboard
            </p>
            <div className='page-date'>
               <p>12th Feb 2024</p> 
            </div>
            <div className="admin-profile-container">
              <a className="profile-settings" href="#">
                <img
                  className="admin-profile"
                  src="src/assets/SatoruGojo.jpg"
                  alt="Profile"
                />
                <p className="admin-name">Caloy Skie</p>
              </a>
              <p className="admin-position">Administrator</p>
            </div>
        </div>
    </div>
  )
}

export default TopBar