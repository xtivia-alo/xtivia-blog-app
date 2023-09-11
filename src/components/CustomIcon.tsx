'use client';

import { Icon } from '@iconify/react';

interface ICustomIconProps {
  [key: string]: any;
}

export default function CustomIcon(props: ICustomIconProps) {
  const { path, width, height } = props;
  return (
    <>
      {path && (
        <Icon
          width={width ? width : 12}
          height={height ? height : 12}
          icon={path}
        />
      )}
    </>
  );
}
