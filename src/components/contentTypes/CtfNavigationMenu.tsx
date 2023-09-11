import { useContext } from 'react';
import CtfImageWithFocalPoint from './CtfImageWithFocalPoint';
import CtfNavigationItem from './CtfNavigationItem';
import { EntryFieldTypes } from 'contentful';
import {
  TypeImageWithFocalPointFields,
  TypeNavigationMenuFields,
  TypeNavigationItemSkeleton,
} from '@/lib/generated-types';
import { AppContext, AppContextType } from '@/providers/AppContextProvider';
import CustomIcon from '../CustomIcon';

interface INavMenuProps {
  maxWidth: EntryFieldTypes.Integer;
  entry: TypeNavigationMenuFields;
  logoEntry: TypeImageWithFocalPointFields;
  type: 'Mobile' | 'Desktop';
}

interface INavigationItems
  extends Array<any>,
    EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>
    > {}

function DesktopNavbar({ maxWidth, entry }: INavMenuProps) {
  return (
    <nav
      style={{ maxWidth: ` ${maxWidth}px` }}
      className='m-auto px-6 font-black'
    >
      {(entry.navigationItems as INavigationItems).length > 0 && (
        <ul className='flex flex-row text-white gap-10 text-xs'>
          {(entry.navigationItems as INavigationItems).map((ele, idx) => {
            return (
              <li key={idx} className='flex items-center'>
                <CtfNavigationItem entry={ele.fields} type='Desktop' />
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

function MobileNavbar({ maxWidth, entry, logoEntry }: INavMenuProps) {
  const {
    showSidebar,
    setShowSidebar,
    showOfficeDetails,
    setShowOfficeDetails,
  } = useContext(AppContext) as AppContextType;

  // handler functions to toggle sidebar/office info in mobile
  function toggleSidebar() {
    if (!showSidebar && showOfficeDetails) {
      setShowOfficeDetails(!setShowOfficeDetails);
    }
    setShowSidebar(!showSidebar);
  }

  function toggleOfficeDetails() {
    if (showSidebar && !showOfficeDetails) {
      setShowSidebar(false);
    }
    setShowOfficeDetails(!showOfficeDetails);
  }

  const navHeight = document.getElementById('mobileNav')?.offsetHeight;

  return (
    <>
      <nav
        id='mobileNav'
        style={{ maxWidth: ` ${maxWidth}px` }}
        className='flex flex-row items-center justify-between border-b'
      >
        <div className='flex flex-row'>
          <button className='px-2' onClick={toggleSidebar}>
            <CustomIcon width={32} height={32} path='mdi:hamburger-menu' />
          </button>
          <div className='flex items-center'>
            <CtfImageWithFocalPoint entry={logoEntry} />
          </div>
        </div>
        <button className='px-2' onClick={toggleOfficeDetails}>
          <CustomIcon width={32} height={32} path='mdi:dots-vertical' />
        </button>
      </nav>
      {showSidebar && (
        <div className='flex flex-row'>
          <nav
            style={{ height: `calc(100vh - ${navHeight}px)` }}
            className='bg-white w-[270px] border-r border-grey-500'
          >
            {(entry.navigationItems as INavigationItems).length > 0 && (
              <ul className='flex flex-col text-ball-blue tracking-tight font-extrabold my-2'>
                {(entry.navigationItems as INavigationItems).map((ele, idx) => {
                  return (
                    <li key={idx} className='flex items-center'>
                      <CtfNavigationItem entry={ele.fields} type='Mobile' />
                    </li>
                  );
                })}
              </ul>
            )}
          </nav>
          {/* overlay to click out of sidebar */}
          <div
            className='bg-gray-100 opacity-20 grow'
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </>
  );
}

function NavigationMenu(props: INavMenuProps) {
  const { type } = props;

  if (type === 'Mobile') {
    return <MobileNavbar {...props} />;
  } else {
    return <DesktopNavbar {...props} />;
  }
}

export default NavigationMenu;
