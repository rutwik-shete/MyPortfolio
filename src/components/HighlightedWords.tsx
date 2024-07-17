import React from 'react';
import styles from '@/styles/style.module.scss';

export const HighlightedWords = ({ title }: { title: string }) => {
  return title.split(' ').map((text, i) => {
    if (text.includes('**')) {
      const reg = /\*/g;
      return (
        <div key={`highlightwords-${i}`} className={styles.highlight}>
          <div>{text.replace(reg, '')}</div>
          <div className={styles.highlighUnderline}></div>
        </div>
      );
    }
    return <div key={`highlightwords-${i}`}>{text}</div>;
  });
};
