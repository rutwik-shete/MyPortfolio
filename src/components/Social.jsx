import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { colors } from '../styles/components';
import styled from 'styled-components';
import Link from 'next/link';

const SocialIcons = styled.div`
  font-size: 2rem;
  display: flex;

  a {
    padding: ${(props) => props.p || '2rem 1rem 2rem 0px'};
    filter: opacity(0.8);
    color: ${(props) => props.c};
    transition:
      filter 0.4s ease-in-out,
      color 0.4s ease-in-out;
    :hover,
    :focus {
      filter: opacity(1);
      color: ${(props) => props.h};
    }
  }
`;

export default function Social({ c = colors.accent, h = 'white', p = null }) {
  return (
    <SocialIcons c={c} h={h} p={p}>
      <Link href={`https://github.com/rutwik-shete`} target="blank">
        <FaGithub />
      </Link>
      <Link href={`https://www.linkedin.com/in/rutwik-shete/`} target="blank">
        <FaLinkedin />
      </Link>
      <Link href={`https://x.com/rutwikshete`} target="blank">
        <FaTwitter />
      </Link>
      <Link href="mailto:rutwik.shete@icloud.com">
        <AiFillMail />
      </Link>
    </SocialIcons>
  );
}
