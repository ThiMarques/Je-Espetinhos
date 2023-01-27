import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from './Main';
import { Orders } from './components/Orders';
import { Search } from './components/Search';

import { ProductProvider } from './contexts/productContext';
import { AddressProvider } from './contexts/addressContext';

export function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <AddressProvider>
            <Routes>
              <Route index element={<Main />}/>
              <Route path='search' element={<Search />}/>
              <Route path='order' element={<Orders />}/>
            </Routes>
          </AddressProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}
