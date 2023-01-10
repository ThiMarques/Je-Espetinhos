import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Orders } from './components/Orders';
import { Search } from './components/Search';
import { ProductProvider } from './contexts/productContext';
import { Main } from './Main';

export function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route index element={<Main />}/>
            <Route path='search' element={<Search />}/>
            <Route path='order' element={<Orders />}/>
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}
