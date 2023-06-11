import React from 'react';

import styles from './Host.module.scss';
import MainButton from '../MainButton';
import BecomeHostModal from '../Modals/BecomeHostModal';
import AddBookModal from '../Modals/AddBookModal';

const Host = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <AddBookModal isOpen={showModal} setModal={setShowModal} />
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

            <MainButton onClick={() => setShowModal(true)} title="Add book" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Host;
