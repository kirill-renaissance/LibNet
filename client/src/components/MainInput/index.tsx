import React, { Dispatch, SetStateAction } from 'react';

import styles from './MainInput.module.scss';

export enum InputType {
  text = 'text',
  password = 'password',
  number = 'number',
}

export interface MainInputProps {
  style?: React.CSSProperties;
  title?: string;
  isRequired?: boolean;
  desc?: string;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: InputType;
  error?: string;
}

const MainInput: React.FC<MainInputProps> = ({
  title,
  isRequired = false,
  desc,
  placeholder,
  value,
  setValue,
  style,
  type = InputType.text,
  error,
}) => {
  return (
    <div className={styles.wrapper} style={style && { ...style }}>
      {title && (
        <p className={styles.title}>
          {title}
          {isRequired && <span>*</span>}
        </p>
      )}
      {desc && <p className={styles.desc}>{desc}</p>}
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default MainInput;
