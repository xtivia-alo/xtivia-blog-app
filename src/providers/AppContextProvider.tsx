'use client';

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { desktopWidth } from '@/constants';

export interface AppContextType {
  isDesktop: boolean;
  setIsDesktop: Dispatch<SetStateAction<boolean>>;
  mobileNavHeight: number;
  setMobileNavHeight: Dispatch<SetStateAction<number>>;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  activeSubmenu: string;
  setActiveSubmenu: Dispatch<SetStateAction<string>>;
  showOfficeDetails: boolean;
  setShowOfficeDetails: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | {}>({});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // check desktop
  const [isDesktop, setIsDesktop] = useState(true);

  // get height of navbar
  const [mobileNavHeight, setMobileNavHeight] = useState(0);

  // show mobile sidebar
  const [showSidebar, setShowSidebar] = useState(false);
  // active subemnu on mobile sidebar
  const [activeSubmenu, setActiveSubmenu] = useState('');

  // show menu with office details
  const [showOfficeDetails, setShowOfficeDetails] = useState(false);

  // initial state settings based on window size
  useEffect(() => {
    setIsDesktop(window.innerWidth >= desktopWidth);
    setShowOfficeDetails(window.innerWidth >= desktopWidth ? true : false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        mobileNavHeight,
        setMobileNavHeight,
        showSidebar,
        setShowSidebar,
        activeSubmenu,
        setActiveSubmenu,
        showOfficeDetails,
        setShowOfficeDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
