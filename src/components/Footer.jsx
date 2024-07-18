import React from 'react';
import { colors as c } from '../styles/components';

import Sc from '../components/Social';
import styled from 'styled-components';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

const Foot = styled.footer`
  position: relative;
  padding: 2rem clamp(1rem, 7vw, 200px);
  z-index: 2;
  background-color: ${c.background};
  #footWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0 2rem;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    > * {
      padding: 1rem 0;
    }
  }
`;

const Social = styled(Sc)``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 0.5rem;
`;

const Heading = styled.div`
  display: block;
  font-weight: bold;
  color: ${c.grey};
  margin-bottom: 0.5rem;
`;

const To = ({ text, link }) => <Link href={link}>{text}</Link>;

const Logo = styled(Link)`
  color: white !important;
  font-size: 1.4rem !important;
  line-height: 2rem !important;
  margin-bottom: 1rem !important;
  padding-bottom: 1rem !important;
`;

const Div = Box;

export default function Footer() {
  return (
    <Foot>
      <div id="footWrap">
        <Div maxW="200px" color={c.faded}>
          <Logo href="/">Rutwik Shete</Logo>
          <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
            © {new Date().getFullYear()}, Built and designed by Rutwik
            Shete
          </div>
        </Div>

        <Div w="200px">
          <Heading>Links</Heading>
          <Grid>
            <To text="About" link="/about"></To>
            {/* <To text="Blog" link="/blog"></To> */}
            <To text="Projects" link="/#projects"></To>
            <To text="Contact" link="/#contact"></To>
          </Grid>
        </Div>

        <Div w="200px">
          <Heading>Get in touch</Heading>
          <Div display={'flex'} flexDirection={'column'}>
            <Social c={'white'} h={'white'} p={'0rem 1rem 2rem 0px'} />
          </Div>
        </Div>
      </div>
    </Foot>
  );
}
