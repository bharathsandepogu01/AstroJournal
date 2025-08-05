import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ZODIAC_SIGNS } from '@utils/constants';

interface ZodiacContextType {
  selectedZodiac: string;
  setSelectedZodiac: (sign: string) => void;
  selectedZodiacData: (typeof ZODIAC_SIGNS)[0] | null;
}

const ZodiacContext = createContext<ZodiacContextType | undefined>(undefined);

export const useZodiac = () => {
  const context = useContext(ZodiacContext);
  if (!context) {
    throw new Error('useZodiac must be used within a ZodiacProvider');
  }
  return context;
};

interface ZodiacProviderProps {
  children: ReactNode;
}

export const ZodiacProvider: React.FC<ZodiacProviderProps> = ({ children }) => {
  const [selectedZodiac, setSelectedZodiac] = useState('aries');

  const selectedZodiacData =
    ZODIAC_SIGNS.find(sign => sign.sign === selectedZodiac) || null;

  const value: ZodiacContextType = {
    selectedZodiac,
    setSelectedZodiac,
    selectedZodiacData,
  };

  return (
    <ZodiacContext.Provider value={value}>{children}</ZodiacContext.Provider>
  );
};
