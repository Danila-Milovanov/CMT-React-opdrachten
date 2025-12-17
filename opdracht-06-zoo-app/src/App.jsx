import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import AnimalDetail from './pages/DetailPage.jsx';
import './App.css';
import animals from './animals.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals/:animalId" element={<AnimalDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
