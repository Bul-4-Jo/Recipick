import styled from 'styled-components';

export const UserProfileWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.subBackground};

  section {
    background-color: ${({ theme }) => theme.colors.ground};
  }
  & > section + section {
    margin-top: 6px;
  }
`;

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0;
  padding: 20px 20px 0;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 48px;
`;

export const Followers = styled.div`
  flex-basis: auto;
  width: 50px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  strong {
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainText};
  }
  p {
    color: ${({ theme }) => theme.colors.subText};
    font-size: ${({ theme }) => theme.fontSizes.sx};
  }
`;

export const Followings = styled.div`
  flex-basis: auto;
  width: 50px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  strong {
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.subText};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainText};
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
    color: ${({ theme }) => theme.colors.mainText};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.subText};
    margin: 6px 0 20px 0;
  }
  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.subText};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
  a,
  button {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    padding: 7px;
  }
  img {
    width: 20px;
  }
`;
