import CtfCard from './CtfCard';
import {
  TypeCardFields,
  TypeCardSkeleton,
  TypeSetOfCardFields,
} from '@/lib/generated-types';
import { EntryFieldTypes } from 'contentful';

export default function CtfSetOfCard({
  entry,
}: {
  entry: TypeSetOfCardFields;
}) {
  interface ICards
    extends Array<any>,
      EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>> {}

  const { title, titleSize, cards, cardDisplayStyle, cardsInARow, maxWidth } =
    entry;

  const HeaderTag = titleSize as any;

  return (
    <div
      className='py-16 px-4 md:px-16 lg:px-48 h-full w-full'
      style={{
        maxWidth: `${maxWidth}px`,
      }}
    >
      {title && (
        <>
          <HeaderTag className='text-center'>{title}</HeaderTag>
          <div className='flex justify-center mb-8'>
            <hr className='w-[40px] border-b-2 border-picton-blue' />
          </div>
        </>
      )}
      <div
        className={`${
          cardDisplayStyle.toString() === 'Horizontal'
            ? 'grid gap-4 md:grid-cols-2 xl:grid-cols-4 justify-items-center'
            : 'flex flex-col'
        } items-top justify-center`}
      >
        {(cards as ICards).length > 0 &&
          (cards as ICards)?.map((ele: any, idx: any) => {
            return <CtfCard key={idx} entry={ele.fields as TypeCardFields} />;
          })}
      </div>
    </div>
  );
}
