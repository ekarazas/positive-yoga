import styled from 'styled-components';

export const PlanSection = styled.section`
  margin: 16px auto;
  max-width: 785px;
  padding: 0 10px;
`;

export const Subtitle = styled.p`
  font-size: 14px;

  @media only screen and (min-width: 785px) {
    text-align: center;
  }
`;

export const BoldedText = styled.span`
  font-weight: 700;
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 36px;
  margin: 10px 0;

  @media only screen and (min-width: 785px) {
    font-size: 40px;
    line-height: 56px;
    text-align: center;
  }
`;

export const FlexContainer = styled.div`
  @media only screen and (min-width: 785px) {
    display: flex;
  }
`;
