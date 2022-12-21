import styled from 'styled-components';

export const SectionWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const ContentWrapper = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;
