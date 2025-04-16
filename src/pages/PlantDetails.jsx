// src/pages/PlantDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import PlantDetail from '../components/plants/PlantDetail';

const PlantDetails = () => {
  const { slug } = useParams();
  
  return (
    <div className="plant-details-page">
      <PlantDetail slug={slug} />
    </div>
  );
};

export default PlantDetails;