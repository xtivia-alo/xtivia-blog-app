import { TypeFooterFields } from '@/lib/generated-types';
import { ReactNode } from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CtfImageWithFocalPoint from './CtfImageWithFocalPoint';
import CtfNavigationItem from './CtfNavigationItem';
import CtfCard from './CtfCard';

const FooterCardContainer = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className='px-6'>
      {title && <h4 className=''>{title}</h4>}
      <hr className='mt-2 my-6 border-gray-500' />
      {children}
    </div>
  );
};

const FooterCompanySummaryCard = ({ entry }: { entry: TypeFooterFields }) => {
  const { logo, content } = entry;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
    },
  };

  return (
    <div className='flex flex-col p-6'>
      <CtfImageWithFocalPoint entry={(logo as any)?.fields} />
      <div className='py-4'>
        {documentToReactComponents(content as any, options)}
      </div>
    </div>
  );
};

const FooterNavigationCard = ({ entry }: { entry: TypeFooterFields }) => {
  const { navigation } = entry;
  return (
    <FooterCardContainer title='Navigation'>
      <div className='grid grid-cols-2 gap-x-16 gap-y-4 text-xs tracking-tight text-gray-400'>
        {(navigation as any).length > 0 &&
          (navigation as any).map((ele: any, idx: any) => {
            return (
              <CtfNavigationItem type='Footer' key={idx} entry={ele.fields} />
            );
          })}
      </div>
    </FooterCardContainer>
  );
};

const FooterContactCard = ({ entry }: { entry: TypeFooterFields }) => {
  const { contactInfo } = entry;
  return (
    <FooterCardContainer title='Contact info'>
      <div className='flex flex-col'>
        {(contactInfo as any).length > 0 &&
          (contactInfo as any).map((ele: any, idx: any) => {
            return <CtfCard key={idx} entry={ele.fields} address={false} />;
          })}
      </div>
    </FooterCardContainer>
  );
};

const FooterSubscribeCard = ({ entry }: { entry: TypeFooterFields }) => {
  const { contactInfo } = entry;
  return (
    <FooterCardContainer title='Subscribe'>
      <form action='submit'>
        <label className='block mb-2' htmlFor='footer-input-email'>
          Get latest updates and offers.
        </label>
        <div className='flex flex-row'>
          <input
            style={{
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
            }}
            className='min-w-[150px]'
            id='footer-input-email'
            name='footer-input-email'
            type='text'
            placeholder='E-Mail'
          />
          <button className='rounded-l-none primary-btn'>Send</button>
        </div>
      </form>
    </FooterCardContainer>
  );
};

export default function CtfFooter(entry: TypeFooterFields) {
  const { content, maxWidth } = (entry as any).entry;

  return (
    <div
      style={{
        maxWidth: `${maxWidth}px`,
      }}
      className='text-white bg-outer-space py-16 px-auto h-full w-full'
    >
      <div className='w-10/12 max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <FooterCompanySummaryCard entry={(entry as any).entry} />
        <FooterNavigationCard entry={(entry as any).entry} />
        <FooterContactCard entry={(entry as any).entry} />
        <FooterSubscribeCard entry={(entry as any).entry} />
      </div>
    </div>
  );
}
