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

  const CustomRightArrow = ({ onClick: any, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return;
  };

  return (
    <>
      <div
        style={{
          maxWidth: ` ${maxWidth}px`,
        }}
        className='py-16 px-12 lg:px-28 xl:px-72 2xl:px-[28rem]'
      >
        <Carousel
          customLeftArrow={
            <div className='absolute z-50 left-0'>
              <CustomIcon
                color='#bab8b8'
                width={48}
                height={48}
                path='mdi:chevron-left'
              />
            </div>
          }
          customRightArrow={
            <div className='absolute z-50 right-0'>
              <CustomIcon
                color='#bab8b8'
                width={48}
                height={48}
                path='mdi:chevron-right'
              />
            </div>
          }
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
