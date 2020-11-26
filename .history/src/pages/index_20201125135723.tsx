import React from 'react';
import { sanitize } from 'dompurify';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index{sanitize('123')}</h1>
    </div>
  );
};
