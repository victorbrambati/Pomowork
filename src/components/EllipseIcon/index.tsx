import React from 'react';

import {
  Container,
  DesktopIcon,
  BarbellIcon,
  CodeIcon,
  EllipseBackgroundColor,
  BookIcon,
} from './styles';

export type EllipseIconColor = 'pink' | 'purple' | 'orange' | 'gray' | 'green';

export type EllipseColorProps = {
  ellipseColor?: EllipseIconColor;
};

export type EllipseIconProps = EllipseColorProps & {
  icons?: string;
};

const EllipseIcon = ({ ellipseColor, icons }: EllipseIconProps) => {
  return (
    <Container>
      <EllipseBackgroundColor ellipseColor={ellipseColor}>
        <div>
          {icons === 'Desktop' && <DesktopIcon />}
          {icons === 'Workout' && <BarbellIcon />}
          {icons === 'Code' && <CodeIcon />}
          {icons === 'Book' && <BookIcon />}
        </div>
      </EllipseBackgroundColor>
    </Container>
  );
};

export default EllipseIcon;
