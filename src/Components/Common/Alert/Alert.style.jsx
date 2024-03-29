import styled from 'styled-components';

export const BackgroundBlur = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const AlertWrapper = styled.div`
  outline: 0.5px solid ${({ theme }) => theme.colors.border};
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
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
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.ms};
`;

export const AlertBtnStyle = styled.button`
  color: ${({ theme }) => theme.colors.mainText};
  font-family: 'SpoqaHanSans', sans-serif;
  /* width: 50%; */
  width: ${props => (props.one ? '100%' : '50%')};
  padding: 16px 0;
  border-top: 0.5px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;

  &.actBtn {
    border-left: 0.5px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
