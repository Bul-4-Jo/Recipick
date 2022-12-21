import styled from 'styled-components';

export const InfoWrapper = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 24px;
  }

  & + article {
    margin-left: 70px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.div`
  margin-left: 12px;
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: 4px;
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.subText};
  }
`;
