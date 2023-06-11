import React from 'react';

import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthButton from './AuthButton';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <Link href="/">
              <h1 className={styles.title}>LibNet</h1>
            </Link>
            <ul className={styles.menu}>
              <Link href="/find">
                <li>Find a book</li>
              </Link>
              <Link href="/host">
                <li>Add a book</li>
              </Link>
            </ul>
          </div>
          <div>
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
