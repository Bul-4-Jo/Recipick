import styled from 'styled-components';
import iconChat from '../../../../Assets/Icons/icon_chat.png';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
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
  gap: 10px;
  a {
      cursor: pointer;
      background-image: url(${iconChat});
    }
  }
`;
