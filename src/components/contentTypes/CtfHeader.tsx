'use client';

import { useEffect, useContext } from 'react';
import NavigationMenu from './CtfNavigationMenu';
import AddressCards from '../AddressCards';
import ImageWithFocalPoint from './CtfImageWithFocalPoint';
import { TypeHeaderFields, TypeCardSkeleton } from '@/lib/generated-types';
import { EntryFieldTypes } from 'contentful';
import { AppContext, AppContextType } from '@/providers/AppContextProvider';

export default function CtfHeader({ entry }: { entry: TypeHeaderFields }) {
  const { logo, setOfCards, navigationMenu, maxWidth } = entry;

  const {
    isDesktop,
    setIsDesktop,
    showSidebar,
    setShowSidebar,
    showOfficeDetails,
    setShowOfficeDetails,
  } = useContext(AppContext) as AppContextType;

  // useEffect - add an event listener to check width, always show office details when desktop
  useEffect(() => {
    function checkScreenWidth() {
      if (window.innerWidth <= 1024) {
        setIsDesktop(false);
      }

      if (window.innerWidth > 1024) {
        // on desktop resize - always hide the sidebar, always hide office details
        setIsDesktop(true);
        setShowSidebar(false);
        setShowOfficeDetails(true);
      }
    }
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return (
    <header className='bg-white w-full absolute top-0 left-0 z-50 lg:static'>
      {!isDesktop && (
        <NavigationMenu
          maxWidth={maxWidth}
          entry={(navigationMenu as any).fields}
          logoEntry={(logo as any).fields}
          type='Mobile'
        />
      )}
      {showOfficeDetails && (
        <div className='bg-white w-full'>
          <div
            style={{ maxWidth: ` ${maxWidth}px` }}
            className='flex flex-row space-between m-auto px-6 py-2'
          >
            <div className='items-center hidden lg:flex'>
              <ImageWithFocalPoint entry={(logo as any).fields} />
            </div>
            <ul className='w-full flex flex-row space-between flex-wrap justify-center lg:justify-end'>
              <AddressCards
                entry={
                  setOfCards as EntryFieldTypes.Array<
                    EntryFieldTypes.EntryLink<TypeCardSkeleton>
                  >
                }
              />
            </ul>
          </div>
          {isDesktop && (
            <div className='w-full bg-black'>
              <NavigationMenu
                maxWidth={maxWidth}
                entry={(navigationMenu as any).fields}
                logoEntry={(logo as any).fields}
                type='Desktop'
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
}
