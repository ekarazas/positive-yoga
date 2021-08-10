import React from 'react';
import * as S from './Header.style';

import Logo from '../../assets/Logo.svg';

const Header = () => {
  return (
    <>
      <S.HeaderBlock>
        <S.LogoImage src={Logo} alt="logo" />
      </S.HeaderBlock>
    </>
  );
};

export default Header;
