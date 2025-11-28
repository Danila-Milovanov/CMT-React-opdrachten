import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animals from '../animals.js';

const AnimalDetail = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [animalList, setAnimalsList] = useState(animals);
   const animal = animalList.find(p => p.id === Number(animalId));

  if (!animal) {
    return <div>Animal niet gevonden!</div>;
  }

  return (
    <section>
      <button onClick={() => navigate(`/animals/${animalId}`)}>
        ← Terug naar home
      </button>
      
      <h1>{animal.name}</h1>
      <p>Beschrijving: {animal.description}</p>
    </section>
  );
};

export default AnimalDetail;