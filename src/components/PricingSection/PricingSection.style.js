import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media only screen and (min-width: 785px) {
    max-width: 343px;
    margin-right: 32px;
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
`;

export const ColoredSpan = styled.span`
  color: #ff9b4e;
`;

export const ConditionsText = styled.div`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 18px;
  text-align: center;
`;

export const SecondConditionText = styled.div`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const StyledLink = styled.a`
  color: #90caf9;
`;

export const SafeCheckoutImage = styled.img`
  display: block;
  margin: 0 auto;
  @media only screen and (max-width: 375px) {
    max-height: 40px;
  }
`;
