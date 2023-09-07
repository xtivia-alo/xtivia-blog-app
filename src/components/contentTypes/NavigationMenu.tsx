'use client';

import { useEffect, useContext } from 'react';
import NavigationItem from './NavigationItem';
import { EntryFieldTypes } from 'contentful';
import Icon from '@mdi/react';
import { mdiMenu, mdiDotsVertical } from '@mdi/js';
import {
  TypeImageWithFocalPointFields,
  TypeNavigationMenuFields,
  TypeNavigationItemSkeleton,
} from '@/lib/generated-types';
import ImageWithFocalPoint from './ImageWithFocalPoint';
import { AppContext, AppContextType } from '@/providers/AppContextProvider';

interface INavMenuProps {
  maxWidth: EntryFieldTypes.Integer;
  entry: TypeNavigationMenuFields;
  logoEntry: TypeImageWithFocalPointFields;
  type: 'Mobile' | 'Desktop';
  handleClick?: () => void;
}

function DesktopNavbar({ maxWidth, entry, logoEntry, type }: INavMenuProps) {
  interface INavigationItems
    extends Array<any>,
      EntryFieldTypes.Array<
        EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>
      > {}

  return (
    <nav
      style={{ maxWidth: ` ${maxWidth}px` }}
      className='m-auto px-6 py-2 font-black'
    >
      <ul className='flex flex-row text-white gap-10 text-xs my-2'>
        {(entry.navigationItems as INavigationItems).map((ele, idx) => {
          const entry = ele.fields;
          return <NavigationItem key={idx} entry={entry} />;
        })}
      </ul>
    </nav>
  );
}

function MobileNavbar({
  maxWidth,
  entry,
  logoEntry,
  type,
  handleClick,
}: INavMenuProps) {
  return (
    <nav
      style={{ maxWidth: ` ${maxWidth}px` }}
      className='flex flex-row items-center justify-between'
    >
      <div className='flex flex-row'>
        <Icon path={mdiMenu} size={1.25} className='m-2' />
        <div className='flex items-center'>
          <ImageWithFocalPoint entry={logoEntry} />
        </div>
      </div>
      <button onClick={handleClick}>
        <Icon path={mdiDotsVertical} size={1.25} className='m-2' />
      </button>
    </nav>
  );
}

function NavigationMenu(props: INavMenuProps) {
  const { type } = props;

  const { showOfficeDetails, setShowOfficeDetails } = useContext(
    AppContext
  ) as AppContextType;

  // useEffect - add an event listener to check width, always show office details when desktop
  useEffect(() => {
    function checkScreenWidth() {
      if (window.innerWidth > 1024) {
        setShowOfficeDetails(true);
      }
    }
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const handleClick = () => {
    setShowOfficeDetails(!showOfficeDetails);
  };
  props = { ...props, handleClick };

  if (type === 'Mobile') {
    return <MobileNavbar {...props} />;
  } else {
    return <DesktopNavbar {...props} />;
  }
}

export default NavigationMenu;
