import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import './index.css';

const UserProfile = () => {
  return (
    <div className="userProfile">
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <Avatar />
      </IconButton>
    </div>
  );
};

export default UserProfile;
