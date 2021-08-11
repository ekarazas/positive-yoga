import styled from 'styled-components';

export const Review = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  flex: 1;
  min-height: 607px;
  margin-top: 25px;
  padding: 16px;

  @media only screen and (min-width: 785px) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const Title = styled.h5`
  font-size: 15px;
  font-weight: 600;
`;

export const LocationSpan = styled.span`
  color: #22222c64;
  font-size: 12px;
`;

export const ReviewText = styled.p`
  color: #22222c;
  font-size: 16px;
  margin-top: 16px;
  line-height: 24px;
`;

export const Rating = styled.div`
  margin: 18px 0;
`;
