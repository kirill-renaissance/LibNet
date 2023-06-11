import React from 'react';
import ModalWrapper from '../ModalWrapper';

import styles from './AddBookModal.module.scss';
import MainInput from '../../MainInput';
import MainButton from '../../MainButton';

interface IProps {
  isOpen: boolean;
  setModal: (v: boolean) => void;
}

const AddBookModal: React.FC<IProps> = ({ isOpen, setModal }) => {
  const [name, setName] = React.useState('');
  return (
    <ModalWrapper title="Add book" onClose={() => setModal(false)} isOpen={isOpen}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <MainInput style={{ flex: 1 }} title="author's surname" value={name} setValue={setName} />
          <MainInput style={{ flex: 1 }} title="author's name" value={name} setValue={setName} />
        </div>
        <div className={styles.row}>
          <MainInput style={{ flex: 1 }} title="Book title" value={name} setValue={setName} />
          <MainInput
            style={{ flex: 1 }}
            title="The year of publishing"
            value={name}
            setValue={setName}
          />
        </div>
        <div className={styles.row}>
          <MainInput style={{ flex: 1 }} title="ISBN" value={name} setValue={setName} />
          <MainInput style={{ flex: 1 }} title="Owner price" value={name} setValue={setName} />
        </div>

        <MainInput style={{ flex: 1 }} title="owner's address" value={name} setValue={setName} />
        <MainInput style={{ flex: 1 }} title="rental period" value={name} setValue={setName} />

        <MainButton style={{ marginTop: 30 }} title="Add book" />
      </div>
    </ModalWrapper>
  );
};

export default AddBookModal;
