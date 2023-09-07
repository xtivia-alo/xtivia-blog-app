import Card from './Card';
import { TypeCardFields, TypeCardSkeleton } from '@/lib/generated-types';
import { EntryFieldTypes } from 'contentful';

export default function SetOfCard({
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
          return <Card key={idx} entry={ele.fields as TypeCardFields} />;
        })}
    </>
  );
}
