import { createContext, useContext, useState } from 'react';

// Create the context
export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captainData, setCaptainData] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = async (captainData) => {
    setCaptainData(captainData);
  };

  const value = {
    captainData,
    setCaptainData,
    updateCaptain,
    isloading,
    setIsLoading,
    error,
    setError
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
