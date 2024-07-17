import { FaReact } from 'react-icons/fa';
import styled from 'styled-components';

export default function Icon({
  speed,
  type = 'react',
}: {
  speed: string;
  type?: string;
}) {
  const icons: { [key: string]: JSX.Element } = {
    react: <FaReact />,
  };
  return <Wrapper speed={speed}>{icons[type]}</Wrapper>;
}

const Wrapper = styled.div<any>`
  svg {
    color: #ff715b;
    @keyframes example {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
    font-size: 2rem;
    animation: example ${(props) => props.speed} linear infinite;
  }
`;
