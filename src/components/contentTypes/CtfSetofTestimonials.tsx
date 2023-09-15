'use client';

import { TypeSetOfTestimonialsFields } from '@/lib/generated-types';
import CtfTestimonial from './CtfTestimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomIcon from '../CustomIcon';
import { useRef } from 'react';

export default function CtfSetofTestimonials(
  entry: TypeSetOfTestimonialsFields
) {
  const { title, titleSize, testimonials, maxWidth } = (entry as any).entry;
  const HeaderTag = titleSize as any;
  const ref = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 991 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 767 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handleClick = (type: 'left' | 'right') => {
    if (ref.current) {
      if (type === 'left') {
        (ref.current as any).previous();
      } else if (type === 'right') {
        (ref.current as any).next();
      }
    }
  };

  const LeftArrow = (props: any) => {
    const { carouselState, children, ...rest } = props;
    return (
      <div className='z-10 absolute left-0 inset-y-0 flex items-center'>
        <div onClick={() => handleClick('left')}>
          <CustomIcon
            color='#bab8b8'
            width={48}
            height={48}
            path='mdi:chevron-left'
          />
        </div>
      </div>
    );
  };

  const RightArrow = (props: any) => {
    const { carouselState, children, ...rest } = props;
    return (
      <div className='absolute right-0 inset-y-0 flex items-center'>
        <div onClick={() => handleClick('right')}>
          <CustomIcon
            color='#bab8b8'
            width={48}
            height={48}
            path='mdi:chevron-right'
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          maxWidth: ` ${maxWidth}px`,
        }}
        className='py-16'
      >
        <div className='grid-shell m-auto'>
          {title && (
            <>
              <HeaderTag className='text-center'>{title}</HeaderTag>
              <div className='flex justify-center mt-5 mb-8'>
                <hr className='w-[50px] border-b-2 border-picton-blue' />
              </div>
            </>
          )}
          <div className='relative px-10 xl:px-14'>
            <LeftArrow />
            <RightArrow />
            <Carousel
              ref={ref}
              arrows={false}
              draggable={true}
              responsive={responsive}
              infinite={true}
              keyBoardControl={true}
            >
              {(testimonials as any)?.length > 0 &&
                (testimonials as any).map((ele: any, idx: any) => {
                  return (
                    <CtfTestimonial idx={idx} key={idx} entry={ele.fields} />
                  );
                })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
