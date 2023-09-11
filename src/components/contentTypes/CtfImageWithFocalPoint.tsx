import { TypeImageWithFocalPointFields } from '@/lib/generated-types';
import Image from 'next/image';
import { AssetDetails } from 'contentful';

export default function CtfImageWithFocalPoint({
  entry,
}: {
  entry: TypeImageWithFocalPointFields;
}) {
  const logoImageEntry = (entry.image as any).fields;
  const logoDimensions = logoImageEntry?.file?.details as AssetDetails;

  return (
    <Image
      src={`https:${logoImageEntry.file?.url}`}
      alt={entry.altText.toString()}
      width={logoDimensions.image?.width}
      height={logoDimensions.image?.height}
    />
  );
}