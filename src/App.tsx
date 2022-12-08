import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { Search } from './components/Search';
import { Main } from './Main';

export function App() {
  // const [products, setProducts] = useState<Product[]>([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />}/>
          <Route path='search' element={<Search />}/>
          <Route path='order' element={<Orders />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
