import React from 'react';
import * as S from './Button.style';

const Button = ({ children }) => {
  return <S.Button primary>{children}</S.Button>;
};

export default Button;
