// src/pages/Home.js
import React, { useContext } from 'react';
import { ProfilesContext } from '../context/ProfilesContext';
import ProfileList from '../components/ProfileList/ProfileList';
import SearchBar from '../components/SearchBar/SearchBar';
import './Home.css';

const Home = () => {
  const { profiles, searchTerm, setSearchTerm } = useContext(ProfilesContext);

  return (
    <div className="home">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default Home;
