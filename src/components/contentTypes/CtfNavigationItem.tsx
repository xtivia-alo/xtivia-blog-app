import { useState } from 'react';
import { TypeNavigationItemFields } from '@/lib/generated-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

export interface INavMenuItemProps {
  entry: TypeNavigationItemFields;
  rootPath?: string;
  type?: 'Mobile' | 'Desktop';
}

function MobileNavigationItem({
  entry,
  type,
  rootPath = '',
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
            <Icon path={mdiChevronDown} size={1} />
          </button>
        )}
      </div>
      {children?.length > 0 && showSubmenu && (
        <ul className='flex flex-col'>
          {children.map((ele: any, idx: any) => {
            return (
              <li className='ml-2' key={idx}>
                <CtfNavigationItem
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
}: INavMenuItemProps) {
  const { label, slug, children } = entry as any;

  const currentPath = usePathname();
  const linkRoute = `${rootPath}${slug === 'home' ? '' : slug}/`;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
            <div
              className={
                isHovered ? 'group-hover:animate-half-rotate-cw' : 'false'
              }
            >
              <Icon path={mdiChevronDown} size={1} />
            </div>
          )}
        </Link>
        {children?.length > 0 && (
          <ul className='flex flex-col absolute top-14 bg-white text-gray-500 font-normal z-1 w-[220px] hidden group-hover:block'>
            {children?.map((ele: any, idx: any) => {
              return (
                <li
                  key={idx}
                  className='border-l border-r border-t last-of-type:border-b border-gray-200'
                >
                  <CtfNavigationItem
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

export default function CtfNavigationItem({ entry, type }: INavMenuItemProps) {
  if (type === 'Mobile') {
    return <MobileNavigationItem entry={entry} type={type} />;
  } else {
    return <DesktopNavigationItem entry={entry} type={type} />;
  }
}
