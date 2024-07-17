import React from 'react';
import styled from 'styled-components';

export default function Email() {
  return (
    <EmailWrapper>
      <div>rutwik.shete@icloud.com</div>
    </EmailWrapper>
  );
}

const EmailWrapper = styled.div`
  font-family: Muli;
  display: grid;
  place-items: center;
  border-radius: 40px;
  font-size: 2rem;
  padding: 1rem;
  border: 2px solid blue;
  font-weight: bold;
`;
