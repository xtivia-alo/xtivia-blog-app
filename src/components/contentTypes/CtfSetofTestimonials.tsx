'use client';

import { TypeSetOfTestimonialsFields } from '@/lib/generated-types';
import CtfTestimonial from './CtfTestimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomIcon from '../CustomIcon';

export default function CtfSetofTestimonials(
  entry: TypeSetOfTestimonialsFields
) {
  const { title, titleSize, testimonials, maxWidth } = (entry as any).entry;
  const HeaderTag = titleSize as any;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const LeftArrow = (props: any) => {
    const { carouselState, children, ...rest } = props;
    return (
      <div className='absolute left-0'>
        <CustomIcon
          color='#bab8b8'
          width={48}
          height={48}
          path='mdi:chevron-left'
        />
      </div>
    );
  };

  const RightArrow = (props: any) => {
    const { carouselState, children, ...rest } = props;
    return (
      <div className='absolute right-0'>
        <CustomIcon
          color='#bab8b8'
          width={48}
          height={48}
          path='mdi:chevron-right'
        />
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          maxWidth: ` ${maxWidth}px`,
        }}
        className='py-16 px-12 lg:px-22 xl:px-52 2xl:px-[20rem]'
      >
        {title && (
          <>
            <HeaderTag className='text-center'>{title}</HeaderTag>
            <div className='flex justify-center mb-8'>
              <hr className='w-[40px] border-b-2 border-picton-blue' />
            </div>
          </>
        )}
        <Carousel
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
          draggable={true}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          containerClass='carousel-container'
        >
          {(testimonials as any)?.length > 0 &&
            (testimonials as any).map((ele: any, idx: any) => {
              return <CtfTestimonial idx={idx} key={idx} entry={ele.fields} />;
            })}
        </Carousel>
      </div>
    </>
  );
}
