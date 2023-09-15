import { TypeImageWithFocalPointFields } from '@/lib/generated-types';
import Image from 'next/image';
import { AssetDetails } from 'contentful';

export default function CtfImageWithFocalPoint({
  entry,
  fill = false,
  rounded = false,
}: {
  entry: TypeImageWithFocalPointFields;
  fill?: boolean;
  rounded?: boolean;
}) {
  const logoImageEntry = (entry.image as any).fields;
  const logoDimensions = logoImageEntry?.file?.details as AssetDetails;

  return fill ? (
    <Image
      className={`${rounded ? 'rounded-full' : 'rounded-sm'} w-full h-auto`}
      src={`https:${logoImageEntry.file?.url}`}
      alt={entry.altText.toString()}
      width='0'
      height='0'
      sizes='100vw'
    />
  ) : (
    <Image
      className={`${rounded ? 'rounded-full' : 'rounded-sm'}`}
      src={`https:${logoImageEntry.file?.url}`}
      alt={entry.altText.toString()}
      width={logoDimensions.image?.width}
      height={logoDimensions.image?.height}
    />
  );
}
