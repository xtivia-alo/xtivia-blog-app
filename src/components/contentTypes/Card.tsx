import XIcon from './XIcon';

import { TypeCardFields, TypeIconSkeleton } from '@/lib/generated-types';
import { JsonObject } from 'type-fest';
import { EntryFieldTypes, EntrySkeletonType } from 'contentful';

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

  const iconFields = (materialDesignIcon as any).fields;
  const iconColorFields = iconColor as JsonObject;

  const iconEntry = {
    ...iconFields,
    ...iconColorFields,
    iconSize,
    imagePosition,
  };

  const HeaderTag = titleSize as any;

  return (
    <li className='flex flex-col items-center md:flex-row mx-4 my-2 lg:ml-12'>
      <XIcon entry={iconEntry} />
      <div className='flex flex-col justify-center ml-2'>
        <HeaderTag>{title as any}</HeaderTag>
        <p className='text-gray-500'>{subText as any}</p>
      </div>
    </li>
  );
}
