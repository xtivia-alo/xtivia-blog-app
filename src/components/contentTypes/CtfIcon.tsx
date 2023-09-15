import CustomIcon from '../CustomIcon';
import { iconSizeMap } from '@/lib/utils/iconSizeMap';

interface TypeXIconFields {
  [key: string]: any;
}

interface IIconProps {
  type?: string;
  entry: TypeXIconFields;
}

export default function XIcon({ entry, type = '' }: IIconProps) {
  const { iconName, iconSize, value } = entry;

  return (
    <CustomIcon
      width={iconSize}
      height={iconSize}
      color={value as string}
      path={iconName}
    />
  );
}
