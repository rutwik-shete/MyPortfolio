import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import kebab from 'lodash/kebabCase';
import styled from 'styled-components';

const Menu = styled.div`
  div {
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
const Table = () => {
  const [allTitles, setAllTitles] = useState(null);
  const [hasNavigated, setHasNavigated] = useState(null);

  useEffect(() => {
    const titles = document.querySelectorAll('h3');
    const indexArr = Object.values(titles).map((el, i) => {
      const directId = el.attributes.direct?.value;
      return (
        <div
          className="anchorLink"
          onClick={() => {
            setHasNavigated(true);
            navigate(
              directId
                ? '#' + el.id
                : '#' + kebab(el.innerText.split(' ').slice(1, 7)),
            );
          }}
          key={`titles-index-${i}`}
        >
          {el.innerText.replace(/Q:|:/, '')}
        </div>
      );
    });
    setAllTitles(indexArr);
  }, []);

  useEffect(() => {
    const goToTitle = () => {
      setHasNavigated(false);
      navigate('#title', { replace: true });
      window.removeEventListener('hashchange', goToTitle);
    };
    if (hasNavigated) {
      window.addEventListener('hashchange', goToTitle);
    }
  }, [hasNavigated]);
  return <Menu style={{ display: 'grid' }}>{allTitles}</Menu>;
};

export default Table;

export const H1 = ({ children: text, id: directID, ...props }) => {
  const id = directID || kebab(text.split(' ').slice(1, 7));
  return (
    <div>
      <h3 id={id}>{text}</h3>
    </div>
  );
};
