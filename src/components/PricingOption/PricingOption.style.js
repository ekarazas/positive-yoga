import styled from 'styled-components';

export const Option = styled.div`
  cursor: pointer;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.checked {
    border: 2px solid #ff9b4e;
  }
`;

export const PlanDuration = styled.div`
  font-weight: 600;
`;

export const SaveSpan = styled.span`
  background: #ffe082;
  border-radius: 6px;
  font-size: 12px;
  padding: 3px 8px;
`;

export const PriceDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export const PriceWithoutDisc = styled.span`
  text-decoration: line-through;
`;

export const PriceWithDisc = styled.span`
  color: #ff9b4e;
  font-weight: 600;
`;

export const CheckButton = styled.img``;
