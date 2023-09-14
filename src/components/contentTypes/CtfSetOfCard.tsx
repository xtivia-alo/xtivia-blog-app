import CtfCard from './CtfCard';
import {
  TypeCardFields,
  TypeCardSkeleton,
  TypeSetOfCardFields,
} from '@/lib/generated-types';
import { EntryFieldTypes } from 'contentful';

interface ICards
  extends Array<any>,
    EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>> {}

export default function CtfSetOfCard({
  entry,
}: {
  entry: TypeSetOfCardFields;
}) {
  const { title, titleSize, cards, cardDisplayStyle, cardsInARow, maxWidth } =
    entry;

  const HeaderTag = titleSize as any;

  return (
    <div
      className='py-16'
      style={{
        maxWidth: `${maxWidth}px`,
      }}
    >
      {title && (
        <>
          <HeaderTag className='text-center'>{title}</HeaderTag>
          <div className='flex justify-center mt-5 mb-8'>
            <hr className='w-[50px] border-b-2 border-picton-blue' />
          </div>
        </>
      )}
      <div
        className={`${
          cardDisplayStyle.toString() === 'Horizontal'
            ? 'grid-shell grid'
            : 'flex flex-col'
        } ${
          cardDisplayStyle.toString() === 'Horizontal' &&
          ((cardsInARow as any) === 3
            ? 'md:grid-cols-3 xl:grid-cols-3'
            : 'md:grid-cols-2 xl:grid-cols-4')
        } items-top m-auto justify-center`}
      >
        {(cards as ICards).length > 0 &&
          (cards as ICards)?.map((ele: any, idx: any) => {
            return <CtfCard key={idx} entry={ele.fields as TypeCardFields} />;
          })}
      </div>
    </div>
  );
}
