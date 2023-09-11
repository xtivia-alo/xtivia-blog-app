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

  const { cards, cardDisplayStyle, cardsInARow, maxWidth } = entry;

  return (
    <div
      style={{
        maxWidth: `${maxWidth}px`,
      }}
      className={`lg:py-16 h-full w-full flex ${
        cardDisplayStyle.toString() === 'Horizontal'
          ? 'flex-row gap-6'
          : 'flex-col'
      } items-top justify-center`}
    >
      {(cards as ICards).length > 0 &&
        (cards as ICards)?.map((ele: any, idx: any) => {
          return <CtfCard key={idx} entry={ele.fields as TypeCardFields} />;
        })}
    </div>
  );
}
