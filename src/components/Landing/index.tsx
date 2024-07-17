// import SEO from "../components/seo"

import { Section as S } from '../../styles/components';

import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`${fadeIn}`;

export const Section = styled(S)`
  animation: 1s ${FadeIn};
`;
export const HeroSection = styled(Section)<{ invert: boolean }>`
  max-width: 100vw;
`;

export const Email = styled.a`
  font-size: 1.3rem;
  * {
    padding-bottom: 1rem;
    margin: 2rem 0 !important;
  }
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
`;

export const ProjectImage = styled.div`
  grid-area: image;

  * {
    max-width: 500px;
    border-radius: 40px;
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.2s ease-in-out;
    :hover,
    :focus {
      transform: translate(0, -2%);
      box-shadow: 0px 40px 8px -10px#585858;
      cursor: pointer;
    }
  }
`;
export const ReadMore = styled.div`
  font-family: Muli;
  transition: 0.8s ease-in-out;

  :hover {
    font-weight: bold;
    filter: brightness(0.8);
  }
`;
