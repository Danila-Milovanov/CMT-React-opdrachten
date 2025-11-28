import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Animal from '../components/Animal.jsx';
import animals from '../animals';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);

  const goToDetail = (animalId) => {
    navigate(`/products/${animalId}`);
  };