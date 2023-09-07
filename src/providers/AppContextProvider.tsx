'use client';

import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export interface BookType {
  id: string;
  bookId: string;
  createDate: string;
  publishYear: number;
  title: string;
  author: string;
  description: string;
}

export interface AppContextType {
  showOfficeDetails: boolean;
  setShowOfficeDetails: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | {}>({});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // show menu with office details
  const [showOfficeDetails, setShowOfficeDetails] = useState(true);

  return (
    <AppContext.Provider
      value={{
        showOfficeDetails,
        setShowOfficeDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
