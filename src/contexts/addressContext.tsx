import React, { createContext, useState } from 'react';

export const AddressContext = createContext({});

export function AddressProvider({children}) {
  const [address, setAddress] = useState('');

  return (
    <AddressContext.Provider value={{ address, setAddress  }}>
      {children}
    </AddressContext.Provider>
  );
}

