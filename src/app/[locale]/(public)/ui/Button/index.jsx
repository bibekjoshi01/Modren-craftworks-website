import React from 'react';

import styles from './Button.module.scss';

const OutlinedBtn = ({ text, svg }) => {
  return (
    <button className={styles.outlinedBtn}>
      <span> {text} </span> {svg && svg}
    </button>
  );
};

const FilledBtn = ({ text, svg, active = true }) => {
  return (
    <button className={`${styles.filledBtn} ${!active && styles.disabled}`}>
      <span> {text} </span> {svg && svg}
    </button>
  );
};

export { OutlinedBtn, FilledBtn };
