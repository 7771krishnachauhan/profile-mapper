// src/components/ProfileCard/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profile, onSelect }) => {
  return (
    <div className="profile-card" onClick={onSelect}>
      <h3>{profile.name}</h3>
      <p>{profile.email}</p>
      <p>{profile.phone}</p>
    </div>
  );
};

export default ProfileCard;
