// UserProfile.jsx
import React from 'react';
import './UserProfile.css';
// import ProfilePic from './path/to/profile-pic.jpg'; // Adjust the path to your profile picture

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-header">
        {/* <img src={ProfilePic} alt="User Profile" className="profile-pic" /> */}
        <h1 className="user-name">John Doe</h1>
        <p className="user-title">Professional Plumber</p>
      </div>
      <div className="profile-details">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h2>Contact Information</h2>
        <p>Email: john.doe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Plumbing</li>
          <li>Pipe Installation</li>
          <li>Leak Repair</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;