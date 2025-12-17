import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Animal from '../components/Animal.jsx';
import animals from '../animals';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);
  const [searchTerm, setSearchTerm] = useState('');

  const goToDetail = (animalId) => {
    navigate(`/animals/${animalId}`);
  }

  const filteredAnimals = animalList.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <input
        type="text"
        placeholder="Search for an animal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      {filteredAnimals.map((animal) => (
        <Animal key={animal.id} animal={animal} onShowDetail={goToDetail} />
      ))}
    </section>
  );
};

export default Home;
