import React from 'react';
import ModalWrapper from '../ModalWrapper';

import styles from './BecomeHostModal.module.scss';
import MainInput from '../../MainInput';
import MainButton from '../../MainButton';

interface IProps {
  isOpen: boolean;
  setModal: (v: boolean) => void;
}

const BecomeHostModal: React.FC<IProps> = ({ isOpen, setModal }) => {
  const [name, setName] = React.useState('');

  return (
    <ModalWrapper title="Become Host" onClose={() => setModal(false)} isOpen={isOpen}>
      <div className={styles.wrapper}>
        <MainInput title="Library name" value={name} setValue={setName} />
        <div className={styles.row}>
          <MainInput style={{ flex: 1 }} title="country" value={name} setValue={setName} />
          <MainInput style={{ flex: 1 }} title="City" value={name} setValue={setName} />
        </div>
        <MainInput title="Address" value={name} setValue={setName} />
        <MainInput title="Contact details" value={name} setValue={setName} />
        <MainInput title="Specialty" value={name} setValue={setName} />
        <div className={styles.row}>
          <MainInput style={{ width: '50%' }} title="Hosting fee" value={name} setValue={setName} />
          <MainButton title="Become a host" />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BecomeHostModal;
