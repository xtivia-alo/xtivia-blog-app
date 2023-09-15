import { useEffect, useContext } from 'react';
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
  contentMaxWidth: EntryFieldTypes.Integer;
  entry: TypeNavigationMenuFields;
  logoEntry: TypeImageWithFocalPointFields;
  type: 'Mobile' | 'Desktop';
}

interface INavigationItems
  extends Array<any>,
    EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>
    > {}

function DesktopNavbar({ contentMaxWidth, entry }: INavMenuProps) {
  return (
    <nav
      style={{ maxWidth: ` ${contentMaxWidth}px` }}
      className='m-auto px-4 font-black'
    >
      {(entry.navigationItems as INavigationItems).length > 0 && (
        <ul className='flex flex-row text-white gap-11 py-4'>
          {(entry.navigationItems as INavigationItems).map((ele, idx) => {
            return (
              <li key={idx} className='flex items-center'>
                <CtfNavigationItem
                  idx={idx}
                  entry={ele.fields}
                  type='Desktop'
                />
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

function MobileNavbar({ contentMaxWidth, entry, logoEntry }: INavMenuProps) {
  const {
    mobileNavHeight,
    setMobileNavHeight,
    showSidebar,
    setShowSidebar,
    showOfficeDetails,
    setShowOfficeDetails,
  } = useContext(AppContext) as AppContextType;

  useEffect(() => {
    const initialHeight = document.getElementById('mobileNav')?.offsetHeight;
    setMobileNavHeight(initialHeight ? (initialHeight as number) : 0);
  }, []);

  // handler functions to toggle sidebar/office info in mobile
  function toggleSidebar() {
    if (!showSidebar && showOfficeDetails) {
      setShowOfficeDetails(!setShowOfficeDetails);
      document.getElementById('header-contact-info')?.classList.add('hidden');
    }
    setShowSidebar(!showSidebar);
  }

  function toggleOfficeDetails() {
    if (showSidebar && !showOfficeDetails) {
      setShowSidebar(false);
    }
    setShowOfficeDetails(!showOfficeDetails);

    const contactInfoEle = document.getElementById('header-contact-info');

    if (contactInfoEle?.classList.contains('hidden')) {
      document
        .getElementById('header-contact-info')
        ?.classList.remove('hidden');
    } else {
      document.getElementById('header-contact-info')?.classList.add('hidden');
    }
  }

  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const windowHeight = window.innerHeight;

  // calc maxHeight of document scroll height, or height of the window (so that the sidebar is sized correctly)
  const maxHeight = Math.max(
    height - (mobileNavHeight ? mobileNavHeight : 0),
    windowHeight - (mobileNavHeight ? mobileNavHeight : 0)
  );

  return (
    <>
      <nav
        id='mobileNav'
        style={{ maxWidth: ` ${contentMaxWidth}px` }}
        className='flex flex-row p-1 items-center justify-between border-b bg-white'
      >
        <div className='flex flex-row'>
          <button className='px-2' onClick={toggleSidebar}>
            <CustomIcon width={32} height={32} path='mdi:hamburger-menu' />
          </button>
          <div className='flex items-center'>
            <CtfImageWithFocalPoint entry={logoEntry} />
          </div>
        </div>
        <button onClick={toggleOfficeDetails}>
          <CustomIcon width={32} height={32} path='mdi:dots-vertical' />
        </button>
      </nav>
      {showSidebar && (
        <div className='flex flex-row'>
          <nav
            style={{ height: `${maxHeight}px` }}
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
            className='bg-gray-500 opacity-10 grow'
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
