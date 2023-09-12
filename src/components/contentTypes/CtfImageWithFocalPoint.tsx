import { TypeImageWithFocalPointFields } from '@/lib/generated-types';
import Image from 'next/image';
import { AssetDetails } from 'contentful';

export default function CtfImageWithFocalPoint({
  entry,
  rounded = false,
}: {
  entry: TypeImageWithFocalPointFields;
  rounded: boolean;
}) {
  const logoImageEntry = (entry.image as any).fields;
  const logoDimensions = logoImageEntry?.file?.details as AssetDetails;

  return (
    <Image
      className={`${rounded && 'border rounded-full'}`}
      src={`https:${logoImageEntry.file?.url}`}
      alt={entry.altText.toString()}
      width={logoDimensions.image?.width}
      height={logoDimensions.image?.height}
    />
  );
}
