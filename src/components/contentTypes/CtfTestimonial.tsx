import { TypeTestimonialFields } from '@/lib/generated-types';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CtfImageWithFocalPoint from './CtfImageWithFocalPoint';

export default function CtfTestimonial({
  entry,
  idx,
}: {
  entry: TypeTestimonialFields;
  idx: number;
}) {
  const { name, title, testimonial, profileImage } = entry;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className='px-7 mt-6'>{children}</p>
      ),
    },
  };

  return (
    <div className='mx-2 md:mx-4 lg:mx-2 rounded-sm flex flex-col border border-gray-200 items-center justify-center text-center'>
      <div className='px-1 py-10'>
        <div className='flex flex-row justify-center my-4'>
          <div className='flex justify-center items-center'>
            <hr className='border-gray-300 w-[66px] mr-2' />
          </div>
          <CtfImageWithFocalPoint
            entry={(profileImage as any)?.fields}
            rounded={true}
          />
          <div className='flex justify-center items-center'>
            <hr className='border-gray-300 w-[66px] ml-2' />
          </div>
        </div>
        {documentToReactComponents(testimonial as any, options)}
        <div className='mt-6 flex flex-col'>
          <span className='font-bold'>{name.toString()}</span>
          <span className='text-gray-400'>{`(${title.toString()})`}</span>
        </div>
      </div>
    </div>
  );
}
