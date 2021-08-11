import React from 'react';
import * as S from './PricingOption.style';

import checked from '../../assets/check_circle.svg';
import circle from '../../assets/circle.svg';

const PricingOption = ({
  checkedState,
  setCheckState,
  planDuration,
  saveAmount,
  planPrice,
  priceWithoutDisc,
  priceWithDisc,
  index,
}) => {
  return (
    <>
      <S.Option
        onClick={() => {
          setCheckState(index);
        }}
        className={checkedState === index ? 'checked' : ''}
      >
        <div>
          <S.PlanDuration>
            {planDuration} month plan{' '}
            {saveAmount && <S.SaveSpan> Save {saveAmount}%</S.SaveSpan>}
          </S.PlanDuration>
          <S.PriceDiv>
            <S.Price>${planPrice}</S.Price> / month
          </S.PriceDiv>
          {priceWithoutDisc ? (
            <>
              <S.PriceWithoutDisc>${priceWithoutDisc}</S.PriceWithoutDisc>
              <S.PriceWithDisc> ${priceWithDisc} </S.PriceWithDisc>
              <span>billed every {planDuration} months</span>
            </>
          ) : (
            <div>Billed monthly</div>
          )}
        </div>
        <div>
          {checkedState === index ? (
            <S.CheckButton src={checked} alt="checked" />
          ) : (
            <S.CheckButton src={circle} alt="unchecked" />
          )}
        </div>
      </S.Option>
    </>
  );
};

export default PricingOption;
