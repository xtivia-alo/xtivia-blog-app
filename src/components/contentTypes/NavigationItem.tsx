import { TypeNavigationItemFields } from '@/lib/generated-types';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { usePathname } from 'next/navigation';

function NavigationItem({ entry }: { entry: TypeNavigationItemFields }) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <li>
      <Link href={`/${(entry as any).slug}`}>
        <span className='block m-auto'>{(entry as any).label}</span>
        <Icon path={mdiChevronDown} size={1} />
      </Link>
    </li>
  );
}

export default NavigationItem;
