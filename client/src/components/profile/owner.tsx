import React from 'react';

import styles from './Host.module.scss';
import MainButton from '../MainButton';

const Owner = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2>Host page</h2>

        <div>
          <ul className={styles.books}>
            <div className={styles.row}>
              <p className={styles.id}>1</p>
              <p className={styles.title}>Book Title</p>
              <p className={styles.author}>Author</p>
              <p className={styles.deadline}>Deadline</p>
              <button className={styles.greenButton}>Return</button>
            </div>
          </ul>

          <MainButton title="Find host" />
        </div>
      </div>
    </div>
  );
};

export default Owner;
