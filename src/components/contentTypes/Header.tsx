'use client';

import { useContext } from 'react';
import NavigationMenu from './NavigationMenu';
import SetOfCard from './SetOfCard';
import ImageWithFocalPoint from './ImageWithFocalPoint';
import { TypeHeaderFields, TypeCardSkeleton } from '@/lib/generated-types';
import { EntryFieldTypes } from 'contentful';
import { AppContext, AppContextType } from '@/providers/AppContextProvider';

export default function Header({ entry }: { entry: TypeHeaderFields }) {
  const { logo, setOfCards, navigationMenu, maxWidth } = entry;

  const { showOfficeDetails, setShowOfficeDetails } = useContext(
    AppContext
  ) as AppContextType;

  return (
    <header className='bg-white w-full absolute top-0 left-0 z-50 lg:static'>
      <div className='border-b w-full lg:hidden'>
        <NavigationMenu
          maxWidth={maxWidth}
          entry={(navigationMenu as any).fields}
          logoEntry={(logo as any).fields}
          type='Mobile'
        />
      </div>
      <div className={`bg-white w-full ${!showOfficeDetails && 'hidden'}`}>
        <div
          style={{ maxWidth: ` ${maxWidth}px` }}
          className={`flex flex-row space-between m-auto px-6 py-2 `}
        >
          <div className='items-center hidden lg:flex'>
            <ImageWithFocalPoint entry={(logo as any).fields} />
          </div>
          <ul className='w-full flex flex-row space-between flex-wrap justify-center lg:justify-end'>
            <SetOfCard
              entry={
                setOfCards as EntryFieldTypes.Array<
                  EntryFieldTypes.EntryLink<TypeCardSkeleton>
                >
              }
            />
          </ul>
        </div>
        <div className='w-full bg-black hidden lg:block'>
          <NavigationMenu
            maxWidth={maxWidth}
            entry={(navigationMenu as any).fields}
            logoEntry={(logo as any).fields}
            type='Desktop'
          />
        </div>
      </div>
    </header>
  );
}
