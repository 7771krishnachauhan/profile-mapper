// src/components/GoogleMapComponent/GoogleMapComponent.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './GoogleMapComponent.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const GoogleMapComponent = ({ position, name }) => {
  const [selected, setSelected] = useState(false);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBjSGGrnYM4saznGjjzA0XRggGDW7wHHEI"> {/* Replace with your API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={13}
      >
        <Marker
          position={position}
          onClick={() => setSelected(true)}
        />
        {selected && (
          <InfoWindow
            position={position}
            onCloseClick={() => setSelected(false)}
          >
            <div>
              <h3>{name}'s Location</h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
