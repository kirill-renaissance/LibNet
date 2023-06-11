import React from 'react';
import ModalWrapper from '../ModalWrapper';
import MainInput from '../../MainInput';

import styles from './BookSearch.module.scss';

interface IProps {
  isOpen: boolean;
  setModal: (v: boolean) => void;
}

const BookSearch: React.FC<IProps> = ({ isOpen, setModal }) => {
  const [search, setSearch] = React.useState('');
  return (
    <ModalWrapper isOpen={isOpen} onClose={() => setModal(false)} title="BookSearch">
      <div className={styles.wrapper}>
        <MainInput placeholder="Search" value={search} setValue={setSearch} />

        <ul className={styles.books}>
          <div className={styles.row}>
            <p className={styles.id}>1</p>
            <p className={styles.title}>Book Title</p>
            <p className={styles.author}>Author</p>
            <p className={styles.deadline}>Deadline</p>
            <button className={styles.redButton}>Rent</button>
          </div>
        </ul>
      </div>
    </ModalWrapper>
  );
};

export default BookSearch;
