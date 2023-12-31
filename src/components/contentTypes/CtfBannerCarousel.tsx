'use client';

import CtfHeroImage from './CtfHeroImage';
import { EntryFieldTypes } from 'contentful';
import CustomIcon from '../CustomIcon';
import {
  TypeBannerCarouselFields,
  TypeHeroImageSkeleton,
} from '@/lib/generated-types';
import { useState, MouseEvent, useContext } from 'react';
import { AppContext, AppContextType } from '@/providers/AppContextProvider';

interface IHeroImages
  extends Array<any>,
    EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroImageSkeleton>> {}

export default function CtfBannerCarousel({
  entry,
}: {
  entry: TypeBannerCarouselFields;
}) {
  const { banners } = entry;
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isDesktop, mobileNavHeight } = useContext(
    AppContext
  ) as AppContextType;

  const handleIncrease = (e: MouseEvent<HTMLButtonElement>) => {
    if (currentIndex === (banners as IHeroImages).length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDecrease = (e: MouseEvent<HTMLButtonElement>) => {
    const max = (banners as IHeroImages).length;

    if (currentIndex === 0) {
      setCurrentIndex(max - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      style={{
        maxWidth: '1920px',
        marginTop: `${!isDesktop ? mobileNavHeight : 0}px`,
      }}
      className='w-full relative flex flex-row items-center'
    >
      <div className='h-full absolute left-0 items-center z-10 hidden md:flex'>
        <button
          onClick={handleDecrease}
          className='bg-gray-500 opacity-50 text-white'
        >
          <CustomIcon width={48} height={48} path='mdi:chevron-left' />
        </button>
      </div>
      <div className='h-full absolute right-0 items-center z-10 hidden md:flex'>
        <button
          onClick={handleIncrease}
          id='hero-carousel-up'
          className='bg-gray-500 opacity-50 text-white'
        >
          <CustomIcon width={48} height={48} path='mdi:chevron-right' />
        </button>
      </div>
      {(banners as IHeroImages).length > 0 &&
        (banners as IHeroImages)?.map((ele, idx) => {
          const contentType = ele.sys.contentType.sys.id;

          switch (contentType) {
            case 'heroImage':
              return (
                <CtfHeroImage
                  key={idx}
                  idx={idx}
                  entry={ele.fields}
                  currentIndex={currentIndex}
                />
              );
            default:
              return null;
          }
        })}
    </div>
  );
}
