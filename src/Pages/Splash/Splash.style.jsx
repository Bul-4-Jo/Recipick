import styled from 'styled-components';

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoWrapper = styled.div`
  text-align: center;
  width: 50vw;
  max-width: 560px;
  margin: 0 auto;
`;

export const LogoWrap = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
