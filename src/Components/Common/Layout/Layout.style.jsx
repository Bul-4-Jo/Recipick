import styled from 'styled-components';

export const LayoutMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  max-width: 780px;
  margin: 0 auto;
  background-color: ${({ isJoin, theme }) => (isJoin ? theme.colors.ground : theme.colors.mainText)};

  & > section {
    height: calc(100% - 108px);
    overflow-y: auto;
  }
`;

export const LayoutIntroWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.ground};
`;
