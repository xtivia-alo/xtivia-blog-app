import CtfIcon from './CtfIcon';
import { TypeCardFields } from '@/lib/generated-types';
import { JsonObject } from 'type-fest';
interface ICardProps {
  address?: boolean;
  entry: TypeCardFields;
}

export default function CtfCard({ entry, address }: ICardProps) {
  const {
    title,
    titleSize,
    subText,
    materialDesignIcon,
    iconSize,
    iconColor,
    imagePosition,
    textAlignment,
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
    <li
      className={`flex ${
        imagePosition?.toString() === 'Top' ||
        imagePosition?.toString() === 'Bottom'
          ? 'flex-col'
          : 'flex-row'
      } items-center ${address && 'md:flex-row'} max-w-[200px] mx-4 my-2`}
    >
      <CtfIcon entry={iconEntry} />
      <div
        className={`flex flex-col justify-center ml-2 ${
          textAlignment.toString() === 'Left'
            ? 'text-left'
            : textAlignment.toString() === 'Right'
            ? 'text-right'
            : textAlignment.toString() === 'Center'
            ? 'text-center'
            : textAlignment.toString() === 'Justify'
            ? 'text-justify'
            : 'text-left'
        }`}
      >
        <HeaderTag>{title.toString()}</HeaderTag>
        <p className='text-gray-500'>{subText.toString()}</p>
      </div>
    </li>
  );
}
