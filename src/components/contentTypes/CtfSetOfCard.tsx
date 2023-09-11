import CtfCard from './CtfCard';
import { TypeCardFields, TypeCardSkeleton } from '@/lib/generated-types';
import { EntryFieldTypes } from 'contentful';

export default function CtfSetOfCard({
  entry,
}: {
  entry: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
}) {
  interface ICards
    extends Array<any>,
      EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>> {}

  return (
    <>
      {(entry as ICards).length > 0 &&
        (entry as ICards)?.map((ele, idx) => {
          return <CtfCard key={idx} entry={ele.fields as TypeCardFields} />;
        })}
    </>
  );
}
