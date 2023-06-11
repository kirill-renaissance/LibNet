import React from 'react';

import styles from './MainButton.module.scss';

interface MainButtonProps {
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
  style,
  textStyle,
  title,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      style={style}
      disabled={isDisabled}
      onClick={() => onClick && onClick()}
      className={styles.wrapper}>
      <p style={textStyle}>{title}</p>
    </button>
  );
};

export default MainButton;
