import React from 'react';
import MainInput from '../../MainInput';
import ModalWrapper from '../ModalWrapper';

import styles from './BookRental.module.scss';
import MainButton from '../../MainButton';

interface IProps {
  isOpen: boolean;
  setModal: (v: boolean) => void;
}

const BookRental: React.FC<IProps> = ({ isOpen, setModal }) => {
  const [name, setName] = React.useState('');

  return (
    <ModalWrapper title="Book rental" onClose={() => setModal(false)} isOpen={isOpen}>
      <div className={styles.wrapper}>
        <h2>Title</h2>
        <h2>Author</h2>
        <h2>Host</h2>
        <h2>Minimum deposit price</h2>
        <div className={styles.row}>
          <MainInput style={{ flex: 1 }} title="Rental period" value={name} setValue={setName} />
          <MainInput style={{ flex: 1 }} title="Price" value={name} setValue={setName} />
        </div>

        <p className={styles.idk}>
          Press the pay button when you are at the host and see the book you want to rent!
        </p>
        <MainButton style={{ marginTop: 30 }} title="Pay" />
      </div>
    </ModalWrapper>
  );
};

export default BookRental;
