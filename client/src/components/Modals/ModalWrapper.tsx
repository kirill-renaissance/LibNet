import React from 'react';

interface ModalWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isCloseable?: boolean;
}

import styles from './ModalWrapper.module.scss';

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  isOpen,
  onClose,
  title,
  isCloseable = true,
}) => {
  return (
    <div
      onClick={() => isCloseable && onClose()}
      className={`overlay ${isOpen ? 'overlay-show' : 'overlay-hide'}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={'wrapper'}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          {isCloseable && (
            <button onClick={() => onClose()}>
              {/* <CrossIcon /> */}
              <img src="/assets/cross.svg" />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
