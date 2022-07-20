import React from 'react';
import { GlobalStorage } from './GlobalContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestCart from './pages/TestCart';
import { TestPayment } from './pages/TestPayment';
import { TestSucess } from './pages/TestSucess';
import './styles.css';

export const App = () => {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TestCart />} />
            <Route path="/payment" element={<TestPayment />} />
            <Route path="/sucess" element={<TestSucess />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
};
