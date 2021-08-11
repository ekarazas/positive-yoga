import React from 'react';
import * as S from './PlanSection.style';

import PricingSection from '../PricingSection/PricingSection';
import ProsSection from '../ProsSection/ProsSection';

const PlanSection = () => {
  return (
    <>
      <S.PlanSection>
        <S.Subtitle>
          Over
          <S.BoldedText> 52 147 </S.BoldedText>
          plans ordered.
        </S.Subtitle>
        <S.Title>Get access to your yoga program now!</S.Title>
        <S.FlexContainer>
          <PricingSection />
          <ProsSection />
        </S.FlexContainer>
      </S.PlanSection>
    </>
  );
};

export default PlanSection;
