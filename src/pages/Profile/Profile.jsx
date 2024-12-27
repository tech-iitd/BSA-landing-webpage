import React, { useEffect, useState } from 'react';
import './Profile.css';
const Profile = () => {
  const [user, setUser] = useState(null);

  // Function to get the cookie value by name
  const getCookie = (cookieName) => {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find(row => row.startsWith(`${cookieName}=`));
    return tokenCookie ? tokenCookie.split('=')[1] : null;
  };

  // Function to parse JWT token
  const parseJWT = (token) => {
    const payload = token.split('.')[1]; // JWT format: Header.Payload.Signature
    const decodedPayload = atob(payload); // Decode Base64 payload
    return JSON.parse(decodedPayload); // Parse JSON
  };

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      try {
        const decodedToken = parseJWT(token);
        setUser(decodedToken.user); 
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);


  return (
    <div className='profile'>
      <h1>Profile</h1>
      {user ? (
        <div className='profile-details'>
          <div className='details'>
            <p>
              <strong>Name:</strong> 
            </p>
            <p>
              {user.name}
            </p>
          </div>

          <div className='details'>
          <p>
              <strong>Email:</strong> 
            </p>
            <p>
              {user.email}
            </p>
          </div>

          <div className='details'>
            <p>
              <strong>Hostel:</strong> 
            </p>
            <p>
              {user.hostel}
            </p>
          </div>

          <div className='details'>
            <p>
              <strong>Date of Birth:</strong>
            </p>
            <p>
              {new Date(user.dateOfBirth).toDateString()}
            </p>
          </div>

          <div className='details'>
            <p>
              <strong>Mobile No:</strong>
            </p>
            <p>
              {user.mobileNo}
            </p>
          </div>
        </div>
        
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Profile;
