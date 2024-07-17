import { colors } from '@/styles/components';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  buttonText: string;
  link: string;
};

export const SlidingButton = ({ buttonText, link }: Props) => {
  return (
    <StyledButton href={link} invert={false}>
      <button className="sliding-button-first">{buttonText}</button>
      <div tabIndex={-1} className="sliding-button-second">
        {buttonText}
      </div>
    </StyledButton>
  );
};

const StyledButton = styled(Link)<{ invert: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  padding-bottom: 2rem;

  * {
    position: absolute;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    top: 0;
    left: 0;
    padding: 1rem 2.5rem 1.1rem;
    @media only screen and (min-width: 1024px) {
      margin-top: 2rem;
    }
  }

  .sliding-button-first {
    background: ${(props) => (props.invert ? colors.green : colors.accent)};
    color: ${colors.white};
    z-index: 100;
    transform: translate3d(-8px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: transform 0.2s ease-in-out;
  }

  .sliding-button-second {
    z-index: 0;
    border: 2px ${(props) => (props.invert ? colors.white : colors.background)}
      solid;
    position: absolute;
    color: transparent;
  }

  .sliding-button-first:hover,
  :focus {
    transform: translate3d(2px, 2px, 2px);
    cursor: pointer;
  }

  @media only screen and (max-width: 400px) {
    * {
      font-size: 1rem;
    }
  }
  :focus {
    outline: none;
  }
`;
