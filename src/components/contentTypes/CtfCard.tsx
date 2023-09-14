import CtfIcon from './CtfIcon';
import { TypeCardFields } from '@/lib/generated-types';
import { JsonObject } from 'type-fest';
import CtfImageWithFocalPoint from './CtfImageWithFocalPoint';
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
    image,
    iconSize,
    iconColor,
    imagePosition,
    textAlignment,
  } = entry;

  const iconFields = materialDesignIcon && (materialDesignIcon as any).fields;
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
      } items-center ${address && 'md:flex-row'} xl:max-w-[250px] my-2`}
    >
      {image && <CtfImageWithFocalPoint entry={(image as any).fields} />}
      <div className='mx-2'>{iconEntry && <CtfIcon entry={iconEntry} />}</div>
      <div
        className={`flex flex-col justify-center ${
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
        {title &&
          (address ? (
            <span className='font-bold text-black'>{title.toString()}</span>
          ) : (
            <HeaderTag>{title.toString()}</HeaderTag>
          ))}
        {address ? (
          <span className='text-gray-500'>{subText.toString()}</span>
        ) : (
          <p className='text-gray-500'>{subText.toString()}</p>
        )}
      </div>
    </li>
  );
}
