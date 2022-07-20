import React from 'react';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);

  return (
    <GlobalContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </GlobalContext.Provider>
  );
};
