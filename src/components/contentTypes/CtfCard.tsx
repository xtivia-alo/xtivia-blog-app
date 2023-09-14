import CtfIcon from './CtfIcon';
import { TypeCardFields } from '@/lib/generated-types';
import { JsonObject } from 'type-fest';
import CtfImageWithFocalPoint from './CtfImageWithFocalPoint';
import { ReactNode } from 'react';
import { EntryFieldTypes } from 'contentful';

interface ICardProps {
  type?: 'address' | 'address-footer' | 'main';
  entry: TypeCardFields;
}

function BorderContainer({
  children,
  hasBorder,
}: {
  children: ReactNode;
  hasBorder: EntryFieldTypes.Boolean | undefined;
}) {
  const borderStyle =
    'before:w-[17px] before:h-[17px] before:border-picton-blue before:absolute after:w-[17px] after:h-[17px] after:border-picton-blue after:absolute';
  const borderTopLeftStyle =
    'before:top-0 before:left-0 before:border-t-2 before:border-l-2';
  const borderTopRightStyle =
    'after:top-0 after:right-0 after:border-t-2 after:border-r-2';
  const borderBottomLeftStyle =
    'before:bottom-0 before:left-0 before:border-b-2 before:border-l-2';
  const borderBottomRightStyle =
    'after:bottom-0 after:right-0 after:border-b-2 after:border-r-2';

  if (hasBorder) {
    return (
      <div
        className={`p-5 relative ${borderStyle} ${borderTopLeftStyle} ${borderTopRightStyle}`}
      >
        <span
          className={`${borderStyle} ${borderBottomLeftStyle} ${borderBottomRightStyle}`}
        >
          {children}
        </span>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}

export default function CtfCard({ entry, type = 'main' }: ICardProps) {
  const {
    title,
    titleSize,
    subText,
    materialDesignIcon,
    image,
    iconSize,
    iconBorder,
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
      } items-center ${type !== 'main' && 'md:flex-row'} ${
        type === 'main' && `px-5 py-6 mx-5`
      }`}
    >
      {image && (
        <BorderContainer hasBorder={iconBorder}>
          <CtfImageWithFocalPoint entry={(image as any).fields} />
        </BorderContainer>
      )}
      {iconEntry && (
        <BorderContainer hasBorder={iconBorder}>
          <CtfIcon entry={iconEntry} />
        </BorderContainer>
      )}
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
        } ${type === 'address' && 'pt-3.5 md:pl-3.5 md:pt-0 md:text-left'}`}
      >
        {title &&
          (type === 'main' ? (
            <HeaderTag className='mt-5'>{title.toString()}</HeaderTag>
          ) : (
            <span className='font-bold text-black'>{title.toString()}</span>
          ))}
        {type === 'main' ? (
          <p className='text-gray-500 mt-5'>{subText.toString()}</p>
        ) : (
          <span className='text-gray-500'>{subText.toString()}</span>
        )}
      </div>
    </li>
  );
}
