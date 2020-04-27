import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardAction = () => {
  return (
    <div>
      <div class='dash-buttons'>
        <Link to='/edit-profile' class='btn btn-light'>
          <i class='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>
        <Link to='/PostForm' class='btn btn-light'>
          <i class='fab fa-black-tie text-primary'></i> Upload Gesture
        </Link>
        <Link to='Dictonary' class='btn btn-light'>
          <i class='fas fa-graduation-cap text-primary'></i> Dictonary{' '}
        </Link>
      </div>
    </div>
  );
};

export default DashboardAction;
