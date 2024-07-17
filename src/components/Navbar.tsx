import delay from 'lodash/debounce';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import { colors } from '../styles/components';
import { useRouter } from 'next/navigation';

const Container = styled.nav<{ invert: boolean }>`
  * {
    color: ${(props) => (props.invert ? colors.white : colors.background)};
  }
  position: absolute;
  left: 0;
  top: 0;
  background-color: #121e27;
  z-index: 999;
  text-align: center;
  width: 100%;
  padding: 1rem 3rem;

  #burger {
    color: white;
    position: absolute;
    right: 2rem;
    top: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
  }
  .hide {
    display: none !important;
  }

  #menu {
    margin-top: 1rem;
    display: grid;
    grid-template-rows: 1fr;
    gap: 1rem;
  }

  > div {
    position: relative;
  }

  ul {
    transition: 0.4s ease-in-out display;
    display: flex;
    justify-content: space-evenly;

    @media only screen and (max-width: 320px) {
      justify-content: center;
      li {
        margin: 0 1rem;
      }
    }
  }

  li {
    position: relative;
    margin: 0;
    padding: 0;
    border-bottom: 5px ${colors.accent} solid;
    transition: border-bottom 0.2s ease-in-out;

    :hover,
    :focus {
      border-bottom: 10px ${colors.accent} double;
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 768px) {
    > div {
      display: grid;
      grid-template-columns: 50% 1fr;
      text-align: left;
    }
    ul {
      padding: 0;
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-width: 768px) {
    .hide {
      display: flex !important;
    }
    #menu {
      display: flex;
      margin-top: 0;
    }
    #burger {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    > div {
      display: grid;
      grid-template-columns: 80% 1fr;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .invisible {
    animation: fadeOut 0.7s forwards;
  }
`;

export default function Navbar({ invert }: { invert?: boolean }) {
  const [hidenav, setHidenav] = useState(true);
  const [buffer, setBuffer] = useState(null);
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  const delayedFunc = delay(() => {
    const height = window.pageYOffset;
    setHidenav(true);
    //@ts-ignore
    setBuffer(height);
  }, 2000);

  useEffect(() => {
    let scroller = () => {
      setHidenav(false);
      delayedFunc();
    };
    //@ts-ignore
    setBuffer(window.pageYOffset);

    window.addEventListener('scroll', scroller);

    return () => window.removeEventListener('scroll', scroller);
  }, []);

  const delayedHide = delay(() => setHidenav(true), 1000);

  const hasLeft = () => {
    delayedHide();
  };

  const Logo = styled.div`
    display: inline;
  `;

  return (
    <Container
      invert={true}
      onMouseOver={() => setHidenav(false)}
      onMouseLeave={hasLeft}
    >
      <Link href="/">
        <Logo>Rutwik Shete</Logo>
      </Link>
      <div id="burger" onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </div>
      {
        <ul id="menu" className={`${!open ? 'hide' : ''}`}>
          {['about' /*  'blog' */].map((node, i) => {
            return (
              <Link key={`navlink-${i}`} href={`/${node}`} tabIndex={0}>
                <li>{node}</li>
              </Link>
            );
          })}
          {['projects', 'contact'].map((link, i) => (
            <Link
              key={`navlink-${i}-2`}
              tabIndex={0}
              href={`/#${link}`}
              onKeyDown={(e) => {
                if (e.keyCode === 13) push(`/#${link}`);
              }}
            >
              <li>{link}</li>
            </Link>
          ))}
        </ul>
      }
    </Container>
  );
}
