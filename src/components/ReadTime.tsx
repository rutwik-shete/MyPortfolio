import React from 'react';
import styled from 'styled-components';

export default function ReadTime({ text }: { text: string }) {
  if (typeof text === 'number') {
    return <ReadTimeWrapper>{text + ' minute read'}</ReadTimeWrapper>;
  }
  const readTime = Math.ceil(text.split(' ').length / 240);
  return <ReadTimeWrapper>{readTime + ' minute read'}</ReadTimeWrapper>;
}

export const ReadTimeWrapper = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
`;
