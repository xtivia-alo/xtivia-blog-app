import Icon from '@mdi/react';
import * as Path from '@mdi/js';
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
    <Icon
      path={Path[iconName as keyof typeof Path]}
      size={iconSizeMap[iconSize as keyof typeof iconSizeMap]}
      color={value as string}
    />
  );
}
