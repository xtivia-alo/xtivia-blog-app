'use client';

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

export interface AppContextType {
  isDesktop: boolean;
  setIsDesktop: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  showOfficeDetails: boolean;
  setShowOfficeDetails: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | {}>({});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // check desktop
  const [isDesktop, setIsDesktop] = useState(true);

  // show mobile sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // show menu with office details
  const [showOfficeDetails, setShowOfficeDetails] = useState(false);

  // initial state settings based on window size
  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
    setShowOfficeDetails(window.innerWidth > 1024 ? true : false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        showSidebar,
        setShowSidebar,
        showOfficeDetails,
        setShowOfficeDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
