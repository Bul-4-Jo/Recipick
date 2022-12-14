import styled from 'styled-components';

export const AlertWrapper = styled.div`
  outline: 0.5px solid ${({ theme }) => theme.colors.border};
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: white;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const AlertTit = styled.p`
  font-weight: 500;
  padding: 22px 0;
  font-size: 1.6rem;
`;

export const AlertBtnStyle = styled.button`
  font-family: SpoqaHanSans;
  width: 50%;
  padding: 14px 0;
  font-size: 1.4rem;
  font-weight: 500;
  border-top: 0.5px solid ${({ theme }) => theme.colors.border};

  &.actBtn {
    border-left: 0.5px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
