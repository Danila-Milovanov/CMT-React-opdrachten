import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
