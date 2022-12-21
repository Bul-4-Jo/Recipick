import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 48px;
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  strong {
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 700;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.sx};
  }
`;

export const Followings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  strong {
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.subText};
    font-weight: 700;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.sx};
    color: ${({ theme }) => theme.colors.subText};
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 17px 0 24px;
  strong {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.subText};
    margin: 6px 0 20px 0;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.subText};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.colors.background};
      border-radius: 50%;
      padding: 7px;
      img{
        width: 20px;
      }
    }
  }
`;
