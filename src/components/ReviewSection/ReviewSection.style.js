import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 16px;
  padding: 0 10px;

  @media only screen and (min-width: 785px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  padding: 0 10px;
  margin: 0 auto 48px;
  max-width: 989px;

  @media only screen and (min-width: 785px) {
    display: flex;
  }
`;

export const CenterButton = styled.div`
  text-align: center;
  padding: 0 10px;
`;
