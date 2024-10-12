// src/components/ProfileList/ProfileList.js
import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileList.css';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <Link to={`/profile/${profile.id}`} key={profile.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ProfileCard profile={profile} />
        </Link>
      ))}
    </div>
  );
};

export default ProfileList;
