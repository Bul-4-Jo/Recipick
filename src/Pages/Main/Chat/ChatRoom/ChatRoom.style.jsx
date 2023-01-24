import styled from 'styled-components';

export const ChatRoomWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.subBackground};
`;
export const RigthChat = styled.section`
  & > div.rightMsg:first-child {
    margin-top: 70px;
  }
  & > div.rightMsg {
    float: right;
    margin: 0 16px 10px 0;
    padding: 12px;
    border-radius: 10px 0 10px 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.ground};
    line-height: 140%;
  }
`;

export const LeftChatWrapper = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
export const LeftChat1 = styled.section`
  float: left;
  display: flex;
  vertical-align: top;
  & > div.userProfile {
    margin-right: 12px;
  }
  & > div.leftMsg {
    display: inline-block;
    margin: 0 0 10px 12px;
    padding: 12px;
    border-radius: 0 10px 10px 10px;
    border: 1px solid ${({ theme }) => theme.colors.placeholder};
    background-color: ${({ theme }) => theme.colors.ground};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.mainText};
    line-height: 140%;
  }
`;

export const LeftChat2 = styled.section`
  float: left;
  display: flex;
  & > img {
    display: block;
    margin: 0 0 10px 12px;
    width: 240px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.placeholder};
  }
`;
export const InputWrapper = styled.section`
  display: flex;
  position: absolute;
  padding: 13px 16px;
  width: 100%;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.ground};
  & > input {
    margin-left: 18px;
    border: none;
    border-right: 0px;
    border-top: 0px;
    boder-left: 0px;
    boder-bottom: 0px;
    width: 100%;
    font-family: 'SpoqaHanSans', sans-serif;
    &::placeholder {
      color: ${({ theme }) => theme.colors.border};
    }
    &:focus {
      outline: none;
    }
  }
  & > button {
    width: 40px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
