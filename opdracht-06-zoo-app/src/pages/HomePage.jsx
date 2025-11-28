import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Animal from '../components/Animal.jsx';
import animals from '../animals';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);
  console.log(animals)

  const goToDetail = (animalId) => {
    navigate(`/animals/${animalId}`);
  }

    return(
     <section>
      {animals.map((animal) => (
        <Animal animal={animal} onShowDetail={goToDetail} />
      ))}
     </section>
      
    );
  };

  export default Home;