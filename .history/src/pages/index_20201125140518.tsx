import React from 'react';
import { sanitize } from 'isomorphic-dompurify';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>{sanitize('demo')}</h1>
    </div>
  );
};
