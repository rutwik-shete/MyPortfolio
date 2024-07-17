import React from 'react';
import styled from 'styled-components';
import { Tags } from '../styles/components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    padding: 0 1rem 0 0;
  }
`;
const AllTags = styled(Tags)`
  width: 100%;
  justify-content: center !important;
  @media only screen and (min-width: 768px) {
    padding-right: 0;
    max-width: 100%;
    width: 100%;
    justify-content: flex-start !important;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }
  li {
    position: relative;
    font-size: 1rem;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const skills = [
  { name: 'PyTorch', type: 'ailib' },
  { name: 'TensorFlow', type: 'ailib' },
  { name: 'HuggingFace', type: 'ailib' },
  { name: 'Supervised', type: 'aialgo' },
  { name: 'Self Supervised', type: 'aialgo' },
  { name: 'Fine Tuning', type: 'aialgo' },
  { name: 'Transfer Learning', type: 'aialgo' },
  { name: 'Diffusion', type: 'aimodel' },
  { name: 'GANs', type: 'aimodel' },
  { name: 'CNNs', type: 'aimodel' },
  { name: 'Vision Transformers', type: 'aimodel' },
  { name: 'Flask', type: 'backend' },
  { name: 'FastAPI', type: 'backend' },
  { name: 'Docker', type: 'devOps' },
  { name: 'Kubernetes', type: 'devOps' },
  { name: 'Research' },
];

export default function SkillIcons() {
  return (
    <Wrapper>
      <AllTags>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        {skills.map((s, i) => (
          <li key={`skill-i-${i}`} className={s.type}>
            {s.name}
          </li>
        ))}
      </AllTags>
    </Wrapper>
  );
}
