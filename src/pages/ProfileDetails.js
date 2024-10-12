// src/pages/ProfileDetails.js
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProfilesContext } from '../context/ProfilesContext';
import MapView from '../components/MapView/MapView';
import './ProfileDetails.css';

const ProfileDetails = () => {
  const { id } = useParams();
  const { profiles, setSelectedProfile } = useContext(ProfilesContext);

  const profile = profiles.find(p => p.id === parseInt(id));

  useEffect(() => {
    setSelectedProfile(profile);
  }, [profile, setSelectedProfile]);

  if (!profile) {
    return <div className="profile-details">Profile not found.</div>;
  }

  const { name, email, phone, address } = profile;
  const { street, city, state, zipcode, geo } = address;

  return (
    <div className="profile-details">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p>
        <strong>Address:</strong> {street}, {city}, {state} {zipcode}
      </p>
      <MapView position={{ lat: parseFloat(geo.lat), lng: parseFloat(geo.lng) }} name={name} />
    </div>
  );
};

export default ProfileDetails;
