import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CarBrand, CatalogBrands, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogBrands />} />
      <Route path="/brand" element={<CarBrand />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
