import React from 'react'
import ApartmentCard from '../jsx/apartmentcard.jsx'
import '../css/apartmentcard.css'

function Gallery() {
    const [apartments, setApartments] = React.useState([]);

    React.useEffect(fetchApartments , []);

    function fetchApartments() {    
        fetch("file.json")
        .then((res)=>res.json())
        .then((res)=>setApartments(res))
        .catch(console.error);
}

  return (
    <div className="gallery">

    {apartments.map((apartment) => 
      <ApartmentCard key={apartment.id} id={apartment.id}
      title={apartment.title} imageUrl={apartment.cover}/>
    )}
    </div>
  )
}

export default Gallery



