import {
  Hero as H,
  HeroP as HP,
  Section as S,
} from '../../../../styles/components';

import styled from 'styled-components';

export const Section = styled(S)`
  max-width: 675px;
  h2 {
    font-weight: bold;
    font-family: Montserrat;
  }
  ul {
    display: grid;
    li {
      list-style: disc;
      margin-left: 2rem;
    }
  }
`;
export const Hero = styled(H)`
  font-size: 2.3rem !important;
`;
export const Sub = styled(Hero)`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Email = styled.a`
  font-size: 1.3rem;
  margin: 2rem 0;
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
`;
export const Note = styled(HP)`
  padding: 0;
  margin: 1rem 0;
`;
export const HeroP = styled(HP)``;
