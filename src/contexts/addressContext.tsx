import React, { createContext, useState } from 'react';

export const AddressContext = createContext({});

export function AddressProvider({children}) {
  const [address, setAddress] = useState('');

  function changeAddress() {
    setAddress('');
  }

  return (
    <AddressContext.Provider value={{ address, setAddress, changeAddress  }}>
      {children}
    </AddressContext.Provider>
  );
}

