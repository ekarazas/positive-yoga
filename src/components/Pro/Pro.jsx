import React from 'react';
import * as S from './Pro.style';

const Pro = ({ src, title, subtitle }) => {
  return (
    <>
      <S.Pro>
        <S.ProImage src={src} alt="icon" />
        <S.ProTextBlock>
          <S.ProTitle>{title}</S.ProTitle>
          <S.ProSubtitle>{subtitle}</S.ProSubtitle>
        </S.ProTextBlock>
      </S.Pro>
    </>
  );
};

export default Pro;
