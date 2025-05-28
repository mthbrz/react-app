import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Bannerapartment from '../components/bannerapartment';
import Descriptionapartment from '../components/descriptionapartment';
import Descriptionbar from '../components/descriptionbar';
import '../components/descriptionbar-container.css';

function Apartment() {
  const { id } = useParams();
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    fetch("/file.json") 
      .then((res) => res.json())
      .then((apartments) => {
        const apartment = apartments.find((apt) => apt.id === id);
        if (apartment) {
          setSelectedApartment(apartment);
        } else {
          setIsNotFound(true); 
        }
      })
      .catch((err) => {
        console.error(err);
        setIsNotFound(true); 
      });
  }, [id]);

  if (isNotFound) {
    return <Navigate to="/404" replace />;
  }

  if (!selectedApartment) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Bannerapartment pictures={selectedApartment.pictures} />
      <Descriptionapartment 
        title={selectedApartment.title} 
        location={selectedApartment.location}
        tags={selectedApartment.tags}
        host={selectedApartment.host}
        rating={selectedApartment.rating}
      />  
      <div className='descriptionbar-container'>
        <Descriptionbar title="Description" content={selectedApartment.description} />  
        <Descriptionbar 
          title="Equipements" 
          content={selectedApartment.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />  
      </div>
    </div>
  );
}

export default Apartment;
