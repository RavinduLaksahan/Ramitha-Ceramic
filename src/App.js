import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <Router>
      <div>
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
