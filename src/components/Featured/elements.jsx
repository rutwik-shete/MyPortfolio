import { Box } from '@chakra-ui/react';
import styled from 'styled-components';

export const FeaturedProjects = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  > div {
    flex: auto;
    display: grid;
    grid-template-rows: auto 200px auto auto;
    gap: 1rem;
    padding: 1rem 0;
  }

  div:last-child {
    display: none;
  }

  @media only screen and (min-width: 62em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    > div {
      flex: 1;
      gap: 1.3rem;
      grid-template-rows: 5rem 200px 200px 1fr;
    }
    p {
      max-width: 200px;
    }
    div:last-child {
      display: grid;
    }
  }
`;

export const GotoBlog = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: Muli;
  margin: 1rem auto 0;
  span {
    font-weight: bold;
  }
  > *:last-child {
    margin-left: 0.5rem;
  }
  @media only screen and (min-width: 62em) {
    justify-content: flex-end;
    margin: 2rem auto 0;
  }
`;

export const ProjectImage = styled.div`
  h3 {
    margin: 0;
    max-width: 95%;
  }
  a {
    margin: 0;
  }

  p {
    color: #585858;
    overflow: hidden;
    margin: 1rem 0;
  }

  .imageFluidContainer {
    max-width: 200px;
    border-radius: 40px;
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.2s ease-in-out;
    border: 1px solid#585858;
    :hover,
    :focus {
      transform: translate(0, -2%);
      box-shadow: 0px 40px 8px -10px#585858;
      cursor: pointer;
    }
  }
`;
