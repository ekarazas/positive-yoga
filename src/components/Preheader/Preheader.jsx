import React from 'react';
import * as S from './Preheader.style';

import offerTag from '../../assets/local_offer.svg';

const Preheader = () => {
  return (
    <>
      <S.PreheaderBlock>
        <S.OfferImage src={offerTag} alt="offer" />
        <S.OfferText>
          <S.BoldedText>50% </S.BoldedText>
          discount only valid for
          <S.BoldedText> 00:15:49</S.BoldedText>
        </S.OfferText>
      </S.PreheaderBlock>
    </>
  );
};

export default Preheader;
