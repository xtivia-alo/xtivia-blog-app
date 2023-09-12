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
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote>{children}</blockquote>
      ),
    },
  };

  return (
    <div className='w-[280px] h-[340px] p-12 flex flex-col border border-gray-200 items-center justify-center text-center'>
      <div className='flex flex-row w-full my-4'>
        <div className='grow flex justify-center items-center'>
          <hr className='border-gray-300 grow mr-2' />
        </div>
        <CtfImageWithFocalPoint
          entry={(profileImage as any)?.fields}
          rounded={true}
        />
        <div className='grow flex justify-center items-center'>
          <hr className='border-gray-300 grow ml-2' />
        </div>
      </div>
      {documentToReactComponents(testimonial as any, options)}
      <div className='mt-4 flex flex-col'>
        <span className='font-bold'>{name.toString()}</span>
        <span className='text-gray-400'>{`(${title.toString()})`}</span>
      </div>
    </div>
  );
}
