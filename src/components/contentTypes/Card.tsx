import XIcon from './XIcon';

import { TypeCardFields, TypeIconFields } from '@/lib/generated-types';
import { JsonObject } from 'type-fest';

interface ICardProps {
  entry: TypeCardFields;
}

export default function Card({ entry }: ICardProps) {
  const {
    title,
    titleSize,
    subText,
    materialDesignIcon,
    iconSize,
    iconColor,
    imagePosition,
  } = entry;

  const iconFields = (materialDesignIcon as any).fields as TypeIconFields;
  const iconColorFields = iconColor as JsonObject;

  const iconEntry = {
    ...iconFields,
    ...iconColorFields,
    iconSize,
    imagePosition,
  };

  return (
    <li className='flex flex-col items-center lg:flex-row mx-4 my-2 lg:ml-12'>
      <XIcon entry={iconEntry} />
      <address className='flex flex-col justify-center ml-2'>
        <span className='font-bold'>{title as any}</span>
        <span className='text-gray-500'>{subText as any}</span>
      </address>
    </li>
  );
}
