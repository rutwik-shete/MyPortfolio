import React, { useRef } from 'react';
import styled from 'styled-components';

export default function Clouds({ roll, top, pulse, size, offset }: any) {
  const thisCloud = useRef();

  function randomizeValue(min: number, max: number) {
    const rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
  }

  const index = randomizeValue(3, 5);
  const cloud = `/cloud_${index}.svg`;

  return (
    <SVGcontainer
      //@ts-ignore
      ref={thisCloud}
      roll={roll}
      top={top}
      pulse={pulse}
      size={size}
      offset={offset}
    >
      <img src={cloud} />
    </SVGcontainer>
  );
}

export const SVGcontainer = styled.div<any>`
  position: absolute;

  width: ${(props) => props.size};
  top: ${(props) => props.top};
  overflow: hidden;
  left: ${(props) => props.offset};

  @keyframes pulse {
    0%,
    100% {
      transform: translate(0, 0);
      filter: opacity(1);
    }
    50% {
      transform: translate(0, 30%);
      filter: opacity(0.6);
    }
  }
  @keyframes roll {
    0% {
    }
    100% {
      left: 120vw;
    }
  }
  @keyframes life {
    0% {
      filter: opacity(0);
    }
    100% {
      filter: opacity(1);
    }
  }
  @keyframes spin {
    0% {
      filter: opacity(0.6);
    }
    100% {
      filter: opacity(0);
    }
  }

  animation:
    pulse ${(props) => props.pulse} ease-in-out infinite alternate,
    roll ${(props) => props.roll} linear forwards;

  svg {
    z-index: -999;
    animation: life linear 2s;
    path {
      fill: white;
    }
  }
`;
