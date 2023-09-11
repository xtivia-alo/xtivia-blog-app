import CustomIcon from '../CustomIcon';
import { iconSizeMap } from '@/lib/utils/iconSizeMap';

interface TypeXIconFields {
  [key: string]: any;
}

interface IIconProps {
  entry: TypeXIconFields;
}

export default function XIcon({ entry }: IIconProps) {
  const { iconName, iconSize, value } = entry;

  return (
    <CustomIcon
      width={iconSizeMap[iconSize as keyof typeof iconSizeMap].width}
      height={iconSizeMap[iconSize as keyof typeof iconSizeMap].height}
      color={value as string}
      path={iconName}
    />
  );
}
