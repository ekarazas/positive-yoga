import styled from 'styled-components';

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
  height: 56px;
  width: 100%;

  @media only screen and (min-width: 785px) {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    height: 72px;
  }
`;

export const LogoImage = styled.img``;
