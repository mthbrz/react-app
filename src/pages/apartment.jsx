import React, { useEffect } from 'react'
import Bannerapartment from '../components/bannerapartment'
import Descriptionapartment from '../components/descriptionapartment'
import Descriptionbar from '../components/descriptionbar'
import { useLocation } from 'react-router-dom'
import '../components/descriptionbar-container.css'
function Apartment() {
  const location= useLocation();
  const [selectedApartment, setSelectedApartment] = React.useState(null);

useEffect(fetchApartmentData, []);

function fetchApartmentData() {
    fetch("file.json")
    .then((res) => res.json())
    .then((apartments) => {
      const apartment=apartments.find((apartment) => apartment.id === location.state.user);
      setSelectedApartment(apartment);
    })
    .catch(console.error);
  }

if (selectedApartment == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Bannerapartment imageUrl={selectedApartment.cover}/>
        <Descriptionapartment 
          title={selectedApartment.title} 
          location={selectedApartment.location}
          tags={selectedApartment.tags}
          host={selectedApartment.host}
          rating={selectedApartment.rating}/>  
          <div className='descriptionbar-container'>
        <Descriptionbar title="Description" content={selectedApartment.description}/>  
        <Descriptionbar title="Equipements" content={selectedApartment.equipments.map((equipment)=>
        <li key={equipment}>{equipment}</li>
        )}/>  
    </div>
    </div>
  )
}

export default Apartment
