import React, { useState } from 'react';
import * as S from './PricingSection.style';
import safeCheckout from '../../assets/safe_checkout.svg';

import PricingOption from '../PricingOption/PricingOption';
import Button from '../Button/Button';

const PricingSection = () => {
  const [checkedState, setCheckedState] = useState();

  return (
    <>
      <S.Container>
        <S.Title>
          Choose your plan and get{' '}
          <S.ColoredSpan>7 days free trial</S.ColoredSpan>{' '}
        </S.Title>
        <PricingOption
          planDuration={6}
          saveAmount={50}
          planPrice={9.99}
          priceWithoutDisc={119.94}
          priceWithDisc={59.94}
          setCheckState={setCheckedState}
          checkedState={checkedState}
          index={1}
        />
        <PricingOption
          planDuration={3}
          planPrice={14.99}
          priceWithoutDisc={59.97}
          priceWithDisc={44.97}
          setCheckState={setCheckedState}
          checkedState={checkedState}
          index={2}
        />

        <PricingOption
          planDuration={1}
          planPrice={19.99}
          checkedState={checkedState}
          setCheckState={setCheckedState}
          index={3}
        />
        <S.CenteredButton>
          <Button>Get your plan</Button>
        </S.CenteredButton>
        <S.ConditionsText>
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </S.ConditionsText>
        <S.SecondConditionText>
          By choosing a payment method you agree to the
          <S.StyledLink> T&Cs </S.StyledLink>and
          <S.StyledLink> Privacy Policy</S.StyledLink>
        </S.SecondConditionText>
        <S.SafeCheckoutImage src={safeCheckout} alt="safe checkout image" />
      </S.Container>
    </>
  );
};

export default PricingSection;
