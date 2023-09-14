'use client';

import { useEffect, useContext } from 'react';
import NavigationMenu from './CtfNavigationMenu';
import AddressCards from '../AddressCards';
import CtfImageWithFocalPoint from './CtfImageWithFocalPoint';
import { TypeHeaderFields, TypeCardSkeleton } from '@/lib/generated-types';
import { EntryFieldTypes } from 'contentful';
import { AppContext, AppContextType } from '@/providers/AppContextProvider';
import { desktopWidth } from '../../constants';

export default function CtfHeader({ entry }: { entry: TypeHeaderFields }) {
  const { logo, setOfCards, navigationMenu, maxWidth, contentMaxWidth } = entry;

  const {
    isDesktop,
    setIsDesktop,
    mobileNavHeight,
    setMobileNavHeight,
    showSidebar,
    setShowSidebar,
    showOfficeDetails,
    setShowOfficeDetails,
  } = useContext(AppContext) as AppContextType;

  // useEffect - add an event listener to check width, always show office details when desktop
  useEffect(() => {
    function checkScreenWidth() {
      if (window.innerWidth <= desktopWidth) {
        setIsDesktop(false);
        setShowOfficeDetails(false);
        setMobileNavHeight(
          document.getElementById('mobileNav')?.offsetHeight
            ? (document.getElementById('mobileNav')?.offsetHeight as number)
            : 0
        );
      }

      if (window.innerWidth > desktopWidth) {
        // on desktop resize - always hide the sidebar, always hide office details
        setIsDesktop(true);
        setShowSidebar(false);
        setShowOfficeDetails(true);
        setMobileNavHeight(
          document.getElementById('mobileNav')?.offsetHeight
            ? (document.getElementById('mobileNav')?.offsetHeight as number)
            : 0
        );
      }
    }
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return (
    <header className='w-full z-50 absolute top-0 left-0 lg:static'>
      <div
        style={{
          maxWidth: `${maxWidth}px`,
        }}
        className='h-full w-full'
      >
        {!isDesktop && (
          <NavigationMenu
            contentMaxWidth={contentMaxWidth}
            entry={(navigationMenu as any).fields}
            logoEntry={(logo as any).fields}
            type='Mobile'
          />
        )}
        <div
          id='header-contact-info'
          className='bg-white w-full hidden lg:block'
        >
          <div
            style={{ maxWidth: `${contentMaxWidth}px` }}
            className='flex flex-row space-between m-auto pt-7 pb-5 px-4'
          >
            <div className='hidden lg:block h-full my-auto'>
              <CtfImageWithFocalPoint entry={(logo as any).fields} />
            </div>
            <ul className='grow flex flex-row gap-x-10 space-between flex-wrap justify-center lg:justify-end'>
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
            <div className='w-full bg-outer-space'>
              <NavigationMenu
                contentMaxWidth={contentMaxWidth}
                entry={(navigationMenu as any).fields}
                logoEntry={(logo as any).fields}
                type='Desktop'
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
