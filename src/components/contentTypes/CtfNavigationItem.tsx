'use client';

import { useState } from 'react';
import { TypeNavigationItemFields } from '@/lib/generated-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomIcon from '../CustomIcon';

export interface INavMenuItemProps {
  entry: TypeNavigationItemFields;
  rootPath?: string;
  type: 'Mobile' | 'Desktop' | 'Footer';
  idx?: number;
}

function MobileNavigationItem({
  entry,
  type,
  rootPath = '',
  idx,
}: INavMenuItemProps) {
  const { label, slug, children } = entry as any;
  const currentPath = usePathname();
  const linkRoute = `${rootPath}${slug === 'home' ? '' : slug}/`;

  // need to fix - only one submenu should be showing at a time
  const [showSubmenu, setShowSubmenu] = useState(false);

  function handleClick() {
    setShowSubmenu(!showSubmenu);
  }

  return (
    <div className='flex flex-col grow'>
      <div
        className={`flex flex-row justify-between hover:bg-ball-blue hover:text-white my-1 ${
          currentPath === linkRoute && 'bg-ball-blue text-white'
        }`}
      >
        <Link className='p-3 pl-3' href={linkRoute}>
          <span className='block m-auto'>{label}</span>
        </Link>
        {children?.length > 0 && (
          <button onClick={handleClick} className='px-3'>
            <CustomIcon width={24} height={24} path='mdi:chevron-down' />
          </button>
        )}
      </div>
      {children?.length > 0 && showSubmenu && (
        <ul className='flex flex-col'>
          {children.map((ele: any, idx: any) => {
            return (
              <li className='ml-2' key={idx}>
                <CtfNavigationItem
                  idx={idx}
                  entry={ele.fields}
                  type={type}
                  rootPath={linkRoute}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function DesktopNavigationItem({
  entry,
  type,
  rootPath = '',
  idx,
}: INavMenuItemProps) {
  const { label, slug, children } = entry as any;

  const currentPath = usePathname();
  const linkRoute = `${rootPath}${slug === 'home' ? '' : slug}/`;

  const handleMouseEnter = () => {
    const element = document.getElementById(
      `desktop-nav-dropdown-chevron-${idx}`
    );
    element?.classList.add('animate-half-rotate-cw');
    element?.classList.remove('animate-half-rotate-ccw');
  };

  const handleMouseLeave = () => {
    const element = document.getElementById(
      `desktop-nav-dropdown-chevron-${idx}`
    );
    element?.classList.add('animate-half-rotate-ccw');
    element?.classList.remove('animate-half-rotate-cw');
  };

  return (
    <>
      <div className='group relative flex items-center'>
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`py-4 pl-4 hover:text-picton-blue ${
            currentPath === linkRoute && 'text-picton-blue'
          }`}
          href={linkRoute}
        >
          <span className='block m-auto'>{label}</span>
          {children?.length > 0 && (
            <div id={`desktop-nav-dropdown-chevron-${idx}`}>
              <CustomIcon
                color='#229dd1'
                width={18}
                height={18}
                path='mdi:chevron-down'
              />
            </div>
          )}
        </Link>
        {children?.length > 0 && (
          <ul className='hidden group-hover:flex flex-col absolute top-12 bg-white text-gray-500 font-normal z-10 w-[220px]'>
            {children?.map((ele: any, idx: any) => {
              return (
                <li
                  key={idx}
                  className='border-l border-r border-t last-of-type:border-b border-gray-200'
                >
                  <CtfNavigationItem
                    idx={idx}
                    entry={ele.fields}
                    type={type}
                    rootPath={linkRoute}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

function FooterNavigationItem({
  entry,
  type,
  rootPath = '',
  idx,
}: INavMenuItemProps) {
  const { label, slug } = entry as any;

  const linkRoute = `${rootPath}${slug === 'home' ? '' : slug}/`;

  return (
    <>
      <div>
        <Link className='hover:text-picton-blue' href={linkRoute}>
          <span className='block m-auto'>{label}</span>
        </Link>
      </div>
    </>
  );
}

export default function CtfNavigationItem({
  entry,
  type,
  idx,
}: INavMenuItemProps) {
  if (type === 'Mobile') {
    return <MobileNavigationItem idx={idx} entry={entry} type={type} />;
  } else if (type === 'Desktop') {
    return <DesktopNavigationItem idx={idx} entry={entry} type={type} />;
  } else if (type === 'Footer') {
    return <FooterNavigationItem idx={idx} entry={entry} type={type} />;
  } else {
    return null;
  }
}
