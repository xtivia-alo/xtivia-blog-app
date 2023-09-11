import CtfIcon from './CtfIcon';

import { TypeCardFields } from '@/lib/generated-types';
import { JsonObject } from 'type-fest';
interface ICardProps {
  entry: TypeCardFields;
}

export default function CtfCard({ entry }: ICardProps) {
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
      <CtfIcon entry={iconEntry} />
      <div className='flex flex-col justify-center ml-2'>
        <HeaderTag>{title.toString()}</HeaderTag>
        <p className='text-gray-500'>{subText.toString()}</p>
      </div>
    </li>
  );
}
