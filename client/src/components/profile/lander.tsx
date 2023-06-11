import React from 'react';

import styles from './Host.module.scss';
import MainButton from '../MainButton';
import BookSearch from '../Modals/BookSearch';
import BookRental from '../Modals/BookRental';

const Lander = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  return (
    <>
      <BookSearch isOpen={showModal} setModal={setShowModal} />
      <BookRental isOpen={showModal2} setModal={setShowModal2} />
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
                <button className={styles.redButton}>Return</button>

                <button className={styles.greenButton}>Payment</button>
              </div>
            </ul>

            <MainButton onClick={() => setShowModal(true)} title="Rent a book" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lander;
