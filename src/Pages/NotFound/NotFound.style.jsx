import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  button {
    margin-bottom: 100px;
  }
`;
