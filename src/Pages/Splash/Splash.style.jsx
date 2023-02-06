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
  width: calc(100% - 80px);
  max-width: 260px;
  margin: 0 auto;
`;
