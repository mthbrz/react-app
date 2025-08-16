import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slider from '../components/jsx/slider.jsx';
import Descriptionapartment from '../components/jsx/descriptionapartment.jsx';
import Collapse from '../components/jsx/collapse.jsx';


function Apartment() {
  const { id } = useParams();
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
  fetch(import.meta.env.BASE_URL + "file.json")
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
      <Slider pictures={selectedApartment.pictures} />
      <Descriptionapartment 
        title={selectedApartment.title} 
        location={selectedApartment.location}
        tags={selectedApartment.tags}
        host={selectedApartment.host}
        rating={selectedApartment.rating}
      />  
      <div className='descriptionbar-container'>
        <Collapse title="Description" content={selectedApartment.description} />  
        <Collapse title="Equipements" content={selectedApartment.equipments}/>  
      </div>
    </div>
  );
}

export default Apartment;
