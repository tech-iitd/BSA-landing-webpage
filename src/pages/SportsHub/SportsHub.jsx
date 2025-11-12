import React from 'react';
import './SportsHub.css';

const SportsHub = () => {
  return (
    <div className='sportshub-container'>
      {/* Animated Background */}
      <div className='sportshub-bg-pattern'></div>
      <div className='sportshub-circle sportshub-circle-1'></div>
      <div className='sportshub-circle sportshub-circle-2'></div>
      <div className='sportshub-circle sportshub-circle-3'></div>

      <div className='sportshub-content'>
        <div className='sportshub-card'>
          <h1 className='sportshub-title'>SportsHub</h1>
          <div className='sportshub-status'>Under Development</div>

          {/* Description */}
          <p className='sportshub-description'>
            Under Development
SportsHub will be the online platform for sports-related registration and booking portal.  
          </p>

          {/* Features */}
          <div className='sportshub-features'>
            <div className='sportshub-feature'>
              <div className='sportshub-feature-icon'>📅</div>
              <div className='sportshub-feature-text'>Easy Booking</div>
            </div>
            <div className='sportshub-feature'>
              <div className='sportshub-feature-icon'>⚡</div>
              <div className='sportshub-feature-text'>Instant Registration</div>
            </div>
            <div className='sportshub-feature'>
              <div className='sportshub-feature-icon'>🎯</div>
              <div className='sportshub-feature-text'>Multiple Sports</div>
            </div>
          </div>

          {/* Loading Animation */}
          <div className='sportshub-loader'>
            <div className='sportshub-dot'></div>
            <div className='sportshub-dot'></div>
            <div className='sportshub-dot'></div>
          </div>

          {/* Footer */}
          <p className='sportshub-footer'>
            Coming Soon • Stay Tuned for Updates
          </p>
        </div>
      </div>
    </div>
  );
}

export default SportsHub;