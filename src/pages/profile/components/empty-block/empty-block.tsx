import { FC } from 'react';
import { EmptyTitles } from 'enums';
import { keyExtractor } from 'utils/key-extractor';

import { Container, Title } from './empty-block.style';

export const EmptyBlock: FC<{ title: EmptyTitles }> = ({ title }) => {
  const titleWithN = () =>
    title.split('\n').map((item, index) => <Title key={`content-${keyExtractor(index)}`}>{item}</Title>);

  return <Container data-test-id='empty-blue-card'>{titleWithN()}</Container>;
};
