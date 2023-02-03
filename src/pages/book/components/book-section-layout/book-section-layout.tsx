import { FC, ReactNode } from 'react';
import { SeparationLine } from 'components/separation/separation-line';

import { TitleBookSection } from './book-section-layout.style';

type LayoutProps = {
  title: string;
  details?: number;
  withSeparator?: boolean;
  children: ReactNode;
  isPadding?: boolean;
};

export const BookSectionLayout: FC<LayoutProps> = ({
  title,
  details,
  withSeparator = true,
  children,
  isPadding = false,
}) => (
  <div>
    <TitleBookSection isPadding={isPadding}>
      {title} <span>{details}</span>
    </TitleBookSection>
    {withSeparator && <SeparationLine />}
    {children}
  </div>
);
